import React from 'react'

function Header() {
  return (
  <>
   <header id="header">
    <div class="container">

      <h1><a href="index.html">Sufyan Ahmed</a></h1>
      {/* <!-- Uncomment below if you prefer to use an image logo -->
      <!-- <a href="index.html" class="mr-auto"><img src="assets/img/logo.png" alt="" class="img-fluid"></a> --> */}
      <h2>I'm a passionate <span>Full Stack Web Developer</span> from Pakistan</h2>

      <nav id="navbar" class="navbar">
        <ul>
          <li><a class="nav-link active" href="#header">Home</a></li>
          <li><a class="nav-link" href="#about">About</a></li>
          <li><a class="nav-link" href="#resume">Resume</a></li>
          {/* <!-- <li><a class="nav-link" href="#services">Services</a></li>
          <li><a class="nav-link" href="#portfolio">Portfolio</a></li> --> */}
          <li><a class="nav-link" href="#contact">Contact</a></li>
        </ul>
        <i class="bi bi-list mobile-nav-toggle"></i>
      </nav>
      {/* <!-- .navbar --> */}

      <div class="social-links">
        <a href="https://twitter.com/sufyab_web_work" target="_blank" class="twitter"><i class="bi bi-twitter"></i></a>
        <a href="https://www.facebook.com/sufyanahmad.khan.75" target="_blank" class="facebook"><i
            class="bi bi-facebook"></i></a>
        <a href="https://www.instagram.com/sufyan____ahmed/" target="_blank" class="instagram"><i
            class="bi bi-instagram"></i></a>
        <a href="https://www.linkedin.com/in/sufyan-ahmed/" target="_blank" class="linkedin"><i
            class="bi bi-linkedin"></i></a>
      </div>

    </div>
  </header>
  </>
  )
}

export default Header