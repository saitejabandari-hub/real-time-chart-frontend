import styled from "styled-components";
import { IoIosSearch } from "react-icons/io";
import { IoCallOutline } from "react-icons/io5";
import { GoDeviceCameraVideo } from "react-icons/go";
import { HiDotsVertical } from "react-icons/hi";

export const ChatheaderContainer = styled.nav`
display:flex;
align-items:center;
justify-content:space-between;
padding:10px;
border: 2px solid #2E303A ;
border-left-width:0px;
border-top-width:0px;
border-right-width:0px;
`
export const ChatHeaderUserDetails = styled.div`
display:flex;
align-items:center;
gap:10px;
`
export const ChatHeaderProfile = styled.img`
height:50px;
width:50px;
border-radius:50px;
`

export const ChatHeaderuserCard = styled.div`
display:flex;
flex-direction:column;
gap:15px;
`

export const ChatHeaderUserName = styled.h2`
color: #ffffff;
font-family:"Roboto";
font-size:18px;
font-weight:600;
`

export const ChatHeaderuserstatus = styled.p`
color: #22c55e;
font-family:"Roboto";
font-size:16px;
`
export const ChatHeaderMoreoptions = styled.div`
display:flex;
align-items:center;
gap:15px;
`

export const ChatHeaderSearchIcon = styled(IoIosSearch)`
font-size:25px;
color: #ffffff;
cursor:pointer;
`
export const ChatHeaderCallIcon = styled(IoCallOutline)`
font-size:25px;
color: #ffffff;
cursor:pointer;
`
export const ChatHeaderCameraIcon = styled(GoDeviceCameraVideo)`
font-size:25px;
color: #ffffff;
cursor:pointer;
`
export const ChatHeaderDotsIcon = styled(HiDotsVertical)`
font-size:25px;
color: #ffffff;
cursor:pointer;
`
