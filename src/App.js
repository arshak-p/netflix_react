
import React from "react";
import "./App.css"
import { action, originals,horror } from './urls'
import NavBar from "./Components/Navbar/NavBar";
import Banner from "./Components/Banner/Banner";
import RowPost from "./Components/RowPost/RowPost";
function App() {
  return (
    <div className="App">
         <NavBar/>  
         <Banner/>
         <RowPost url ={originals} title ='Netflix orginals'/>
         <RowPost url={action} title = 'Action' isSmall = {true}/>
         <RowPost url={horror} title = 'Horror' isSmall = {true}/>

    </div>
  );
}

export default App;
