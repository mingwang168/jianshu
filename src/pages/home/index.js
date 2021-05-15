import React, { PureComponent } from "react";
import {Redirect} from 'react-router-dom';
import cookie from 'react-cookies';
import {connect} from 'react-redux';
import List from "./components/List";
import Recommend from "./components/Recommend";
import Topic from "./components/Topic";
import Writer from "./components/Writer";
import { HomeWrapper, HomeLeft, HomeRight,BackTop } from "./style.js";
import pic from "../../static/Screenshot 2021-03-16 123231.jpg";
import axios from "axios";

class Home extends PureComponent {
  handleScrollTop=()=>{
    window.scrollTo(0,0)
  }
  componentDidMount=()=>{
  //  this.props.setHomeList();
    this.bindEvent();
  }
  componentWillUnmount=()=>{
    window.removeEventListener('scroll',this.props.changeScrollTopShow)
  }
  bindEvent=()=>{
    window.addEventListener('scroll',this.props.changeScrollTopShow)
  }
  render() {
    if(this.props.loginStatus){
      return (
        <HomeWrapper>
         <HomeLeft>
           <img className="banner-img" src={pic}  alt='./detail'/>
           <Topic></Topic>
           <List></List>
         </HomeLeft>
         <HomeRight>
           <Recommend></Recommend>
           <Writer></Writer>
         </HomeRight>
         {this.props.showScroll && <BackTop onClick={this.handleScrollTop}>
           回到顶部
         </BackTop>}
       </HomeWrapper>
   );
    }else{
      return <Redirect to='/login' />
    }
  }
}
const mapState=(state)=>({
showScroll:state.get('home').get('showScroll'),
loginStatus:cookie.load('login'),
})

const mapDispatch=(dispatch)=>({
   setHomeList:()=>{
    axios.get('./api/home.json')
    .then((res)=>{
     const data=res.data;
      dispatch({type:"set_homeList",data});
      var listFromStor=localStorage.getItem('list');
      if(listFromStor===null){
        localStorage.setItem('list',JSON.stringify(data));
      }
    })
    .catch((err)=>{
      console.log(err);
    })
  },
  changeScrollTopShow:()=>{
    if (document.documentElement.scrollTop > 500){
      dispatch({type:'toggle_goback',data:true})
    }else{
      dispatch({type:'toggle_goback',data:false})
    }
  }
})
export default connect(mapState,mapDispatch)(Home)
