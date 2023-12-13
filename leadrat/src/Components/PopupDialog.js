import React from 'react'
import { Dialog } from '@mui/material'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
function PopupDialog({open,setOpen,onClose,ticketQuantity,ticketType}) {
  return (
    <>
    <Dialog  style={{width:"90%",height:"90%"}}open={open} onClose={()=>{setOpen(false)}}>
      please select  Ticket quantity
      <CancelIcon style={{color:"red"}}/>
    </Dialog>
    {/* <Dialog ticketQuantity={ticketQuantity}>
    {"Please select ticket of type" + ticketQuantity}
    </Dialog>
    <Dialog ticketQuantity={ticketQuantity}>
    {<Dialog ticketQuantity={ticketQuantity} onClose={setOpen(false)}>
    {`you have booked ${ticketQuantity} ${ticketQuantity} tikets.. !`}
    </Dialog>}
    </Dialog> */}
        open && (
      <div className="modal-backdrop">
        <div className="modal-card">
          <span className="close" onClick={onClose}>
            &times;
          </span>
          <h3>Details: </h3>
          <br></br>
          <p>
            <em>Number of seats booked: {ticketQuantity}</em>
          </p>
          <p> 
            <em>Ticket Type: {ticketType}</em>
          </p>
            <div>
                <CheckCircleIcon style={{position:'relative',left:'45%'}}/>
         
          </div> 
        
        </div>
      </div>
    )
    </>
  )
}

export default PopupDialog
