import * as api from '../api';
import {FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes.js';

// const getPosts=()=>{
//     const action={type: 'FETCH_ALL', payload:[]}
//     return(action);
// }
//making it async for fetching
// const getPosts=()=>async(dispatch)=>{
//     const action={type: 'FETCH_ALL', payload:[]}
//     dispatch(action);    
// }
export const getPosts=()=>async(dispatch)=>{
    try {
        const {data}=await api.afetchPosts();
        dispatch({type:FETCH_ALL, payload:data})
    } catch (error) {
        console.log(error.message)
    }
}

export const createPost=(cpost)=>async(dispatch)=>{
    try{
        const {data}= await api.acreatePost(cpost);
        dispatch({type:CREATE, payload:data})
    }
    catch(error){
        console.log(error);
    }
}

export const updatePost=(currentId, postData)=>async (dispatch)=>{
    try{
        const {data}= await api.aupdatePost(currentId, postData);
        console.log(await api.aupdatePost(currentId, postData))
        dispatch({type: UPDATE, payload: data})//here data fetched from api promise.. api always returns a promise with 
        //config ,data, headers etc.. for that 
        //or
        //dispatch({type: 'UPDATE', payload: postData})--here data fetched from client.
    }
    catch(error){
        console.log(error);        
    }
}

export const deletePost = (id) => async(dispatch) => {
    try{
        await api.adeletePost(id);
    dispatch({type:DELETE, payload: id})
}
catch(error){
    console.log(error);
    }
}

export const likePost=(id)=>async(dispatch) => {
    try{
        const { data }=await api.alikePost(id);
        dispatch({type:LIKE, payload: data})
    }
    catch(error){
        console.log(error);
    }
}