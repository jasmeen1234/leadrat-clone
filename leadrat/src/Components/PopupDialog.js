import React from 'react'
import { Dialog } from '@mui/material'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
function PopupDialog({open,setOpen}) {
  return (
    <div>
    <Dialog  style={{width:"90%",height:"90%"}}open={open} onClose={()=>{setOpen(false)}}>
      <h1>please select  Ticket quantity</h1>
      <CancelIcon style={{color:"red"}}/>
    </Dialog>
    
       
          </div> 
        
       
    )
   
}

export default PopupDialog
