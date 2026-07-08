import styled from 'styled-components'
import { MdOutlineChat } from "react-icons/md";
import { IoIosLogOut } from "react-icons/io";
import { IoMdContacts } from "react-icons/io";
import { CiStar } from "react-icons/ci";
import { IoNotificationsOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";

export const SidebarContainer = styled.div`
background: #16171D;
color: #ffffff;
height:100%;
width: 70px;
display:flex;
flex-direction:column;
justify-content:space-between;
align-items:center;
margin-right:10px;
`
export const Sidebaruppercard = styled.div`
display:flex;
flex-direction:column;
align-items:center;
`

export const SidebarProfileContainer = styled.div`
margin-top:20px;
margin-bottom:20px;
position:relative;
`
export const SidebarProfile = styled.img`
height:50px;
width:50px;
border-radius:25%;
cursor:pointer;
`
export const SidebarIcons = styled.div`
display:flex;
flex-direction:column;
align-items:center;
gap:15px;
`

export const ChatIcon = styled(MdOutlineChat)`
font-size:30px;
cursor:pointer;
`

export const LogOutIcon = styled(IoIosLogOut)`
font-size:30px;
cursor:pointer;
`
export const ContactIcon = styled(IoMdContacts)`
font-size:30px;
cursor:pointer;
`
export const StarIcon = styled(CiStar)`
font-size:30px;
cursor:pointer;
`
export const NotificationIcon = styled(IoNotificationsOutline)`
font-size:30px;
cursor:pointer;
`
export const SettingIcon = styled(IoSettingsOutline)`
font-size:30px;
cursor:pointer;
`

export const SidebarLogOut = styled.div`
margin-top:20px;
margin-bottom:20px;
`
export const Dropdown = styled.div`
background: #16171D;
width:120px;
height:120px;
border:1px solid #a5a2a2;
border-radius:10px;
display:flex;
flex-direction:column;
align-items:center;
justify-content: center;
position:absolute;
left:70px;
top:10px;
z-index:100;
gap:15px;

`
export const SidebarDropdownbutton = styled.button`
color: #ffffff;
font-family:"Roboto";
font-weight:500;
font-size:18px;
`