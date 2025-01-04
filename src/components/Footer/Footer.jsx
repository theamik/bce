import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import LinkedIn from "@iconscout/react-unicons/icons/uil-linkedin";
import logo from "../../img/logo.png";
const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>
          <img src={logo} style={{width:"5%"}}/>
          <h2>Bhuiyan Computer & Electronics (BCE)</h2>
          <br/>
          Shop #87, Level #5, Korimullah Market, Bondor Bazar, Sylhet
          <br/>
          Phone: 01719-948515
          <br/>
          Email: bhuiyancomputer133@gmail.com
        </span>

        <div className="f-icons">
          <Insta color="white" size={"3rem"} />
          <Facebook color="white" size={"3rem"} />
          <LinkedIn color="white" size={"3rem"} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
