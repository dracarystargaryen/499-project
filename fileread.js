
import React, {useState} from "react";

// import { useEffect } from "react";
// import { useLocation } from "react-router-dom";

import NavBar from "./components/NavBar";
import InsertCourse from "./components/InsertCourseForm.js";


export default function FileRead(props) {
    return(
        <div class="fileRead">
            <div class = "input-group-prepend">
                <span class = "input-group=text" id="inputGroupFileAddon01">Upload</span>
            </div>
            <div class = "custom-file">
                <input type = "file" class = "custom-file-input" id="inputGroupFile01"
                aria-describedby="inputGroupFileAddon01">
                    <label class="custom-file-label" for="inputGroupFile01">Choose File</label>
                </input>
            </div>
        </div>

    )
}