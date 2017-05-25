// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

// const ipc = require('electron').ipcRenderer;
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
        if (response.statusCode == 200) {
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
            });
        }
        else {
            // throw "Login failed :";
            console.log("Failed to log on");
        }
    });

});

