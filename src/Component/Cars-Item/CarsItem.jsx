import React from 'react'
import { useDispatch , useSelector } from 'react-redux'
import {bindActionCreators } from 'redux'
import {actionCreator} from '../../redux/Action-index'

import './cars.style.css' 






const CarsItem = ({car}) => { 


const dispatch = useDispatch() 

const { AddCar , DeleteCar } = bindActionCreators( actionCreator  , dispatch)   

    const addCarHanelr = () =>  AddCar(car) 

    return (
       
        <div> 
        <div className="card" > 
        
        <img src={car.Image}  className="card-img-top" alt='car'  style={{ width : '250px' , height : '250px' }}/>
        
        <div className="card-body">
        
         <h3 className="card-title"> {car.name}  </h3>
        
         <h5> ${car.price} </h5>
        
         <a  href= {`car/${car.id}`}  className="btn btn-light"> Details </a>  
        
       
        <button onClick={addCarHanelr} className="btn btn-primary">  
               Add to Cart
           </button> 
    
      
               

        
         </div>
         </div> 
         
        </div> 
       
               
    )
}

export default CarsItem
 




