



export const AddCar = (car) => { 

    return (dispatch) => {
        dispatch ({
            type : 'ADD_CAR'  , 
            paylod : {
                Car  : car   
            }
        })
    } 
}  




export const DeleteCar = (carId) => {
    return (dispatch) => {
        dispatch ({
            type : 'DELETE_CAR'  , 
            paylod : {
                id : carId 
            }
        })
    } 
 }  




 export const ChangeQuantety = (carId,value) => {
    return (dispatch) => {
        dispatch ({
            type : 'CHANGE_QUANTETY'  , 
            paylod : {
                id : carId , 
                qty  : value  
            }
        })
    } 
 }  
