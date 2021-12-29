import {CarData} from '../../car-Data/data' 


const inithialState = {
    Cars : CarData , 
    Cart : [] ,
    
    

}



export const  CarReducer = (state=inithialState , action) => {
    switch (action.type) {
            case  'ADD_CAR' :  
            return {
                ...state ,
            Cart : [...state.Cart , {...action.paylod.Car , qty : 1 } ]           
            }

            case  'DELETE_CAR' :   
            return  { 
                ...state ,  
                Cart :  state.Cart.filter(item => item.id !== action.paylod.id )  
            }   


            case  'CHANGE_QUANTETY' :   
            return  { 
                ...state ,  
                Cart :  state.Cart.filter(car => car.id === action.paylod.id  ? (car.qty = action.paylod.qty) : car.qty )   
            }   

        default:
            return state ;   
    }
}



