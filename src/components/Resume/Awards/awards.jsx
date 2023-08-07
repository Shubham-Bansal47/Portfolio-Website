import React,{ useEffect, useState } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";
import "./awards.css";

function Awards(){
    
    useEffect(() => {
        Aos.init({ duration: 2000});
      },[]);

    return(
        <div data-aos="fade-in" className="awards">
            <div className="award-blocks">
                <div className="award-left">
                    <h4 className="h4class">&#9830; 7th position in Techathon 2.0</h4>
                    <span className="color1">
                        * Secured 7th position in techathon held at JECRC university jaipur, 
                        We made an emergency message sending (SOS) website.
                    </span>
                </div>
            </div>
            <hr className="hrclass"/>
            <div className="award-blocks">
                <div className="award-left">
                    <h4 className="h4class">&#9830; StartUp-Show</h4>
                    <span className="color1">
                        * Secured 1st position in yellow pages event 
                        (Best start-up idea pitching wins the show) of Entrepreneurship Cell of my college.
                    </span>
                </div>
            </div>
            <hr className="hrclass"/>
            <div className="award-blocks">
                <div className="award-left">
                    <h4 className="h4class">&#9830; Codechef Snackdown 2021</h4>
                    <span className="color1">
                        * I was in the top 200 students 
                        qualifying codechef smackdown contest 2021.
                    </span>
                </div>
            </div>
            <hr className="hrclass"/>
            <div className="award-blocks">
                <div className="award-left">
                    <h4 className="h4class">&#9830; Tournaments</h4>
                    <span className="color1">
                        * Runner Up in the District level badminton tournament.
                    </span>
                </div>
            </div>
        </div>
    )
};

export default Awards;