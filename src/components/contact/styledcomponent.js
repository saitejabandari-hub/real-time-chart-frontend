import styled from "styled-components";
import { IoIosSearch } from "react-icons/io";

export const ContactContainer = styled.div`
display:flex;
flex-direction:column;
align-items:center;
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
`
export const ContactSearchIcon=styled(IoIosSearch)`
font-size:20px;
color: #ffffff;
`
export const ContactInput = styled.input`
padding:10px;
width:250px;
font-family:"Roboto";
font-size:18px;
color: #ffffff;
background: transparent;
`
