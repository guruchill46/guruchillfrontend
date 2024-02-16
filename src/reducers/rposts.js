import {FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes.js';

// const reducer=(state,action)=>{
//     if(action.type==='CREATE'){
//         return state
//     }
// }
// const reducer=(state=[],action)=>{
//     switch(action.type){
//         case 'FETCH_ALL':
//             return state;
//         case 'CREATE':
//             return state;
//         default:
//             break;        
//     }
// }
const rposts=(rposts=[],action)=>{
    switch(action.type){
        case FETCH_ALL:
            return action.payload;
        case CREATE:
            return [...rposts, action.payload];
        case UPDATE:
        case LIKE:    
             return rposts.map((x)=>x._id===action.payload._id? action.payload : x);    
        case DELETE:
            return rposts.filter((x)=>x._id!==action.payload)     
        default:
            return rposts;        
    }
};

export default rposts;