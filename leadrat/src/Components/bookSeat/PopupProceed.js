import React from 'react'
import { Dialog,Card } from '@mui/material'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
function PopupProceed({isopen,isSetOpen,ticketQuantity,ticketType, price}) {
  return (
    <Card>
    <Dialog  style={{width:"60%",height:"90%"}} open={isopen} onClose={()=>{isSetOpen(false)}}>
        <img src="bookshow.jpeg"  style={{ height:"60%",width:"60%", display:"flex",marginLeft:"80px"}}alt="bookmyshow"/>
      <h1>{`you have booked ${ticketQuantity} ${ticketType} tikets.!` }</h1>
      <h2>{`total price: ${price}`}</h2>
      <h3>Time: 09:00pm MAX</h3>
      <CheckCircleIcon style={{color:"blue"}}/>
    </Dialog>
    
       
          </Card> 
        
       
    )
   
}

export default PopupProceed
