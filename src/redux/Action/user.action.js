import {
    GET_ALL_USER
} from '../state/user.state';

const getAllUser=()=>{
   return {
    type:GET_ALL_USER
   }
}

const filter =(selectTag, e)=>{
    let state = selectTag.current.value;
    let keyword = e.target.value;
    return {
        type:state,
        keyword:keyword
       }
}
export  {
    getAllUser,
    filter

};