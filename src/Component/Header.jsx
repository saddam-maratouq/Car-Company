import React from 'react' 
import { Routes, Route ,  Link } from "react-router-dom";



// pages 
import CarDeatele from '../Pages/CarDeatele';
import Cars from '../Pages/Cars';
import Cart from '../Pages/Cart';
import Home from '../Pages/Home';



const Header = () => {
    return (
        <div className='continer'>  
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
        <img   src='../../puplic/Images/cars-blank-logo-disney-cars-logo-11563605327e5netu4npm.png'  width={'3%'} height={'3%'} /  > 
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link  to='/home '  class="nav-link active" aria-current="page" > Home </Link>
              </li> 
              <li class="nav-item">
                <Link to ='/Cars' class="nav-link" href="#">Cars</Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link" to="/cart"> Cart   </Link> 
            </li>
            
            </ul>
           
          </div>
        </div>
      </nav> 

      <Routes>
    <Route path="/home" element={<Home/>} exact />
    <Route path="/Cars" element={<Cars/>}  exact/>
    <Route path="/Cart" element={<Cart/>} exact />    
   
    <Route path="/Car/:id" element={<CarDeatele/>} exact  /> 
   </Routes> 





      </div>
    )
}

export default Header
