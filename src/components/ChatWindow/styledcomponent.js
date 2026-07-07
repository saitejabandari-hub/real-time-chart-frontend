
import styled from "styled-components";


export const ChatWindowContainer = styled.div`
width:100%;
height:100vh;
border: 2px solid #2E303A ;
border-left-width:0px;
display:flex;
flex-direction:column;
`
export const ChatWindowTextCard = styled.div`
height:100%;
background: #1F2028;
padding:0px 10px;
`
export const ChatWindowTextarea = styled.div`
height:580px;
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