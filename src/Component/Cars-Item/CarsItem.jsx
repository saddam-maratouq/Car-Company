import React from 'react'
import './cars.style.css' 






const CarsItem = ({car}) => {
    return (
        <center> 
        <div> 
        <div className="card" > 
        
        <img src={car.Image}  className="card-img-top" alt='car'  style={{ width : '250px' , height : '250px' }}/>
        
        <div className="card-body">
        
         <h3 className="card-title"> {car.name}  </h3>
        
         <h5> ${car.price} </h5>
        
         <a  href= {`car/${car.id}`}  className="btn btn-light"> Details </a>  
        
       
        <button className="btn btn-primary"> 
               Add to Cart
           </button> 
    
      
               

        
         </div>
         </div> 
         
        </div> 
        </center>
               
    )
}

export default CarsItem
 




