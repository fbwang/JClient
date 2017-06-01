// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

// const ipc = require('electron').ipcRenderer;
const electron = require('electron');
var Client = require('node-rest-client').Client;

const openBtn = document.getElementById('open');

openBtn.addEventListener('click', function (event) {
    console.log("Text");
    // debugger

    client = new Client();
// Provide user credentials, which will be used to log in to JIRA.
    var loginArgs = {
        data: {
            "username": "admin",
            "password": "Wfb+19910324"
        },
        headers: {
            "Content-Type": "application/json"
        }
    };
    client.post("https://fbwang.atlassian.net/rest/auth/1/session", loginArgs, function(data, response){
        if (response.statusCode === 200) {
            // debugger;
            console.log('succesfully logged in, session:', data.session);
            var session = data.session;
            // Get the session information and store it in a cookie in the header
            var searchArgs = {
                headers: {
                    // Set the cookie from the session information
                    cookie: session.name + '=' + session.value,
                    "Content-Type": "application/json"
                },
                data: {
                    // Provide additional data for the JIRA search. You can modify the JQL to search for whatever you want.
                    jql: "reporter = currentUser() order by created DESC"
                }
            };
            // Make the request return the search results, passing the header information including the cookie.
            client.post("https://fbwang.atlassian.net/rest/api/2/search", searchArgs, function(searchResult, response) {
                // console.log('status code:', response.statusCode);
                console.log('search result:', searchResult.issues);
                var x = "";
                for(var i = 0; i < searchResult.total; i++){
                    x = x + "<div>" + searchResult.issues[i].key + "</div>"
                }
                document.getElementById("sidebar").innerHTML = x;
                document.getElementById("summary").innerHTML = searchResult.issues[1].fields.summary;
                document.getElementById("description").innerHTML = searchResult.issues[1].fields.description;
            });
        }
        else {
            // throw "Login failed :";
            console.log("Failed to log on");
        }
    });

});

const createBtn = document.getElementById('create');

createBtn.addEventListener('click', function (clickEvent) {
    console.log(electron.app.getName());
});


// const BrowserWindow = require('electron').remote.BrowserWindow
// const ipcRenderer = require('electron').ipcRenderer
// const path = require('path')
//
// const invisMsgBtn = document.getElementById('connection')
// debugger
// const invisReply = document.getElementById('description')
//
// invisMsgBtn.addEventListener('click', function (clickEvent) {
//     const windowID = BrowserWindow.getFocusedWindow().id
//     const invisPath = 'file://' + path.join(__dirname, '../../sections/communication/invisible.html')
//     var win = new BrowserWindow({ width: 400, height: 400, show: true })
//     win.loadURL(invisPath)
//
//     win.webContents.on('did-finish-load', function () {
//         const input = 100
//         win.webContents.send('compute-factorial', input, windowID)
//     })
// })
//
// ipcRenderer.on('factorial-computed', function (event, input, output) {
//     const message = 'The factorial of ${input} is ${output}'
//     invisReply.textContent = message
// })
//
