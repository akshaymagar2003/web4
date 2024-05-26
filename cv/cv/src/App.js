import React from "react"; 
import './App.css'; 
import { Button, Col, Container, Row } from "reactstrap" 
import "react-toastify/dist/ReactToastify.css"; 
import {ToastContainer, toast} from "react-toastify" 
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; 
import Home from "./Home.js"; 
import Cv from "./Cv.js"; 
import Allcv from "./Allcv.js"; 
import Addcv from "./Addcv"; 
import Header from "./Header"; 
import Menu from "./Menu"; 
 
function App() { 
  return (<div> 
    <Router>  
    <ToastContainer /> 
       <Container> 
         <Header /> 
          
         <Row> 
           <Col md={3}><Menu /></Col> 
           <Col md={9}> 
           <Routes> 
              <Route path="/" element={<Home />}></Route> 
              {/* <Route path="/add-cv" element={<Addcv />}></Route>  */}
              <Route path="/all-cv" element={<Allcv />}> </Route> 
           </Routes> 
          </Col > 
         </Row> 
        </Container> 
   </Router> 
   
</div> 
)  
}  
export default App;