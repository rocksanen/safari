import React from "react";
import elephants from "../images/footer/";
import sivukallio from "../images/footer/";
const FooterImage = () => {
return (
    <footer className="footer-images">
        <img src={sivukallio} alt="kallio" />
        <img src={elephants} alt="elephant"/>
    </footer>
)}
export default FooterImage;