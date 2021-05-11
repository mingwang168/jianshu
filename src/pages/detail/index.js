import React, { Component } from "react";
import { connect } from "react-redux";
import axios from 'axios';
import { DetailWrapper,Header,Content } from "./style";

class Detail extends Component {
    componentDidMount=()=>{
        this.props.getDetail(this.props.match.params)
    }
  render() {
      console.log(this.props.match.params.id)
    return <DetailWrapper>
        <Header>{this.props.title}</Header>
        <Content dangerouslySetInnerHTML={{__html:this.props.content}} />
    </DetailWrapper>;
  }
}
const mapDispatch=(dispatch)=>({
    getDetail:(id)=>{
        axios.get('/api/detail'+id.id+'.json')
        .then((res)=>{
            dispatch({type:'getDetail',data:res.data.data})
        })
        .catch((err)=>{
            console.log(err);
        });

    }
})
const mapState=(state,props)=>{
    console.log(props)
    return{
        title:state.get('detail').get('title'),
content:state.get('detail').get('content')
    }
}
export default connect(mapState,mapDispatch)(Detail)