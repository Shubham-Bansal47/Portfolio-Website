import React,{useEffect} from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import './headings.css';

function Headings(props){

    useEffect(() => {
        Aos.init({ duration: 1000});
      },[]);

    return(
        <div data-aos="fade-up" className="heading">
            <div className="heading-text">
                <p>{props.sendingtitle}</p>
            </div>
            <div className="heading-knowme">
                <p>{props.sendingintro}</p>
            </div>
            <div className="heading-image">
                <img src="./assets/headingdesign.png" alt="_blank" />
            </div>
        </div>
    )
}

export default Headings;