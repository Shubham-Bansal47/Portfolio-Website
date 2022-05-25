import React from "react";
import './resumehead.css';

function Resumehead(){
    return(
        <div className="resumehead">
            <div className="resumehead-text">
                <p>RESUME</p>
            </div>
            <div className="resumehead-knowme">
                <p>Have a look at My Resume</p>
            </div>
            <div className="resumehead-image">
                <img src="./assets/underliner3.png" alt="_blank" />
            </div>
        </div>
    )
}

export default Resumehead;