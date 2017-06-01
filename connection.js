/**
 * Created by crystal on 2017/5/28.
 */
const BrowserWindow = require('electron').remote.BrowserWindow;
const ipcRenderer = require('electron').ipcRenderer;
const path = require('path');

const invisMsgBtn = document.getElementById('connection');
const invisReply = document.getElementById('description');
var Client = require('node-rest-client').Client;
var searchArgs = {};
var hostaddress;

invisMsgBtn.addEventListener('click', function (clickEvent) {
    const windowID = BrowserWindow.getFocusedWindow().id;
    const invisPath = 'file://' + path.join(__dirname, './Connection.html');
    var win = new BrowserWindow({ width: 400, height: 400, show: true, frame: false });
    win.loadURL(invisPath);
    win.webContents.openDevTools();

    win.webContents.on('did-finish-load', function () {
        win.webContents.send('compute-factorial', windowID)
    })
});

ipcRenderer.on('factorial-computed', function (event, input, output) {
    // invisReply.textContent = output;
    searchArgs = output;
    hostaddress = input;
    console.log(input);
});

ipcRenderer.on('send-project', function (event, projects) {
    console.log(projects);
    console.log(searchArgs);
    console.log(hostaddress);
    var client = new Client();
    client.post(hostaddress+'/rest/api/2/search',searchArgs, function (req, res) {
        console.log(req);
    })

});

function createTable(obj) {

}