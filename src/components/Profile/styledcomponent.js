import styled from 'styled-components'
import { FiEdit } from "react-icons/fi";
import { IoCallOutline } from "react-icons/io5";
import { AiOutlineCheck } from "react-icons/ai";

export const ProfileContainer = styled.div`
display:flex;
flex-direction:column;
align-items:center;
width:100%;
`
export const ProfileImageCard = styled.img`
height:150px;
width:150px;
border-radius: 50%;
`
export const ProfileDetails = styled.div`
display:flex;
flex-direction: column;
margin-top:40px;
width:100%;
`
export const ProfileLabel = styled.label`
font-family:"Roboto";
font-size: 15px;
color: #ffffff;
margin-bottom:15px;
`

export const ProfileInput = styled.input`
padding:10px;
font-family:"Roboto";
width: 100%;
background: transparent;
color: #ffffff;
font-size:15px;
border-width: 0px;
outline: none;
&:focus{
    border-bottom-width: 2px;
    border-color: blue;
    
}
`
export const ProfileEdit = styled(FiEdit)`
font-size:20px;
color: #ffffff;
cursor:pointer;
`
export const ProfileCallIcon = styled(IoCallOutline)`
font-size:20px;
color: #ffffff;
cursor:pointer;
`
export const ProfileCheck = styled(AiOutlineCheck)`
font-size:20px;
color: #ffffff;
cursor:pointer;
`
export const ProfileName = styled.h2`
font-family:"Roboto";
font-size: 15px;
color: #7d7979;
margin-left:15px;
`

export const ProfileEditCard = styled.div`
display:flex;
align-items:center;
justify-content: space-between;
width:100%;
`
export const ProfilePhoneCard = styled.div`
display:flex;
align-items: center;
gap:10px;
`