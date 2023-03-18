import React from 'react'
import "./Header.css"
import { FiMenu } from 'react-icons/fi';


const Header = () => {
  return (


    <>

     <nav className='main-nav '>
            <div className="mane-text">
                  <div className='togle-icon'>
                    <FiMenu/>
                  </div>
                <h1>S<span>ho</span>pywell</h1>
                <p>pos</p>
            </div>

            <div className="menu-btn">
                 <button className='header-btn'>New Order</button>
                 <input type="text" placeholder='Bill No' />
            </div>
     </nav>
    
    </>
  )
}

export default Header
