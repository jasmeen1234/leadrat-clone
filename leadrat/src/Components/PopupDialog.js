import React from "react";
import { Dialog, Card } from "@mui/material";

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
      <div style={{ padding: "35px", alignItems: "center", width: "300px", height: "250px" }}>
        <div style={{ marginLeft: "50%", marginTop: "12%",marginLeft:"40%" ,marginBottom:"8%"}}>
          <CancelIcon style={{ color: "red", height: "25%", width: "35%" }} />
        </div>
        <div>
          <h4 style={{fontFamily:"'Lato', sans-serif"}}>Please Select Ticket Quantity</h4>
        </div>
      </div>
    </Dialog>
  </Card>
  );
}

export default PopupDialog;
