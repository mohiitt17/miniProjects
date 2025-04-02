import React from 'react'
import profilerImg from "../assets/Snapchat-6.png"
import { PiMedalFill } from "react-icons/pi";
import { FaUserFriends } from "react-icons/fa";

const AboutMe = () => {
    return (
        <div className="container" id='aboutme'>
            <div className="head-content" style={{width :"100%", lineHeight :"0px"}}>
            <p style={{color :"gray" , fontWeight :"600", fontSize :"20px"}}> Get to know more</p>
            <h1 style={{fontSize :"50px"}}>About me</h1>
            </div>
            <img src= {profilerImg} alt="" style={{height :"82%", float :"left", width :"350px", marginLeft :"0px", borderRadius :"20px"}} />
        <div className="experience container" style={{width :"350px", marginLeft :"80px"}}> 
            <PiMedalFill style={{height :"40px", width :"40px"}} /> 
            <p style={{fontSize :"26px", fontWeight :"500"}}>Experience</p>
            <p style={{fontSize :"20px"}}>1+ Years</p>
            <p style={{fontSize :"20px"}}>Frontend Devlopment</p>
        </div>
        <div className="education container" style={{width :"350px", marginLeft :"90px"}}>
        <FaUserFriends style={{height :"40px", width :"40px"}} />
        < p style={{fontSize :"26px", fontWeight :"500"}}>Education</p>
        <p style={{fontSize :"20px"}}>10 + 2 completed</p>
        <p style={{fontSize :"20px"}}>BCA 1st year</p>
        </div>
        <p  className = "container-fluid"style={{width :"65%", height :"100px", fontSize :"20px",  textAlign : "justify", position :"relative", left :"250px", top :"-250px"}}>
        I’m a passionate Front-End Developer with expertise in HTML, CSS, JavaScript, and React. I love turning ideas into visually appealing and functional websites. My focus is on writing clean, efficient code and creating smooth user experiences. Currently, I’m enhancing my skills in Next.js and exploring advanced web development techniques. I believe in continuous learning and enjoy building projects that push my creativity and technical abilities.

        </p>
        </div>
    )
}

export default AboutMe