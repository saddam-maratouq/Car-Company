import React from 'react'

const CartItem = ({item}) => {
    return (
       
        <div> 
        <div className="card" > 
        
        <img src={item.Image}  className="card-img-top" alt='car' style={{ width : '200px' , height : '200px' }} />
        
        <div className="card-body">
        
         <h3 className="card-title"> {item.name}  </h3>
        
         <h5> ${item.price} </h5>
        
        
        
       
        <button  className="btn btn-danger">  
               Delete
           </button> 
    
      
               

        
         </div>
         </div> 
         
        </div> 
       
               
    )
}

export default CartItem 













