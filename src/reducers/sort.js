import * as Types from "../constants/ActionTypes"

var initialState = -1;


const appReducers = (state = initialState, action) => {
    switch(action.type){
        case Types.SORT:
            console.log(action.Sort)
            return action.Sort
        default: return state
    }
} 

export default appReducers;