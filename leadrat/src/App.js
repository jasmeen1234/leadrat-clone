import React,{useState} from 'react'
import './App.css';
import BookSeat from './Components/bookSeat/BookSeat';
import WeekendIcon from '@mui/icons-material/Weekend';
function App() {
  const[ticketType, setTicketType]=useState('standard');
  const[ticketQuantity, setTicketQuantity]=useState(0)
  return (
   <div className='app'>
    <div className='inner'>
      <div className='header'>
      <img src="bookseat.png" style={{width:"40px",height:"40px"}} />
      <h2>Its Time To Movie</h2>
      <p style={{fontsize:"18px"}}> Movie Name: ANIMAL</p>
      <p>Time : 09:00 PM</p>
     </div> 
     <div className='app-left'>
     <div className='left'>
            <div className='dropdown'>

              <label htmlFor="tickettype" >Ticket Type:</label>
              <select id="tickettype" value={ticketType} onChange={(e)=>{setTicketType(e.target.value)}}>
                <option value="Standard">Standard</option>
                <option value="Premium">Premium</option>
              </select>

              <label htmlFor="qty" >Ticket Quantity:</label>
              <select id="qty" value={ticketQuantity} onChange={(e)=>setTicketQuantity(e.target.value)} >
                <option value="">Qnty</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>

              </select>
            </div>
           <BookSeat type={ticketType} ticketQuantity={ticketQuantity}/>
            </div>
            <div className='right'>
              <div>
              <h2>Key To Seat Layout:</h2>
              <ul>
                <li>
                  <WeekendIcon className='available seat' style={{width:"35px",height:"35px"}}/>
                  <p>Available</p>
                </li>
                <li>
                <WeekendIcon className='unavailable size'/>
                  <p>Unavailable</p>
                </li>
                <li>
                <WeekendIcon className='yourselection size'/>
                  <p>Your Selection</p>
                </li>
                <li>
                <WeekendIcon className='premiumcolor size ' />
                  <p>Premium</p>
                </li>
              </ul>
            </div>
            </div>
            </div>
    </div>
    </div>
  );
}

export default App;
