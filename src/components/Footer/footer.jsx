import react from 'react';
import './footer.css';
import Handles from '../Handles/handles';

function Footer(){
    return(
        <div className="footer">
            <div className="footer-in">
                <div className="top-text">
                    <p>Hope You Liked It</p>
                </div>
                <div className="mid-text">
                    <Handles/>
                </div>
                <div className="bottom-text">
                    <p>&#169; <span>SHUBHAM's</span> Website, All Rights Reserved.</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;