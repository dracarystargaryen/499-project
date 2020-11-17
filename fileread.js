
import React, {useState} from "react";

// import { useEffect } from "react";
// import { useLocation } from "react-router-dom";

import NavBar from "./components/NavBar";
import InsertCourse from "./components/InsertCourseForm.js";


export default function FileRead(props) {
    return(
        <input type="file" id="file-input" />
        <button id="read-button">Read File</button>
    <pre id="file-contents"></pre>

<script>
	document.querySelector("#read-button").addEventListener('click', function() {
		let file = document.querySelector("#file-input").files[0];
		let reader = new FileReader();
		reader.addEventListener('load', function(e) {
	    		let text = e.target.result;
	    		document.querySelector("#file-contents").textContent = text;
		});
		reader.readAsText(file);
	});
</script>

    )
}
