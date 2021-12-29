import React from 'react'  

import { useDispatch  } from 'react-redux'
import {bindActionCreators } from 'redux'
import {actionCreator} from '../../redux/Action-index'







const CartItem = ({item}) => { 

    const dispatch = useDispatch() 

    const { DeleteCar} = bindActionCreators(actionCreator ,dispatch) 
    
    
    const CarId = item.id 


    const deleteHandler = () =>   DeleteCar(CarId)
   
       


    return (
       
        <div> 
        <div className="card" > 
        
        <img src={item.Image}  className="card-img-top" alt='car' style={{ width : '200px' , height : '200px' }} />
        
        <div className="card-body">
        
         <h3 className="card-title"> {item.name}  </h3>
        
         <h5> ${item.price} </h5>
        
        
        
       
        <button   onClick={deleteHandler} className="btn btn-danger"  >  
               Delete
           </button> 
    
      
               

        
         </div>
         </div> 
         
        </div> 
       
               
    )
}

export default CartItem 













