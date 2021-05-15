import React, { PureComponent } from "react";
import { fromJS } from "immutable";
import { connect } from "react-redux";
import axios from "axios";
import { Link } from "react-router-dom";
import { ListItem, ListInfo, LoadMore } from "../style";

class List extends PureComponent {

  constructor(props){
    super(props);
    axios.get('./api/home.json')
    .then((res)=>{
      var fromJson=res.data;
      var listFromStor=localStorage.getItem('list');
      if(listFromStor===null){
        localStorage.setItem('list',JSON.stringify(fromJson));
        this.props.writeStore(fromJson);
      }else{
        let fromLocal=localStorage.getItem('list');
        fromLocal=(JSON.parse(fromLocal));
        console.log(fromLocal);
        this.props.writeStore(fromLocal);
      }
    })
      .catch((err)=>{console.log(err)});
  }

  getMoreList=()=>{
    this.props.getMoreListFromStore(this.props.page)
  }
 

  render() {
    const { page,list } = this.props;
    return (
      <div>
        {list.map((item, index) => {
          return (
             <Link key={index} to={'/detail/'+item.get('id')}> 
              <ListItem>
                <img className="pic" src={item.get('imgUrl')} alt="" />
                <ListInfo>
                  <h3 className="title">{item.get('title')}</h3>
                  <p className="desc">{item.get('desc')}</p>
                </ListInfo>
              </ListItem>
            </Link>
          );
        })}
        <LoadMore onClick={() => this.getMoreList(page)}>更多内容</LoadMore>
      </div>
    );
  }
}
const mapState = (state,ownProps) => {
  return{
  page: state.getIn(["home", "articlePage"]),
  list: state.getIn(["home", "articleList"])
  }

};

const mapDispatch = (dispatch) => ({
  getMoreListFromStore: (page) => {
    axios
      .get("./api/homeList.json?page=" + page)
      .then((res) => {
        const data = res.data;
        dispatch({ type: "get_moreList", data: data, page: page + 1 });
      })
      .catch((err) => {
        console.log(err);
      });
  },
  writeStore:(data)=>{
    dispatch({type:"set_homeList",data});
  }
});
export default connect(mapState, mapDispatch)(List);
