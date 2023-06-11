import Link from 'next/link'
import React from 'react'

function Header() {
   return (

      <div className="header_section header_main">
         <div className="container-fluid">
            <div className="row">
               <div className="col-sm-6">
                  <div className="logo"><a href="index.html"><img src="/assets/images/nat-logo.png" /></a></div>
               </div>
               <div className="col-sm-6">
                  <div className="menu_text">
                     <ul>
                        <li><a href="#"><img src="/assets/images/user-icon.png" /></a></li>
                        <li><a href="#"><img src="/assets/images/search-icon.png" /></a></li>
                        <div id="myNav" className="overlay">
                           <a href="javascript:void(0)" className="closebtn" onclick="closeNav()">&times;</a>
                           <div className="overlay-content">
                              <a href="index.html">Home</a>
                              <a href="about.html">About</a>
                              <a href="ship.html">Ship</a>
                              <a href="testimonial.html">Testimonial</a>
                              <a href="contact.html">Contact Us</a>
                           </div>
                        </div>
                        <span onclick="openNav()"><img src="/assets/images/toggle-icon.png" className="toggle_menu" /></span>
                     </ul>
                  </div>
               </div>
            </div>
         </div>
      </div>

   )
}



export default Header;