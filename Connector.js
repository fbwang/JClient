/**
 * Created by crystal on 2017/5/28.
 */
   const ipc = require('electron').ipcRenderer;
   const BrowserWindow = require('electron').remote.BrowserWindow;
   var fromWindow ={};

   ipc.on('compute-factorial', function (event,  fromWindowId) {
       fromWindow = BrowserWindow.fromId(fromWindowId);
   });

const connectBtn = document.getElementById('Connect');
connectBtn.addEventListener('click', function (clickEvent) {
    var hostaddr = document.getElementById('host').value;
    var user = document.getElementById('username').value;
    var pwd = document.getElementById('password').value;
    var loginArgs = {
        data: {
            "username": user,
            "password": pwd
        },
        headers: {
            "Content-Type": "application/json"
        }
    };
    var Client = require('node-rest-client').Client;
    client = new Client();
    client.post(hostaddr+"/rest/auth/1/session", loginArgs,function (data, response) {
        if (response.statusCode === 200){
            session = data.session;
            searchArgs = {
                headers: {
                    cookie: session.name + '=' + session.value,
                    "Content-Type": "application/json"
                },
                data: {
                    expand: "field"
                }
            };
            client.get(hostaddr+"/rest/api/2/project", searchArgs, function (req,res) {
               // console.log(req);
                x = "";
               for (i = 0; i < req.length; i++){
                   var checkProject = req[i].key;
                   x = x+ "<div class='checkboxs'> <input onclick='projectCheck()' class='projects' type='checkbox' id="+checkProject+"><label for="+checkProject+">"+checkProject+"</label> </div>";
                   // console.log(checkProject);
               }
               document.getElementById('project').innerHTML = x;
            });
            fromWindow.webContents.send('factorial-computed', hostaddr, session);

            // console.log(searchArgs);
        }
    });
    // var just = "gh";
    // fromWindow.webContents.send('factorial-computed', hostaddr, just);

});

const cancelBtn = document.getElementById('cancel');
cancelBtn.addEventListener('click', function (clickEvent) {
    window.close()
});


