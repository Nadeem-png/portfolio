import React from "react";
import "./Intro.css";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import glassesimoji from "../../img/glassesimoji.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import FloatinDiv from "../FloatingDiv/FloatingDiv";


const Intro = () => {


  return (
    <div className="Intro" id="Intro">
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
          {/* yahan change hy darkmode ka */}
          <span >Hy! I Am</span>
          <span>Nadeem khan</span>
          <span>
            Full stack MERN Developer with high level of experience in web designing
            and development, producting the Quality work
          </span>
        </div>
        
          <button className="button i-button">Hire me</button>
           {/* social icons */}
        <div className="i-icons">
          <img src={Github} alt="" />
          <img src={LinkedIn} alt="" />
          <img src={Instagram} alt="" />
        </div>
       </div>
        {/* right image side */}
        <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={boy} alt="" />
        <img src={glassesimoji} alt="" />
      <div style={{ top: "-4%", left: "60%" }}>
      <FloatinDiv img={crown} text1="Web" text2="Developer" />
      </div>
      <div style={{ left: "0rem", top: "18rem" }}> 
      <FloatinDiv img={thumbup} text1="Best Design" text2="Award" />
      </div>
      </div>
      
    </div>
  );
};

export default Intro;