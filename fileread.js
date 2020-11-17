
import React, {useState} from "react";

// import { useEffect } from "react";
// import { useLocation } from "react-router-dom";

import NavBar from "./components/NavBar";
import InsertCourse from "./components/InsertCourseForm.js";


export default function FileRead(props) {
    return(
        <body>
    	<div id="myData"></div>
        <script>
        fetch('people.json')
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                appendData(data);
            })
            .catch(function (err) {
                console.log('error: ' + err);
            });
        function appendData(data) {
            var mainContainer = document.getElementById("myData");
            for (var i = 0; i < data.length; i++) {
                var div = document.createElement("div");
                div.innerHTML = 'Name: ' + data[i].firstName + ' ' + data[i].lastName;
                mainContainer.appendChild(div);
            }
        }
    </script>
</body>
    )
}
