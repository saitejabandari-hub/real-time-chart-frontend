
import styled from 'styled-components'
import { BsEmojiSmile } from "react-icons/bs";
import { GoPaperclip } from "react-icons/go";
import { RiSendInsFill } from "react-icons/ri";

export const ChatInputCard = styled.div`
display:flex;
align-items:center;
padding:10px;
border-radius:15px;
height:70px;
background: #16171D;

`
export const ChatInputoptionCard = styled.div`
display:flex;
align-items:center;
gap:10px;
width: 100%;
`

export const ChatInputEmojiIcon = styled(BsEmojiSmile)`
font-size:20px;
color: #ffffff;
cursor:pointer;
`

export const ChatInputPaperClipIcon = styled(GoPaperclip)`
font-size:20px;
color: #ffffff;
cursor:pointer;
`
export const ChatInputMessageInput = styled.input`
width:100%;
padding:10px;
color: #ffffff;
font-family:"Roboto";
font-weight:500;
border-width:0px;
background: transparent;
outline:none;
`

export const ChatInputSendIcon = styled(RiSendInsFill)`
font-size:35px;
color: #ffffff;
cursor:pointer;
background-color: #1710c9;
padding:5px;
width:50px;
border-radius:10px;
`