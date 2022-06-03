import {INC_COUNT,DEC_COUNT, ADD_TODO} from './actionTypes'


export const inc_count = (data)=>{
    return{
        type:INC_COUNT,
        payload:data,
    }
}

export const dec_count = (data)=>{
    return{
        type:DEC_COUNT,
        payload:data,
    }
}

export const add_todo = (data) => {
    return{
        type:ADD_TODO,
        payload:data,
    }
}