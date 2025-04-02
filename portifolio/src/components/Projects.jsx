import React from 'react'
import fileManager from "../assets/file-logo.png"
import snap from "../assets/snap-icon.png"
import telegram from "../assets/telegram-icons.png"


const Project = () => {
  return <div class="row row-cols-1 row-cols-md-3 g-4 text-center" id='project'>
   <div className="head-content" style={{ width :"100vw", marginTop :"-20px"}}>
   <p style={{color :"gray" , fontWeight :"600", fontSize :"20px"}}>Browse my recent</p>
   <h1 style={{fontSize :"55px"}}>Projects</h1>
   </div>
  <div class="col" style={{width :"350px", marginTop :"-120px"}}>
    <div class="card h-100" style={ { borderRadius :"30px", border :"3px solid grey"}} >
      <img src={snap} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h3 class="card-title">Snapchat Clone</h3>
       
      </div>
      <div className="pj-btn">
      <button type="button" class="btn btn-light " style={{border: "1px solid black"}}>Git hub</button>
      <button type="button" class="btn btn-dark ">Live demo</button>
      </div>
    </div>
  </div>
  <div class="col"  style={{width :"350px",  marginTop :"-120px"}}>
    <div class="card h-100" style={ { borderRadius :"30px", border :"3px solid grey"}}>
      <img src= {telegram} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h3 class="card-title">Telegram Clone</h3>
        
      </div>
      <div className="pj-btn">
      <button type="button" class="btn btn-light " style={{border: "1px solid black"}}>Git hub</button>
      <button type="button" class="btn btn-dark ">Live demo</button>
      </div>
    </div>
  </div>
  <div class="col" style={{width :"350px", marginTop :"-120px"}}>
    <div class="card h-100" style={ { borderRadius :"30px", border :"3px solid grey"}}>
      <img src={fileManager} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h3 class="card-title">Mini Projects</h3>
      </div>
      <div className="pj-btn">
      <button type="button" class="btn btn-light " style={{border: "1px solid black"}}>Git hub</button>
      </div>
    </div>
  </div>
</div>  
}

export default Project