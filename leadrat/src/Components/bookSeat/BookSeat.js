import React, { useState } from "react";
import PopupDialog from "../PopupDialog";
import PopupProceed from "./PopupProceed";
import "./bookseat.css";
import Seat from "./Seat";


function BookSeat({ ticketQuantity, ticketType }) {
  const layout = [
    [
      0, 0, 0, 0, 0, 1, 2, 0, 3, 4, 0, 5, 6, 0, 7, 8, 0, 9, 10, 0, 11, 12, 0,
      13, 14,
    ],
    
    [
      0, 0, 0, 0, 0, 15, 16, 0, 17, 18, 0, 19, 20, 0, 21, 22, 0, 23, 24, 0, 25,
      26, 0, 27, 28,
    ],
    [
      0, 0, 0, 0, 0, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 0, 0, 0, 39, 40,
      41, 42, 43, 44, 45,
    ],
    [
      0, 0, 0, 0, 0, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 0, 0, 0, 56, 57,
      58, 59, 60, 61, 62,
    ],
    [
      0, 0, 0, 0, 0, 63, 64, 65, 67, 68, 69, 70, 71, 72, 73, 0, 0, 0, 74, 75,
      76, 77, 78, 79, 80,
    ],
    [
      0, 0, 0, 0, 0, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 0, 0, 0, 91, 92,
      93, 94, 95, 96, 97,
    ],
    [
      0, 0, 0, 0, 0, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 0, 0, 0,
      108, 109, 110, 111, 112, 113, 114,
    ],
    [
      115, 116, 117, 0, 0, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 0,
      0, 0, 128, 129, 130, 132, 132, 133, 134,
    ],
    [
      135, 136, 137, 0, 0, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 0,
      0, 0, 148, 149, 150, 151, 152, 153, 154,
    ],
    [
      0, 0, 0, 0, 0, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 0, 0, 0,
      165, 166, 167, 168, 169, 170, 171,
    ],
    [
      0, 0, 0, 0, 0, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 0, 0, 0,
      182, 183, 184, 185, 186, 187, 188,
    ],
    [
      0, 0, 0, 0, 0, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 0, 0, 0,
      199, 200, 201, 202, 203, 204, 205,
    ],
  ];
  const [seats, setSeats] = useState(
    layout.map((item, index) =>
      item.map((data) => ({
        id: data,
        isZero: data,
        isSelected: false,
        isBooked: false,
        type: index > 1 ? "Standard" : "Premium",
      }))
    )
  );
  const [open, setOpen] = useState(false);
  const [isopen, isSetOpen] = useState(false);
  const[price, setPrice]=useState(0);
  let standardPrice=300;
  let premiumPrice=250;
  const [selectedSeats, setSelectedSeats] = useState(
    seats.flat().filter((item) => item.isSelected).length
  );
  function setSelection(arr) {
    // Iterate through the nested array and set isSelected to false for all objects
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr[i].length; j++) {
        arr[i][j].isSelected = false;
      }
    }
    return arr;
  }
  const bookHandler = (seatId, seat) => {
    console.log("first select quantity and type");
    let selectPrev = setSelection(seats);
    if (!ticketQuantity) {
      setOpen(true);
    }
    console.log("check tickettype")
    if (seat.Type !== ticketQuantity.type) {
      alert("Please select ticket of type" + ticketQuantity.type);

      return;
    }

    const seatUpdate = selectPrev.map((row) => {
      return row.map((s) => {
        if (s.id === seatId && !s.isBooked) {
       
          // current row in selected seat check index
          const seatIndex = row.indexOf(s);

          let Count = 0;
          // Count the number of current row
          
          row.forEach((s) => {
            if (s.isSelected) {
              Count++;
            }
          });

          if (Count < ticketQuantity) {
            // Select seats in the same row up to ticketNumber
            for (let i = seatIndex; i < row.length; i++) {
              if (row[i].id !== 0 && !row[i].isBooked && !row[i].isSelected) {
                row[i].isSelected = true;
                Count++;
              }
              if (Count >= ticketQuantity) {
                break;
              }
            }
          }
        }
        return s;
      });
    });
  };
  const proceedButton = () => {
    console.log("proceed buttn call");
    if (ticketQuantity == "") {
      // alert("please select ticket quantity")
      setOpen(true);
    }
    setSeats(
      seats.map((item) =>
        item.map((data) => {
          if (data.isSelected) {
            return { ...data, isBooked: true, isSelected: false };
          } else {
            return data;
          }
        })
      )
    );
    if (ticketQuantity) {
      isSetOpen(true);
      // alert(`you have booked ${ticketQuantity} ${ticketQuantity.type} tikets.. !`)
    }
    if(ticketType=='Standard' && ticketQuantity){
      setPrice(ticketQuantity * standardPrice)
    }
    if(ticketType=='Premium' && ticketQuantity){
      setPrice(ticketQuantity * premiumPrice)
    }
    setSelectedSeats(0);
  };
  return (
    <div className="bookseat">
       {seats.map((row, rowIndex) => (
        <div key={rowIndex} style={{ display: "flex", width: "100%" }}>
          <div style={{ width: "40px", marginTop: "15px",marginLeft:"12px" }}>
            {String.fromCharCode(65 + rowIndex)}
          </div>
          {row.map((seat, seatIndex) => (
            <React.Fragment key={seatIndex}>
              <p></p>
              {seat.isZero !== 0 ? (
                <Seat
                  seat={seat}
                  onClick={() => bookHandler(seat.id, seat)}
                />
              ) : (
                <span style={{ marginRight: "3.5%" }}></span>
              )}
            </React.Fragment>
          ))}
        </div>
      ))}

      <button className="bttn" onClick={proceedButton}>
        Proceed
      </button>

      <PopupDialog open={open} setOpen={setOpen} />
      <PopupProceed
        isopen={isopen}
        isSetOpen={isSetOpen}
        ticketQuantity={ticketQuantity}
        ticketType={ticketType}
        price={price}
      />
    </div>
  );
}

export default BookSeat;
