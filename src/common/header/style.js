import styled from 'styled-components';
import logo from '../../static/nav-logo.png';

export const HeaderWrapper = styled.div`
    z-index:1;
    position: relative;
    height: 56px;
    border-bottom: 1px solid #f0f0f0;
`;
export const Logo = styled.div`
    position: absolute;
    top:0;
    left:0;
    display: block;
    width:100px;
    height: 56px;
    border-bottom: 1px solid #f0f0f0;
    background: url(${logo});
    background-size: contain;
`;
export const Nav = styled.div`
    width: 60%;
    padding-right: 70px;
    box-sizing: border-box;
    height: 100%;
    margin: 0 auto;
`;
export const NavItem = styled.div`
    line-height: 56px;
    padding: 0 15px;
    font-size: 17px;
    cursor:pointer;
    color: #333;
    &.left {
        float: left;
    }
    &.right {
        float: right;
        color: #969696;
    }
    &.active {
        color: #ea6f5a;
    }
`;
export const NavSearch = styled.input.attrs({
    placeholder: '搜索'
})`
&.slide-enter{
    transition: all .2s ease-out;
}
&.slide-enter-active{
    width:240px;
}
&.slide-exit{
    transition: all .2s ease-out;
}
&.slide-exit-active{
    width:160px;
}
    width: 160px;
    height: 38px;
    margin-top: 9px;
    margin-left: 20px;
    padding: 0 30px 0 20px;
    box-sizing: border-box;
    border: none;
    outline: none;
    border-radius: 19px;
    background: #eee;
    font-size:14px;
    color: #666;
    &::placeholder {
        color: #999;
    }
    &.focused{
        width:240px;
    }
`;
export const Addition = styled.div`
    position:absolute;
    right:0;
    top:0;
    height:56px;

`;
export const Button = styled.div`
    float: right;
    margin-top: 9px;
    margin-right:20px;
    padding: 0 20px;
    line-height:38px;
    font-size: 14px;
    border-radius:19px;
    border: 1px solid #ec6149;
    &.reg{
        color: #ec6149;
    }
    &.writting{
        color: #fff;
        background:#ec6149;
    }
`;
export const SearchWrapper = styled.div`
    position:relative;    
    float:left;
    .zoom{
        position:absolute;
        right: 5px;
        bottom: 5px;
        width:30px;
        line-height:30px;
        border-radius:15px;
        text-align:center;
        &.focused {
            background: #777;
            color:#fff;
        }
    }
`;
export const SearchInfo = styled.div`
position: absolute;
left:0;
top:56px;
width:240px;
padding: 0 20px;
box-shadow: 0 0 8px rgba(0,0,0,.2);
background:#fff;
`;
export const SearchInfoTitle=styled.div`
margin-top: 20px;
margin-bottom: 15px;
line-height: 20px;
font-size:14px;
color:#969696;
`;
export const SearchInfoSwitch=styled.span`
float:right;
font-size:13px;
cursor:pointer;
.spin{
    display:block;
    float:left;
    margin:2px;
    font-size:15px;
    transition: all .2s ease-in;
    transform-origin:center center;
}
`;
export const SearchInfoItem=styled.a`
padding:0 5px;
font-size:12px;
line-height:20px;
border: 1px solid #ddd;
color:#787878;
border-radius: 3px;
display:block;
float:left;
margin-right:10px;
margin-bottom:15px;
`;
export const SearchInfoList=styled.div`
overflow:hidden;
`;