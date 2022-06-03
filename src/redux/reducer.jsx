import {INC_COUNT, DEC_COUNT, ADD_TODO} from "./actionTypes"

export const Reducer = (store = {count:0, todo:[]}, actions) => {
    switch (actions.type){
        case INC_COUNT: return {...store, count:store.count + actions.payload};
        case DEC_COUNT: return {...store, count:store.count - actions.payload};
        case ADD_TODO: return {...store, todo:[...store.todo, actions.payload]};
        default: return store;
    }
}
