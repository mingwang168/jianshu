import styled from 'styled-components';

export const HomeWrapper = styled.div`
width:960px;
margin: 0 auto;
overflow:hedden;
`;
export const HomeLeft = styled.div`
width:625px;
margin-left:15px;
padding-top:30px;
float:left;
.banner-img{
    width:625px;
    height:270px;
}
`;
export const HomeRight = styled.div`
width:240px;
float:right;
`;
export const TopicWrapper=styled.div`
padding: 20px 0 10px 0;
overflow:hidden;
margin-left:-18px;
border-bottom:1px solid #dcdcdc;
`;
export const TopicItem=styled.div`
float:left;
background: #f7f7f7;
height:32px;
margin-left:18px;
margin-bottom:18px;
line-height:32px;
font-size:14px;
color: #000;
border: 1px solid #dcdcdc;
border-radius:4px;
padding-right:14px;
.topic-pic{
    display:block;
    float:left;
    width:32px;
    height:32px;
    margin-right:10px;
}
`;
export const ListItem=styled.div`
padding:20px 0;
border-bottom: 1px solid #dcdcdc;
overflow:hidden;
.pic{
    width:125px;
    height:100px;
    display:block;
    float:right;
    border-radius:10px;
}
`;
export const ListInfo=styled.div`
width:500px;
float:right;
.title{
font-size:18px;
line-height:27px;
font-weight:bold;
color:#333;
}
.desc{
font-size:13px;
line-height:24px;
color:#999;
}
`;
export const RecommendWrapper=styled.div`
margin:25px -30px 0 -30px;
height:250px;
.recommendPic{
    width:100%;
}
`;
export const RemcommendItem=styled.div`
padding-bottom:3px;
cursor:pointer;
`;
export const WriterWrapper=styled.div`
margin:25px -30px 0 -30px;
height:20px;
`;

export const WriterTitle=styled.div`
margin-top: 20px;
margin-bottom: 15px;
line-height: 20px;
font-size:14px;
color:#969696;
`;

export const WriterSwitch=styled.span`
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
export const WriterList=styled.div`
display:flex;
flex-wrap:nowrap;
justify-content:space-between;
margin-bottom:15px;
.writerIcon{
    width:50px;
    height:auto;
    border-radius:25px;
}
.focus{
    font-size:13px;
    color:#42c02e;
    margin-top:8px;
    cursor:pointer;
}
`;
export const WriterInfo=styled.div`
width:65%;
.writerName{
    color:#333333;
margin:8px 0 8px 2px;
font-size:14px;
}
.wordNumber{
    color:#969696;
    margin:8px 0 8px 2px;
    font-size:12px;
}
`;
export const LoadMore=styled.div`
width:100%;
height:40px;
line-height:40px;
margin:30px 0;
background:#a5a5a5;
text-align:center;
border-radius:20px;
color:#fff;
cursor:pointer;
`;
export const BackTop=styled.div`
position: fixed;
right:100px;
bottom:100px;
width:60px;
height:60px;
line-height: 60px;
text-align:center;
border: 1px solid #ccc;
font-size:14px;
cursor:pointer;
`;