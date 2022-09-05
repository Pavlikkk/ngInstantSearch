// TODO import actions * as ...
import * as QueryActions from './save-load-query.actions'

// first I can try do not create save-load-query.actions.ts
// like in first 4 minutes: https://www.youtube.com/watch?v=f97ICOaekNU&t=10s
import { Action } from '@ngrx/store';

export interface QueryState{
    Queries: string[];
}

// use *ngFor to iterate trhrough the initialState in 
const initialState: QueryState = {
    Queries: [
       'botman',
       'dead poool',
       'Reduced Love crazy'
      ]
}

// after 4 minutes: https://www.youtube.com/watch?v=f97ICOaekNU&t=10s
//const newState: 

// first I can try do not create save-load-query.actions.ts
// like in first 4 minutes: https://www.youtube.com/watch?v=f97ICOaekNU&t=10s

//  FOLLOW FireShip rewrite this to use external actions... after 4 minutes: https://www.youtube.com/watch?v=f97ICOaekNU&t=10s
//export function saveLoadQueryReducer(state = initialState, action) {
export function saveLoadQueryReducer(state = initialState, action: Action) {

    console.log( `%c reducer is working..`, 'color: lime' )
    
   switch (action.type) {
    case 'SAVE': return state = { 
        ...state, 
        Queries: [...state.Queries, 'saved_hard_coded_query'] 
    }
    default: return state;
    } 
}
    

// BECAUSE: i need to dispatch SAVE action with new keyword & PAYLOAD this.saveQuery
// ..mabye I will be able to give PAYLOAD to SAVE action here.... ? WATCH AGAIN THE VIDEO


/* 


// _V3 not using external actions here.. 
export function saveLoadQueryReducer(state = initialState, action: Action) {

    console.log( `%c reducer is working..`, 'color: lime' )
    
   switch (action.type) {
    case 'SAVE': return state = { 
        ...state, 
        Queries: [...state.Queries, 'saved_hard_coded_query'] 
        //...state.Queries
    }
    default: return state;
    } 
}
    





// _V2
export function saveLoadQueryReducer(state = initialState, action: Action) {

    console.log( `%c reducer is working..`, 'color: lime' )
    
   switch (action.type) {
    case 'SAVE': return state = {Queries:['saved qeries..','saved..']
    }
    default: return state;
    } 
}



// _V1
export function saveLoadQueryReducer(state = initialState) {
    return state;
}


*/
