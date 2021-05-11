import React, { PureComponent } from "react";
import { RecommendWrapper,RemcommendItem } from "../../home/style";
import { connect } from "react-redux";

class Recommend extends PureComponent {
  render() {
    return (
      <div>
        <RecommendWrapper>
            {this.props.list.map((item)=>{
                return(
            <RemcommendItem key={item.get('id')}>
            <img className="recommendPic" src={item.get('imgUrl')}  alt=''/>
            </RemcommendItem>
                );
            })}

        </RecommendWrapper>
      </div>
    );
  }
}
const mapState=(state)=>({
list: state.get('home').get('recommendList')
});
export default connect(mapState,null)(Recommend);
