import { combineReducers } from "redux"

import  {CarReducer} from './CarReducer' 



const reducers = combineReducers({
    Cars : CarReducer 
})


export default reducers 

