import { GET_PRODUCTS } from "../actionTypes";

const initState={Products:[]}
export const productReducer=(state=initState,action)=>{
    switch(action.type) {
        case GET_PRODUCTS:
            return{...state,Products:action.payload
            }
            default:
                return state
    }
}