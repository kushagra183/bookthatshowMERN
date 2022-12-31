import React from 'react'

//seats component function
const Seats = (props) => {

//this function will run when there will be change in the input  
const handleChange=(e,el)=>{
//storing the seatType and seatNo in seatsData
const seatsData={
  seatType:el,
  seatNo:Number(e.target.value)
}
props.seatSelector(seatsData)
}


  return (
    <div className='container'>
    <h2>Select the seats</h2>
{/** mapping over seats array */}
  {props.data.map((el,i)=>(
    <div key={i} className='element'>
  <h3  >Type {el}</h3>
  {/**input tag for taking number as input */}
  <input style={{fontWeight:"bold"}} onChange={(e)=>handleChange(e,el)} type={"number"} min="1" name="seats"
          step={1}
          max="10"/>
  </div>))}

</div>
  )
}

export default Seats
