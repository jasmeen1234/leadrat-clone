import React from 'react'
import './App.css'
function Header() {
  return (
    
      <div className='header' style={{display:"flex",textAlign:"center"}}>
      <img src="bookseat.png" style={{width:"40px",height:"40px"}} />
      <h2>Its Time To Movie</h2>
      <p style={{fontsize:"18px"}}> Movie Name: ANIMAL</p>
      <button style={{color:"coral"}}>Time: 09:00PM MAX</button>
     </div> 
    
  )
}

export default Header
