import React from "react";
import { Dialog, Card } from "@mui/material";

import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
function PopupDialog({ open, setOpen }) {
  return (
    <Card>
      <Dialog
        
        open={open}
        onClose={() => {
          setOpen(false);
        }}
      >
       <div style={{ padding:"40px",alignItems:"center" }} >
     <div>
     <h1 style={{  }}>
          Please Select Ticket Quantity
        </h1>
     </div>
       <div style={{marginLeft:"50%",marginTop:"5%"}}>
       <CancelIcon style={{ color: "red",height:"20%",width:"25%" }} />
       </div>
       </div>
      </Dialog>
    </Card>
  );
}

export default PopupDialog;
