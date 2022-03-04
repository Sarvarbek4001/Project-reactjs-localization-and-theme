import "./App.css";
import React from "react";
import {Header} from "./Components/Header/Header"
import {Main} from "./Components/Main/Main"
import {Footer} from "./Components/Footer/Footer"
import Content from "./Components/Content/Content"
import {Modal} from "./Components/Modal/Modal"
function App() {
   
  return(
     <div className="App">
       <Header/>
       <Main/>
       <Footer/>
     </div>
  )
}
export default App;
