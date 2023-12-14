import React from 'react'
import { Dialog, Card } from '@mui/material'

import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
function PopupDialog({open,setOpen}) {
  return (
    <Card>

    <Dialog  style={{width:"90%",height:"90%"}}open={open} onClose={()=>{setOpen(false)}}>
      <h1 style={{height:"60%",width:"60%" ,textAlign:"center"}}>please select Ticket quantity</h1>
      <CancelIcon style={{color:"red", height:"25%",width:"25%"}}/>
    </Dialog>
    
       
          </Card> 
        
       
    )
   
}

export default PopupDialog
