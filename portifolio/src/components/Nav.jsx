import React from 'react'
import "../App.css"
import Experience from './Experience'
export const NavBar = () => {
return <nav class="navbar navbar-expand-lg"  >
<div class="container" id ='nav'>
  <a class="navbar-brand" href="#" id='nav-logo'>Mohit</a>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse d-flex justify-content-center align-items-center" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <a class="nav-link" aria-current="page" href="#">About</a> 
      <a class="nav-link" href={<Experience />}>Experience</a>
      <a class="nav-link" href="#">Project</a>
      <a class="nav-link " >Contact </a>
    </div>
  </div>
</div>
</nav>
}

export default NavBar