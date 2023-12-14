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
        <div style={{ margin: "5%", padding: "40px", alignItems: "center" }}>
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
            <h2
              style={{ paddingTop: "5px" }}
            >{`You have booked ${ticketQuantity} ${ticketType.toLowerCase()} tickets.!`}</h2>
            <h3 style={{ paddingTop: "5px" }}>{`total price: ${price}`}</h3>
            <h4 style={{ paddingTop: "5px" }}>Time: 09:00pm MAX</h4>
            <CheckCircleIcon style={{marginLeft:"40%", color: "blue",height:"20%",width:"25%", paddingTop: "5px" }} />
          </div>
        </div>
      </Dialog>
    </Card>
  );
}

export default PopupProceed;
