import React from 'react'
import Loader from './loader/loader'


//lastBooking component function
const LastBooking = (props) => {
  return (
    <div className='containerBooking'>

      {/**if fetched data is undefined then show loading spinner else if fetched data = "no previous booking found" then show No booking found else show the fetched data */}
    {!props.data?<Loader/>: 
   
    props.data==="no previous booking found"?<div className='noBooking'><h3>No Booking found</h3></div>:<>
     <h2 style={{marginBottom:"10px"}}>Last Booking Details:</h2>
      
      <h3>Seats:</h3>
      {props.data.seats.map((el,i)=><div key={i}><span style={{fontWeight:"bold"}}>{el.seatType}</span>:<span style={{fontStyle:"italic"}}>
      {el.seatNo}</span></div>)}
      <div>
      <h3 style={{display:"inline"}}>Slot:</h3>
      <p style={{display:"inline", fontStyle:"italic"}}>{props.data.slot}</p>
      </div>
      <h3 style={{display:"inline"}}>Movie:</h3>
      <p style={{display:"inline", fontStyle:"italic"}}>{props.data.movie}</p>
     
     </>}


  
    </div>
  )
}

export default LastBooking
