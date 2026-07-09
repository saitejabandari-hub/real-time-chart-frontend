
import styled from 'styled-components'
import { BsMoon } from "react-icons/bs";
import { MdArrowForwardIos } from "react-icons/md";
import { IoIosNotificationsOutline } from "react-icons/io"
import { FcLock } from "react-icons/fc";
import { MdOutlineLanguage } from "react-icons/md";
import { IoHelp} from "react-icons/io5";
import { FcAbout } from "react-icons/fc";

export const SettingContainer = styled.div`
display:flex;
flex-direction:column;
align-items:center;

`
export const SettingNamecard = styled.h1`
font-family:"Roboto";
font-size:38px;
font-weight:500;
color: #ffffff;
margin-bottom:40px;
`

export const SettingCard = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
padding:10px;
border-radius:10px;
width:90%;
cursor:pointer;
transtion: 0.2s ease;
&:hover{
background:#2D2F3A;

}
`
export const SettingAdjustCard = styled.div`
display:flex;
align-items:center;
gap:10px;

`
export const SettingMoonIcon = styled(BsMoon)`
font-size:20px;
color: yellow;
`
export const SettingHeading = styled.h2`
font-family:"Roboto";
font-size:18px;
font-weight:500;
color: #ffffff;
`
export const SettingArrowIcon = styled(MdArrowForwardIos)`
font-size:20px;
color: #ffffff;
margin-left:15px;
`
export const SettingNotificationIcon = styled(IoIosNotificationsOutline)`
font-size:20px;
color: #bfc22a;
`
export const SettingPrivacyIcon = styled(FcLock)`
font-size:20px;
color: #ffffff;
`
export const SettingLanguageIcon = styled(MdOutlineLanguage)`
font-size:20px;
color: #5662e2;
`
export const SettingHelpIcon = styled(IoHelp)`
font-size:20px;
color: #c83c3c;
`
export const SettingAboutIcon = styled(FcAbout)`
font-size:20px;
color: #ffffff;
`