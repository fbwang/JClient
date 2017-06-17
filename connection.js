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
var issues;

invisMsgBtn.addEventListener('click', function (clickEvent) {                           //Create login window
    const windowID = BrowserWindow.getFocusedWindow().id;
    const invisPath = 'file://' + path.join(__dirname, './Connection.html');
    var win = new BrowserWindow({ width: 400, height: 500, show: true, frame: false });
    win.loadURL(invisPath);
    win.webContents.openDevTools();

    win.webContents.on('did-finish-load', function () {
        win.webContents.send('compute-factorial', windowID)                             //After window load finished, send the main windowID to login window
    })
});

ipcRenderer.on('factorial-computed', function (event, input, output) {                  //Receive the message send by login window
    // invisReply.textContent = output;
    searchArgs = output;
    hostaddress = input;
    console.log(input);
});

ipcRenderer.on('send-project', function (event, projects) {                             //Receive the message send by login window
    console.log(projects);
    // treeroot = "<ul id='root'><li id='tree"+projects+"'><span>" + projects + "</span></li></ul>";
    $('#project').append("<div class='link'>"+projects+"</div>");
    // var sidebar = document.getElementById('trees');
    // sidebar.innerHTML = treeroot;
    var client = new Client();
    // var subtree = document.createElement('ul');
    // subtree.id = 'subtree';
    // document.getElementById('tree'+projects).appendChild(subtree);
    searchArgs.data.jql = "project = "+projects;

    client.get(hostaddress+'/rest/api/2/priority', searchArgs, function (req, res) {   //Get all priority from sever
        for (i = 0;i <req.length;i++){
            var tmp = document.createElement('li');
            tmp.id = req[i].name;
            tmp.innerHTML = req[i].name;
            $('#project').append(tmp)
        }
    });
    console.log(searchArgs);
    console.log(hostaddress);

    client.post(hostaddress+'/rest/api/2/search',searchArgs, function (req, res) {   //search issues
        console.log(req);
        issues = req.issues;
        issues.reverse();

        x = document.getElementById('list').innerHTML; // get table header
        // x = x + "<tr>";
        for (i = 0; i < issues.length; i++){
            if (issues[i].fields.assignee === null){
                // issues[i].fields.assignee.name = "Unassigned"
                assignee = "Unassigned"
            }
            else {
                assignee = issues[i].fields.assignee.name;
            }
            x= x + "<tr><td class='type'><img src=\""+issues[i].fields.issuetype.iconUrl+"\"></td><td class='key'>" +
             issues[i].key + "</td><td class=\"summary\">"+ issues[i].fields.summary+
             "</td><td class='assignee'>"+assignee+"</td><td class='reporter'>"+issues[i].fields.reporter.name+
                "</td><td class='priority'><img src=\""+issues[i].fields.priority.iconUrl+
                "\"></td><td class='status'>"+issues[i].fields.status.name+"</td></tr>"
        }
        document.getElementById('list').innerHTML = x;
    })

});


const tab = document.getElementById('list');
tab.addEventListener('click', function (clickEvent) {
    // console.log(tab.rowIndex)
    var td = clickEvent.srcElement;
    console.log(td.parentElement.rowIndex);
    // td.parentElement.setAttribute('style','background-color: #7fa9b1');
    issue = issues[td.parentElement.rowIndex-1];
    console.log(issue);
    document.getElementById('description_p').innerHTML = issue.fields.description;
});


window.$ = window.jQuery = require('jquery');
require('bootstrap');
$(document).ready(function () {
    // $('#priority_pie').click(function (e) {                        // Function of create a pie chart by priority
    //     // console.log(issues);
    //     // Initialization off pie data
    //     var priorities = [
    //         ['Highest', 0],
    //         ['High',0],
    //         ['Medium',0],
    //         ['Low',0],
    //         ['Lowest',0]
    //     ];
    //     // console.log(e.target);
    //     for (i = 0; i<issues.length; i++){                          //Count the num of each priority
    //         switch (issues[i].fields.priority.id){
    //             case "1": priorities[0][1]++;
    //             break;
    //             case "2": priorities[1][1]++;
    //             break;
    //             case "3": priorities[2][1]++;
    //             break;
    //             case "4": priorities[3][1]++;
    //             break;
    //             case "5": priorities[4][1]++;
    //             break;
    //
    //         }
    //     }
    //     // console.log('test'+count(issues,'priority'));
    //     var tempdata = count(issues,'priority');
    //     /*-------------------------*/
    //     google.charts.load('current', {'packages':['corechart']});
    //
    //     // Set a callback to run when the Google Visualization API is loaded.
    //     google.charts.setOnLoadCallback(drawChart);
    //
    //     // Callback that creates and populates a data table,
    //     // instantiates the pie chart, passes in the data and
    //     // draws it.
    //     function drawChart() {
    //
    //         // Create the data table.
    //         var data = new google.visualization.DataTable();
    //         data.addColumn('string', 'Topping');
    //         data.addColumn('number', 'Slices');
    //         data.addRows(tempdata);
    //
    //         // Set chart options
    //         var options = {'title':'How many issues each priority',
    //             'width':400,
    //             'height':300};
    //
    //         // Instantiate and draw our chart, passing in some options.
    //         var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
    //         chart.draw(data, options);
    //     }
    //     /*-------------------------*/
    //
    // });
    //
    // $("#status_pie").click(function (e) {
    //     var statuses = [
    //         ['To DO',0],
    //         ['In Progress',0],
    //         ['Done',0]
    //     ];
    //     for (i = 0; i < issues.length; i++){
    //         switch (issues[i].fields.status.id){
    //             case "10000": statuses[0][1]++;
    //             break;
    //             case "3": statuses[1][1]++;
    //             break;
    //             case "10001": statuses[2][1]++;
    //             break;
    //          }
    //     }
    //
    //     google.charts.load('current', {'packages':['corechart']});
    //
    //     // Set a callback to run when the Google Visualization API is loaded.
    //     google.charts.setOnLoadCallback(drawChart);
    //
    //     // Callback that creates and populates a data table,
    //     // instantiates the pie chart, passes in the data and
    //     // draws it.
    //     function drawChart() {
    //
    //         // Create the data table.
    //         var data = new google.visualization.DataTable();
    //         data.addColumn('string', 'Topping');
    //         data.addColumn('number', 'Slices');
    //         data.addRows(statuses);
    //
    //         // Set chart options
    //         var options = {'title':'How many issues each priority',
    //             'width':400,
    //             'height':300};
    //
    //         // Instantiate and draw our chart, passing in some options.
    //         var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
    //         chart.draw(data, options);
    //     }
    //
    // });

    $('.chart').click(function (e) {
        // console.log(this.id);
        var properties = count(issues,this.id);
        // var properties = [
        //     ['To Do',2]
        // ];
        /*-------------------------*/
        google.charts.load('current', {'packages':['corechart']});

        // Set a callback to run when the Google Visualization API is loaded.
        google.charts.setOnLoadCallback(drawChart);

        // Callback that creates and populates a data table,
        // instantiates the pie chart, passes in the data and
        // draws it.
        function drawChart() {

            // Create the data table.
            var data = new google.visualization.DataTable();
            data.addColumn('string', 'Topping');
            data.addColumn('number', 'Slices');
            data.addRows(properties);

            // Set chart options
            var options = {'title':'How many issues each priority',
                'width':400,
                'height':300};

            // Instantiate and draw our chart, passing in some options.
            var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
            chart.draw(data, options);
        }
        /*-------------------------*/

    });

    $('.link').click(function (e) {
        // $('.link').next().slideToggle();
        // $(this).next().slideToogle();
        // console.log($(this).next());
        $(this).next().slideToggle();
    })

    // jQuery('#accordion').accordion();
});

var count = function (obj, prop) {         //calculate the number of particular property for each value {Args[obj --> Object; prop --> property of obj]}

    var find = function (st, ary) {        // find if string already in array array like [['example',1]['example2',1]]
        for (var j = 0; j<ary.length;j++){
            if (ary[j].indexOf(st) !== -1){
                return j;
            }
        }
        return -1;
    };
    var result=[];
    debugger;
    for(var i = 0; i< obj.length; i+=1){
        // console.log(i);
        var n = find(obj[i].fields[prop].name,result);
        if(n !== -1){
            result[n][1]+=1;
        }
        else {
            result.push([obj[i].fields[prop].name,1]);
        }
        // console.log(result)
    }
    // console.log(result);
    return result;
};




