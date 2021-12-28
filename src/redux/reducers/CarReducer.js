import {CarData} from '../../car-Data/data' 


const inithialState = {
    Cars : CarData , 
    Cart : []  

}



export const  CarReducer = (state=inithialState , action) => {
    switch (action.type) {
            case  'ADD_CAR' :  
            return {...state , Cart : action.paylod }  
           
            case  'DELETE_CAR' :   
            return {...state  }   

        default:
            return state ; 
    }
}



