import styled from "styled-components"

export const MessageListContainer = styled.div`
width:100%;
display: flex;
align-items:center;
justify-content:${props => props.isMe ? "flex-end" : "flex-start"};
padding:10px 5px;
`
export const MessageListCard = styled.div`
display:flex;
align-items:center;
gap:10px;
`
export const MessageListUserProfile = styled.img`
height:40px;
width:50px;
border-radius:50%;
`
export const MessageListMessagecard = styled.div`
min-height:60px;
max-width: 80%;
padding:10px;
display: flex;
flex-direction:column;
gap:10px;
background: ${props => props.isMe ? "#4F46E5" : "#2D2F3A"};
border-radius:20px;
`
export const MessageListMessage = styled.p`
font-family:"Roboto";
font-size:15px;
font-weight: 500;
color: #9CA3AF;
align-self: flex-start;
`
export const MessageListTime = styled.p`
font-family:"Roboto";
font-size:12px;
font-weight: 500;
color: #9CA3AF;
align-self: flex-end;
width: 60px;
`