import React from 'react'
import profilerImg from "../assets/pic16.jpg"
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const LandPage = () => {
  return (
    <div className="container" id='landPage' style={{height : "calc(100vh - 120px)"}}>
      <img src= {profilerImg} className='img-fluid' alt="profile-pic" />
      <div className="container" id='text-content'>
        <p style={{fontSize :"24px", color : "gray", fontWeight :"0", position :"relative", top :"20px"}}>hello, i am </p>
        <h2 style={{fontSize :"89px", color :"black"}}>MOHIT</h2>
        <p style={{fontSize :"40px", color :" rgb(45, 45, 45", fontWeight :"600"}}>Frontend Devloper</p>
        <button type="button" class="btn btn-light " style={{border: "1px solid black"}}>Download CV</button>
        <button type="button" class="btn btn-dark ">Contact info</button>
        <div className="icons">
        <FaGithub style={{height :"45px", width : "45px"}} />
          <FaLinkedin style={{height : "45px", width : "45px", marginLeft :"0px"}} />
          </div>
      </div>
    </div>
  )
}

export default LandPage