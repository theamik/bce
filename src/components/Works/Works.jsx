import React, { useContext } from "react";
import "./Works.css";
import Buffet from "../../img/Buffet.png";
import Dakshin from "../../img/Dakshin.png";
import Hiltown from "../../img/Hiltown.png";
import Khusbu from "../../img/Khusbu.png";
import Eye from "../../img/Eye.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import {Link} from 'react-scroll'
const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>
            Works for All these
          </span>
          <span>Brands & Clients</span>
          <spane>
             We proudly serve Hiltown Hotel with IT products,
            <br />
            installed CCTV at Khusbu Restaurant, and provide
            <br/>
            regular IT support to Dhakshin Surma College
            <br/>
            and Inclusive Eye Hospital Sylhet, including CCTV
            <br/>
            and networking. At Grand Buffet, we installed a
            <br />
            sound system and supplied IT equipment, ensuring
            <br />
            smooth operations. 
          </spane>
          <Link to="contact" smooth={true} spy={true}>
            <button className="button s-button">Visit our office</button>
          </Link>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        {/* right side */}
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={Hiltown} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Dakshin} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Khusbu} alt="" />
          </div>{" "}
          <div className="w-secCircle">
            <img src={Eye} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Buffet} alt="" />
          </div>
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
