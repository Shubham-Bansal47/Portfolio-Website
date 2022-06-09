import react from 'react';
import './footer.css';
import Handles from '../Handles/handles';

function Footer(){
    return(
        <div className="footer">
            <div className="footer-in">
                <div className="top-text">
                    <p>BADBOY-47</p>
                </div>
                <div className="mid-text">
                    <Handles/>
                </div>
                <div className="bottom-text">
                    <p>&#169; <span>BADBOY-47's</span> Website, All Rights Reserved.</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;