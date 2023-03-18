import React from 'react'
import "./Search.css"

const Search = () => {
  return (
    <div className='container'>
         <div class="search-box">
       <input type="text" placeholder="Mobile No" />
     </div>
     <div class="search-box">
    <input type="text" placeholder="enter Your Name" />

     </div>
     <div class="search-box">
    <input type="text" placeholder="locality" />

    </div>
    <div class="search-box">
    <input type="text" placeholder="Gst No" />
    
    </div>
 </div>
  )
}

export default Search
