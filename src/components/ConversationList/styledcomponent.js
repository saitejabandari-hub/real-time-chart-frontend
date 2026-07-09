
import styled from "styled-components";
import { IoIosSearch } from "react-icons/io";

export const ConversationListContainer = styled.div`
border: 2px solid #2E303A ;
height:100vh;
width:400px;
border-top-left-radius:20px;
display:flex;
flex-direction:column;
padding:10px 10px;
`
export const ConversationListFirstcard = styled.div`
display:flex;
flex-direction:column;
width:100%;
`

export const ConversationListSearchCard = styled.div`
display:flex;
align-items:center;
justify-content:center;
border:1px solid #2E303A;
border-radius:10px;
margin-right:5px;
margin-left:5px;
background: #2E303A;
`
export const ConversationListSerachInput = styled.input`
width:250px;
font-family:"Roboto";
font-weight:500;
font-size:18px;
background: transparent;
border-width:0px;
outline:none;
color: #ffffff;
padding:5px;
`

export const SearchIcon = styled(IoIosSearch)`
font-size:20px;
color: #ffffff;
margin-left:5px;
`

export const ConversationListCategories = styled.div`
display:flex;
align-items:center;
justify-content: space-between;
gap:10px;
padding:10px;

`

export const ConversationListCategory = styled.button`
border-width:0px;
outline:none;
cursor:pointer;
font-family:"Roboto";
font-size:14px;
font-weihgt:600;
color: #ffffff;
background: #212121;
padding:10px;
border-radius:10px;
`
export const ConversationListConverstaionBody = styled.ul`
display:flex;
flex-direction: column;
gap:10px;
list-style-type:none;
overflow-Y:scroll;
&::-webkit-scrollbar{
        width:6px;
    }

    &::-webkit-scrollbar-track{
        background:transparent;
    }

    &::-webkit-scrollbar-thumb{
        background:#4b5563;
        border-radius:10px;
    }

    &::-webkit-scrollbar-thumb:hover{
        background:#6366f1;
    }
`
