
//imported components
import img from "./components/images/bts.png"
import data from "./components/data"
import Movie from './components/Movie';
import Slot from './components/Slot';
import Seats from './components/Seats';
import LastBooking from "./components/LastBooking";

import axios from "axios"; //imported axios for api communication
import "./App.css" //CSS imported
import {useEffect, useState } from "react"; //imported useEffect and useState hook

function App() {
  const [movieData, setmovieData] = useState({movie: "", slot: "", seats: []}); //state for storing selected movie details from frontend
  const[fetched,setFetched] = useState(); //state for storing fetched data from backend
  //function to store selected movie name in movieData.
  const movieHandler=(movie)=>{
    setmovieData((prev)=>{
      return{
        ...prev,
        movie
    }})
    }

 //function to store selected time slot in movieData
const slotHandler=(slot)=>{
  setmovieData((prev)=>{
    return{
    ...prev,
      slot
  }})
  }
 
  const seatHandler=(seat)=>{

    const seatIndex = movieData.seats.findIndex((el)=>el.seatType === seat.seatType); //storing the index of similar seatType in the array of seats inside movieData
   //if there is a similar seatType available in the array then replace that with the newest seat data.
    if(seatIndex!== -1){
    const newSeatData = [...movieData.seats];
    newSeatData[seatIndex] = seat;
    //now putting the updated seat data with the other movie data inside movieData state.
    setmovieData((prev) => {
      return {
        ...prev,
        seats: newSeatData,
      };
    });
    }
  
    //if there is no two similar seatType then add the seats to previous selected seats and then add the seat array to the movieData
    else{
      setmovieData((prev) => {
        return {
          ...prev,
          seats: [...prev.seats, seat],
        };
      });
    }
  }
  //filter out any blank ("") seatNo. or seatNo. "0" from the movieData
movieData.seats = movieData.seats.filter(item => item.seatNo !== "" && item.seatNo !== 0)

//async function to make an axios POST request which will add the movieData in the database and then give the response of the updated data which we will store in our state named fetched.
const postData = async()=>{
  await axios.post("https://bookthatshow.cyclic.app/api/booking",movieData).then((res)=>setFetched(res.data)).catch((err)=>{console.log(err)});
}

//this function will be called when the submit button will be clicked
//if any of the field is left empty then an alert will pop up to select/fill all the details and then submit
//if every field is selected/filled then postData() will be called
const handleSubmit = () =>{
if(movieData.movie===""||movieData.slot===""||movieData.seats.length===0){
return alert("Select all details and then submit!")
}else{
    postData();
}
}

 
//async fetchData function to make the axios get request which returns a promise
const fetchData = async() =>{
  await axios.get("https://bookthatshow.cyclic.app/api/booking").then((res)=>setFetched(res.data)).catch((err)=>console.log(err));
}

//the function inside useEffect will be called whenever the page is rendered
useEffect( ()=>{
fetchData();
},[])

console.log(fetched);
return (
    <div className="mainContainer">
   
    <div style={{display:"flex",justifyContent:"center"}}><img src={img} alt="logo" height={"100px"} width="250px" /></div>
   
    <div className="AppContainer">      
      <div className="containerOuter">        
      <Movie data={data.movies} movieSelector={movieHandler} movieData={movieData.movie}/>  
      <Slot  data={data.slots} slotSelector={slotHandler} movieData={movieData.slot}/>
      <Seats data={data.seats} seatSelector={seatHandler} /> 
   
      <div className="btn">
      <button onClick={handleSubmit} className="submit-btn">Submit</button>
    </div>

       </div>
    <div >
    <LastBooking data={fetched} />
     </div> 
    </div>
    </div>
  );
}

export default App;
