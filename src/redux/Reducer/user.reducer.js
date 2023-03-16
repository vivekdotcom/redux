import userdata from '../../data.json';
import { filter } from '../Action/user.action';
import {
    GET_ALL_USER,
    FILTER_BY_EMAIL,
    FILTER_BY_MOBILE
} from '../state/user.state';


const defaultValue = {
    data:[]
}

let filtered = "";
let keyword = "";

const useReducer =(state=defaultValue , action)=>{
   if(action.type===GET_ALL_USER)
   {
    return {
        ...state,
       data: userdata
    }
   }
   if(action.type===FILTER_BY_EMAIL)
   {
      keyword = action.keyword;
      filtered = userdata.filter(item=>item.email.indexOf(keyword) !== -1);
      return{
        ...state,
        data:filtered
      }
   }
   
   if(action.type===FILTER_BY_MOBILE)
   {
    keyword = action.keyword;
    filtered = userdata.filter(item=>item.mobile.toString().indexOf(keyword) !== -1);
    return{
      ...state,
      data:filtered
    }
   }
}
export default useReducer;