import React, { useState } from 'react'
import { useSelector } from 'react-redux'
// import {CarData} from '../car-Data/data'
import CarsItem from '../Component/Cars-Item/CarsItem'






const Cars = () => { 

const Cars = useSelector((state) => state.Cars.Cars) 
console.log(Cars);  

  

    return ( 
         <div>
          <h2> Cars </h2>  
          <br /> 
          <div className="row">   
          {Cars.map(car => (  

              <div className={"col-4"}   key={car.id} > 
            
                  <CarsItem  car={car}  />
             
              </div> 
          )) } 
         </div> 
         </div>
 )
 }

export default Cars
