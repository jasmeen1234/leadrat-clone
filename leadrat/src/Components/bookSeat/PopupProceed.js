import React from 'react'
import { Dialog } from '@mui/material'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
function PopupProceed({isopen,isSetOpen,ticketQuantity,ticketType}) {
  return (
    <div>
    <Dialog  style={{width:"90%",height:"90%"}} open={isopen} onClose={()=>{isSetOpen(false)}}>
      <h1>{`you have booked ${ticketQuantity} ${ticketType} tikets.. !`}</h1>
      <CheckCircleIcon style={{color:"blue"}}/>
    </Dialog>
    
       
          </div> 
        
       
    )
   
}

export default PopupProceed
