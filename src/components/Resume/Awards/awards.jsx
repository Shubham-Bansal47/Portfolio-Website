import React,{ useEffect, useState } from 'react';
import Aos from "aos";
import "aos/dist/aos.css";
import "./awards.css";

function Awards(){
    
    useEffect(() => {
        Aos.init({ duration: 2000});
      },[]);

    return(
        <></>
    )
};

export default Awards;