import React, { PureComponent } from "react";
import { nanoid } from 'nanoid';
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import {Wrapper,Title,ArticleTitle,TitleInput,Pic,Content,Textarea,Button} from './style'

class Write extends PureComponent {
  showPic=(e)=>{
    this.imgurl=window.URL.createObjectURL(e.target.files[0]);
    this.picFile=e.target.files[0];
    var reader= new FileReader();
    reader.readAsDataURL(this.picFile);
    reader.onload=(e)=>{
      this.picDataURL=e.target.result;
      console.log(this.picDataURL);
      this.props.savePic(this.picDataURL);
    }
  }
  submit=(e)=>{
    e.preventDefault();
    let arr=this.content.value.split('\n');
    const ContentArr=arr.map((item)=>{return '<p>'+item+'</p>'});
    const newArticle=[{
      id:nanoid(),
      title:this.title.value,
      desc:arr[0],
      imgUrl:this.props.imgUrl
     }]
     let listFromSto=JSON.parse(localStorage.getItem('list'));
     var articles=listFromSto.data.articleList;
     var newList=newArticle.concat(articles);
      listFromSto.data.articleList=newList;
      console.log(listFromSto);
      localStorage.setItem('list',JSON.stringify(listFromSto));
      alert('提交成功');
      this.props.history.push("/");
  }
  render() {
    if (this.props.loginStatus) {
      return (
        <form>
          <Wrapper>
            <Title>写文章</Title>
            <ArticleTitle>Title</ArticleTitle>
            <TitleInput ref={title=>this.title=title} type='text'/>
            <Pic>
              <img src={this.props.imgUrl} alt='' />
              <input onChange={(e)=>this.showPic(e)} type='file' accept='image/*'/>
            </Pic>
            <Content>
            Content:
              <Textarea ref={content=>this.content=content} rows="27" cols="78" required />
            </Content>
            <Button className="btn btn-primary" onClick={this.submit}>提交</Button>
          </Wrapper>
        </form>
      );
    } else {
        return <Redirect to='/login' />
    }
  }
}
const mapState = (state) => ({
  loginStatus: state.getIn(["login", "login"]),
  imgUrl:state.getIn(['write','url'])
});

const mapDispatch=(dispatch)=>({
  savePic:(url)=>{
    dispatch({type:'save_pic',url})
  }
})

export default connect(mapState, mapDispatch)(Write);
