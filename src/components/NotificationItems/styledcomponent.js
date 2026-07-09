
import styled from "styled-components";
import { MdOutlineMessage } from "react-icons/md";

export const NotificationItemsContainer =  styled.div`
display:flex;
flex-direction:column;
`
export const NotificationItemsCard = styled.div`
display:flex;
flex-direction:column;
margin-top:20px;

border-top-width:0px;
border-left-width:0px;
border-right-width:0px;
border-radius:10px;
padding:10px;
cursor:pointer;
gap:10px;
&:hover{
background: #2D2F3A;
}

`
export const NotificationItemsInnercard = styled.div`
display:flex;
align-items:center;
gap:10px;
`
export const NotificationItemsMessage = styled.p`
font-family:"Roboto";
font-size:15px;
font-weight: 500;
color: #aca7a7;
`
export const NotificationItemsCategory = styled.p`
font-family:"Roboto";
font-size:12px;
font-weight: 500;
color: #aca7a7;
align-self:flex-end;
`
export const NotificationItemsMessageIcon = styled(MdOutlineMessage)`
font-size:18px;
color: #ffffff;
`