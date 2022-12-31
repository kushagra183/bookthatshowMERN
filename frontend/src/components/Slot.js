import React from 'react'
//slot component function
const Slot = (props) => {
  return (
    <div className='container'>
        <h2>Select a time slot</h2>

        {/**mapping over slot data and changing the background color of the slot option to orange*/}
      {props.data.map((el,i)=>(
      <h3   className='element' key={i}>{el}</h3>))}
    </div>
  )
}

export default Slot
