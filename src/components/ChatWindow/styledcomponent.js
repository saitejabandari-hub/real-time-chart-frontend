
import styled from "styled-components";


export const ChatWindowContainer = styled.div`
width:100%;
height:100%;
border: 2px solid #2E303A ;
border-left-width:0px;
display:flex;
flex-direction:column;
`
export const ChatWindowTextCard = styled.div`
display:flex;
flex-direction:column;
flex:1;
background: #1F2028;
padding:0px 10px;
min-height:0;
`
export const ChatWindowTextarea = styled.div`
flex:1;
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