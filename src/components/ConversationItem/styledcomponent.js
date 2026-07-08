import styled from "styled-components"

export const ConversationListConverstaioncard = styled.li`
display:flex;
align-items:center;
gap:10px;
padding:10px;
max-height:70px;
border-radius:10px;
cursor:pointer;
transition: 0.3s;
&:hover{
    background: #252833;
}
`
// background: #252833;

export const ConversationListUserProfile = styled.img`
height:50px;
width:50px;
border-radius:50%;
`
export const ConversationListDetails = styled.div`
display:flex;
align-items:center;
justify-content: space-between;
height:100%;
width:100%;

`
export const ConversationListUserInfoCard = styled.div`
display:flex;
flex-direction:column;
justify-content:flex-start;
gap:10px;
height:100%;
`
export const ConversationListUserName = styled.h3`
font-family:"Roboto";
font-size:18px;
font-weight:600;
color: #ffffff;
`
export const ConversationListUserNameMessage = styled.p`
color: #9CA3AF;
font-family:"Roboto";
font-size: 14px;
font-weight: 500;

`
// white-space: nowrap;
// overflow: hidden;
// text-overflow: ellipsis;

export const ConversationListTimeCount = styled.div`
display:flex;
flex-direction:column;
justify-content:flex-start;
align-items:flex-end;
gap:15px;
height:100%;
min-width:50px;
`
export const ConversationListSentTime = styled.p`
font-family:"Roboto";
font-size:13px;
font-weihgt:600;
color: #9CA3AF;
`
export const ConversationListUnreadCount = styled.p`
color: #ffffff;
font-family:"Roboto";
font-size: 10px;
font-weight: 600;
text-align: right;
background: #2c37c6;
display: flex;
justify-content:center;
align-items:center;
min-width:25px;
border-radius:20px;
padding:5px;
`