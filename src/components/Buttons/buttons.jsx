import React from "react";
import "./buttons.css";
import {Link} from 'react-scroll';

function Buttons(){
  return(
    <div className="button">
            <button>
                <p><Link to="contactlink" spy={true} smooth={true} offset={-180} duration={300}>Hire Me</Link></p>
            </button>
            <button>
                <p><a href="Shubham_Resume_overleaf.pdf" download="Shubham_Resume.pdf">Get My Resume</a></p>
            </button>
        </div>
  );
}

export default Buttons;