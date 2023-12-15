import React from "react";
import { Dialog, Card } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

function PopupProceed({
  isopen,
  isSetOpen,
  ticketQuantity,
  ticketType,
  price,
}) {
  return (
    <Card>
      <Dialog
        open={isopen}
        onClose={() => {
          isSetOpen(false);
        }}
      >
        <div style={{ margin: "3%", padding: "20px", alignItems: "center" }}>
          <img
            src="bookshow.jpeg"
            style={{
              height: "40%",
              width: "50%",
              display: "flex",
              marginLeft: "25%",
            }}
            alt="bookmyshow"
          />
          <div style={{alignItems: "center"}}>
            <h3
              style={{ paddingTop: "8px" }}
            >{`You have booked ${ticketQuantity} ${ticketType.toLowerCase()} tickets.!`}</h3>
            <h4 style={{ paddingTop: "5px" }}>{`Total Price: ${price}`}</h4>
            <h5 style={{ paddingTop: "5px" }}>Time: 09:00pm MAX</h5>
            <CheckCircleIcon style={{marginLeft:"40%", color: "blue",height:"20%",width:"20%", paddingTop: "5px" }} />
          </div>
        </div>
      </Dialog>
    </Card>
  );
}

export default PopupProceed;
