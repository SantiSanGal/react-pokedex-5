import React from 'react'
import './styles/Header.css'

const Header = () => {
  return (
    <header className='header'>
      <div className='header-red'>
        <div className="header-img">
          <img src="../../../public/image 12.png" alt="" />
        </div>
      </div>
      <div className='header-black'></div>
      <div className="header-circle">
        <div className='header-circle-intern'></div>
      </div>
    </header>
  )
}

export default Header