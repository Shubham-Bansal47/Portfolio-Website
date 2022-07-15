import React from "react";
import './headings.css';

function Headings(props){
    return(
        <div className="heading">
            <div className="heading-text">
                <p>{props.sendingtitle}</p>
            </div>
            <div className="heading-knowme">
                <p>{props.sendingintro}</p>
            </div>
            <div className="heading-image">
                <img src="./assets/underliner3.png" alt="_blank" />
            </div>
        </div>
    )
}

export default Headings;