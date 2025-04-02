import React from 'react'
import { FaLinkedin } from 'react-icons/fa';
import { MdOutlineMailOutline } from "react-icons/md";

const Contact = () => {
    return (
        <div id='contact'>
            <div className="head-content">
                <div className="head-content" style={{ marginTop: "-20px", width :"90vw" }}>
                    <p style={{ color: "gray", fontWeight: "600", fontSize: "20px" }}>Get in touch</p>
                    <h1 style={{ fontSize: "55px" }}>Contact Me</h1>
                </div>
            </div>
            <div className="contact-links">
               <div className="email">
               <MdOutlineMailOutline />
               <p>vipdaanav@gmail.com</p>
               </div>
               <div className="linkedin">
                
               <FaLinkedin />
                <p>Linkedin</p>
               </div>
            </div>
            <div class="container">
  <footer class="py-3 my-4" id='footer'>
    <ul class="nav justify-content-center border-bottom pb-3 mb-3">
      <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">About</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">Experience</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">Project</a></li>
      <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">Contact</a></li>
    </ul>
    <p class="text-center text-body-secondary"> Copyright© 2024 Mohit , All right reserved</p>
  </footer>
</div>
        </div>
    )
}

export default Contact