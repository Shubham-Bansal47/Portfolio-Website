import React,{ useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";
import "./positions.css";

function Positions(){
    
    useEffect(() => {
        Aos.init({ duration: 2000});
      },[]);
    
    return(
        <div data-aos="fade-in" className="positions">
            <div className="pos-blocks">
                <div className="pos-left">
                    <h4 className="h4class">&#9830; Data Structures and Algorithms TA</h4>
                    <span className="color1">
                        * Shortlisted as a Teaching Assistant in DSA Lab of LNMIIT, Jaipur
                    </span>
                </div>
                <div className="pos-right">
                    <span>13th March 2023</span>
                </div>
            </div>
            <hr className="hrclass"/>
            <div className="pos-blocks">
                <div className="pos-left">
                    <h4 className="h4class">&#9830; Google Developer Student Club</h4>
                    <span className="color1">
                        * Core team member of creative and management team
                    </span>
                </div>
                <div className="pos-right">
                    <span>1st January 2022</span>
                </div>
            </div>
            <hr className="hrclass"/>
            <div className="pos-blocks">
                <div className="pos-left">
                    <h4 className="h4class">&#9830; Club Coordinator of Sankalp</h4>
                    <span className="color1">
                        * Club coordinator of social club of LNMIIT, Jaipur
                    </span>
                </div>
                <div className="pos-right">
                    <span>13th October 2021</span>
                </div>
            </div>
            <hr className="hrclass"/>
            <div className="pos-blocks">
                <div className="pos-left">
                    <h4 className="h4class">&#9830; Senator (Presidential Council)</h4>
                    <span className="color1">
                        * Elected as an acting Senator for year 2022-2023
                    </span>
                </div>
                <div className="pos-right">
                    <span>7th May 2022</span>
                </div>
            </div>
            <hr className="hrclass"/>
            <div className="pos-blocks">
                <div className="pos-left">
                    <h4 className="h4class">&#9830; Badminton Club</h4>
                    <span className="color1">
                        * Coordinating lead of badminton club of LNMIIT, Jaipur
                    </span>
                </div>
                <div className="pos-right">
                    <span>16th April 2022</span>
                </div>
            </div>
        </div>
    )
};

export default Positions;