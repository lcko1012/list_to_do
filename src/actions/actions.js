import * as Types from "../constants/ActionTypes"


export const Add_Item = (item) => {
    return {
        type: Types.ADD_ITEM,
        item,
    }
}

export const Delete_Item = (id) => {
    return {
        type: Types.DELETE_ITEM,
        id
    }
}

export const Complete_Item = (id) => {
    return {
        type: Types.COMPLETE_ITEM,
        id
    }
}

export const Sort = (Sort) => {
    return{
        type: Types.SORT,
        Sort
    }
}

export const ClearCompleted = () => {

    return {
        type: Types.CLEAR_COMPLETED
    }
}

export const Complete_All = () => {
    return{
        type:Types.COMPLETE_ALL
    }
}