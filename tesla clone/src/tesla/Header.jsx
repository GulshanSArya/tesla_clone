import React from 'react'
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';

function Header() {
const [headerOpen, setheaderOpen] = useState(false)

  function openSidebar(e){
    e.preventDefault();
    setheaderOpen(true)
  }
  function closeSidebar(){
    setheaderOpen(false)
  }
  return (
    <header>
      <div id="logo">
        <img src="images/logo.svg" alt="Logo" />
      </div>
      <div id="middle">
        <ul>
          <li><a href="">Model S</a></li>
          <li><a href="">Model 3</a></li>
          <li><a href="">Model X</a></li>
          <li><a href="">Model Y</a></li>
          <li><a href="">Solar Roof</a></li>
          <li><a href="">Solar Panels</a></li>
        </ul>
      </div>
      <div id="right">
        <ul>
          <li><a href="">Shop</a></li>
          <li><a href="">Account</a></li>
          <li onClick={openSidebar}><a href="">Menu</a></li>
        </ul>
      </div>

      <ul className="sidebar" style={{right: (headerOpen) ? 0 : '-300px'}}>
        <CloseIcon className='cross' onClick = {closeSidebar} />
        <li><a href="">Model S</a></li>
        <li><a href="">Model 3</a></li>
        <li><a href="">Model X</a></li>
        <li><a href="">Model Y</a></li>
        <li><a href="">Solar Roof</a></li>
        <li><a href="">Solar Panel</a></li>
        <li><a href="">Existing Inventory</a></li>
        <li><a href="">Used Inventory</a></li>
        <li><a href="">Trade In</a></li>
        <li><a href="">Test Drive</a></li>
        <li><a href="">Powerwall</a></li>
        <li><a href="">Commercial Energy</a></li>
      </ul>

    </header>
  )
}

export default Header