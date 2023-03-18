import React from 'react'
import "./Menus.css"
import {AiOutlineSearch} from "react-icons/ai"
const Menus = () => {
  return (
    <div className='menus-section'>
      <div className="search-area">
        <input type="search" placeholder='Search' />
      </div>
      <div className="menus-area">
        <div className="menu-category">
          <button className='btn-red'>Starter</button>
          <button className='btn-red'>Main Course</button>
          <button className='btn-red'>Hot Beverages</button>
          <button className='btn-red'>Cold Beverages</button>
          <button className='btn-red'>Beer</button>
          <button className='btn-red'>Dessert</button>
          <button className='list-btn'>More</button>

    
        </div>
        <div className="menu-items">
            <div className="hero-btns">
                 <button>All</button>
                 <button>Veg</button>
                 <button>Non-veg</button>
            </div>
            <div className="starter">
                 <h2>Starter</h2>
            </div>

            <div className="starter-items">
               <button className='starter-btn'>Beef Belton tant
                 <br />
                 <span>₹200</span></button>

                 <button className='starter-btn'>Beef Belton tant
                 <br />
                 <span>₹200</span></button>

                 <button className='starter-btn'>Beef Belton tant
                 <br />
                 <span>₹200</span></button>

             

                 <button className='starter-btn'>Beef Belton tant
                 <br />
                 <span>₹200</span></button>

                 <button className='starter-btn'>Beef Belton tant
                 <br />
                 <span>₹200</span></button>

                 <button className='starter-btn'>Beef Belton tant
                 <br />
                 <span>₹200</span></button>

             

                 <button className='starter-btn'>Beef Belton tant
                 <br />
                 <span>₹200</span></button>

                 <button className='starter-btn'>Beef Belton tant
                 <br />
                 <span>₹200</span></button>

                 <button className='starter-btn'>Beef Belton tant
                 <br />
                 <span>₹200</span></button>
           
                 <button className='starter-btn'>Beef Belton tant
                 <br />
                 <span>₹200</span></button>

                 <button className='starter-btn'>Beef Belton tant
                 <br />
                 <span>₹200</span></button>

         
                  
            </div>
        </div>
      </div>

    
       
    </div>
  )
}

export default Menus