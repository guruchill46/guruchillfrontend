import axios from 'axios';

const url="https://guruchillbackend.onrender.com/posts";

export const afetchPosts=()=>axios.get(url);
export const acreatePost=(Postdata)=>axios.post(url, Postdata);
export const aupdatePost=(currentId, postData)=>axios.patch(`${url}/${currentId}`, postData )
export const adeletePost=(id)=>axios.delete(`${url}/${id}`);
export const alikePost=(id)=>axios.patch(`${url}/${id}/likePost`);
