import React from 'react' 
import { Routes, Route ,  Link } from "react-router-dom";



// pages 
import CarDeatele from '../../Pages/CarDeateles';
import Cars from '../../Pages/Cars';
import Cart from '../../Pages/Cart';
import Home from '../../Pages/home/Home';
import CartIcon from '../Cart-icon/CartIcon';

import './Header.css'

const Header = () => {
    return (
        <div className='continer'>  
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
        <img   src='https://www.car-brand-names.com/wp-content/uploads/2019/09/Proton-logo.png'  width={'60px'} height={'60px'} /  > 
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link  to='/home '  className="nav-link active" aria-current="page" > Home </Link>
              </li> 
              <li className="nav-item">
                <Link to ='/Cars' className="nav-link" href="#">Cars</Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link" to="/cart"> Cart   </Link> 
            </li>
            
            </ul>
           
          </div>
        </div> 
      </nav> 

      <CartIcon/> 

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



