import React from 'react'
import { useDispatch  } from 'react-redux'
import {bindActionCreators } from 'redux'
import {actionCreator} from '../../redux/Action-index'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons' 






const CartItem = ({item}) => { 

   console.log(item.qty);   


    const dispatch = useDispatch() 

    const { DeleteCar , ChangeQuantety} = bindActionCreators(actionCreator ,dispatch) 
    
    
    const CarId = item.id 


    const deleteHandler = () =>   DeleteCar(CarId) 
   
       
    const handelQuantety = (e) => {
        const value =  Number(e.target.value) 
        if (value < 0) {
            return value
         
        } 
        ChangeQuantety(CarId,value)  
    }
 
    return (
       
        <div> 
        <div className="card" > 
        
        <img src={item.Image}  className="card-img-top" alt='car' style={{ width : '200px' , height : '200px' }} />
        
        <div className="card-body">
        
         <h3 className="card-title"> {item.name}  </h3>
        
         <h5> ${item.price} </h5>
        
        <input type="Number"  min="1" value={item.qty}   onChange={handelQuantety}  />
        
       <br /> <br />

        <button   onClick={deleteHandler} className="btn btn-danger"  >  
             Remove <br /> 
               <FontAwesomeIcon icon={faTrashAlt} >  </FontAwesomeIcon>
           </button> 
    
      
               

        
         </div>
         </div> 
         
        </div> 
       
               
    )
}

export default CartItem 













