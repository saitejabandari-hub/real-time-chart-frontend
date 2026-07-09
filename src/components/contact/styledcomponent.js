import styled from "styled-components";
import { IoIosSearch } from "react-icons/io";
import { CiStar } from "react-icons/ci";

export const ContactContainer = styled.div`
display:flex;
flex-direction:column;
`
export const ContactHeading = styled.h1`
font-family:"Roboto";
font-size:30px;
font-weight:600;
color: #ffffff;
`
export const ContactInputCard = styled.div`
display:flex;
align-items:center;
width:100%;
background: #2E303A;
border-radius:10px;
margin-top:15px;
`
export const ContactSearchIcon=styled(IoIosSearch)`
font-size:20px;
color: #ffffff;
margin-left:5px;
`
export const ContactInput = styled.input`
padding:10px;
width:250px;
font-family:"Roboto";
font-size:18px;
color: #ffffff;
background: transparent;
border-width:0px;
outline:none;

`

export const ContactFavoriteCard = styled.div`
display:flex;
align-items:center;
width:100%;
justify-content:flex-start;
margin-top:10px;
padding:10px;
border: 1px solid #57585d;
border-top-width:0px;
border-right-width:0px;
border-left-width:0px;
`
export const ContactStar = styled(CiStar)`
font-size:20px;
color: yellow;
margin-right: 10px;
`
export const ContactFavoritHeading = styled.h1`
color: #ffffff;
font-size: 20px;
font-family:"Roboto";
font-weight:600;
`
export const ContactlistContainer = styled.div`
display:flex;
flex-direction:column;
width:100%;
height: 630px;
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

export const ContactAllContactCard = styled.div`
display:flex;
flex-direction:column;
gap:5px;
padding:5px;
width: 100%;
border-radius: 10px;
margin-top:5px;
&:hover{
background:#2D2F3A;
transition:0.2s;
cursor:pointer;
border-radius:12px;
}
`
// background:#373B4A;

export const ContactAllContact = styled.div`
display:flex;
align-items:center;
gap:10px;
`

export const ContactImage = styled.img`
height: 30px;
width:30px;
border-radius: 50%;
`
export const ContactName = styled.h1`
font-family:"Roboto";
font-size:18px;
font-weight: 500;
color: #ded9d9;
`
export const ContactStatus = styled.p`
font-family:"Roboto";
font-size:12px;
font-weight: 500;
color: ${props => props.isonline ? "#51c60e" : "#9CA3AF"} ;
align-self: flex-end; 
`