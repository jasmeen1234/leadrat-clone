// Seat.js
import React from "react";
import WeekendIcon from "@mui/icons-material/Weekend";

const Seat = ({ seat, onClick }) => (
  <WeekendIcon
    onClick={onClick}
    className={`${
      seat.isBooked
        ? "booked"
        : seat.isSelected
        ? "selected"
        : seat.type === "Premium"
        ? "premiumcolor"
        : "available hover seat"
    }`}
    style={{ width: "3.5%", height: "40px", color: "black" }}
  />
);

export default Seat;
