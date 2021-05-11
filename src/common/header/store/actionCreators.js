import { SEARCH_FOCUS, SEARCH_BLUR,CHANGE_LIST,MOUSE_ENTER,MOUSE_LEAVE,CHANGE_PAGE } from "./constants.js";
import {fromJS} from 'immutable';
import axios from 'axios';

const changeList=(data)=>({
  type: CHANGE_LIST,
  data: fromJS(data),
  totalPage: Math.ceil(data.length/10)
})
export const searchFocus = () => ({
  type: SEARCH_FOCUS
});
export const searchBlur = () => ({
  type: SEARCH_BLUR
});

export const getList = () => {
  return (dispatch)=>{
    axios.get('/api/headerList.json')
    .then((res)=>{
      const {data}=res.data;
      dispatch(changeList(data))
    })
    .catch((err)=>{
      console.log(err)
    })
  }
};
export const mouseEnter=()=>({
  type: MOUSE_ENTER
});
export const mouseLeave=()=>({
  type: MOUSE_LEAVE
});
export const changePage=(data)=>({
  type: CHANGE_PAGE,
  data
});