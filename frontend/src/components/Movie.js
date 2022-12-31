import React from 'react'
//movie component function
const Movie = (props) => {
  return (
    <div className='container'>
        <h2>Select a movie</h2>
        {/**mapping over movie data and changing the background color of the movie option to orange   */}
      {props.data.map((el,i)=>(
      <h3 style={{backgroundColor:`${props.movieData === el?'orange':"white"}`}} onClick={()=>props.movieSelector(el)} className='element' key={i}>{el}</h3>))}
    </div>
  )
}

export default Movie
