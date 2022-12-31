
import './App.css';
import img from "./components/images/bts.png"
import data from "./components/data"
import Movie from './components/Movie';
import Slot from './components/Slot';


function App() {
  
  return (
    <div className="mainContainer">
   
    <div style={{display:"flex",justifyContent:"center"}}><img src={img} alt="logo" height={"100px"} width="250px" /></div>
   
    <div className="AppContainer">      
      <div className="containerOuter">        
      <Movie data={data.movies}/>  
      <Slot  data={data.slots}/>
       {/**seats */}
   
 {/**submit btn */}

       </div>
    <div >
      {/**lastBooking and clear button here */}
     </div> 
    </div>
    </div>
  );
}

export default App;
