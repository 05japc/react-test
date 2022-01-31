import styled from "styled-components";
import { Link } from 'react-router-dom';

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

    margin-top: 6vh;

    @media (max-width: 800px){
      margin-top: 0.5em;
    }
`

export const BillContainer = styled.div`

    margin-bottom: 35px;

    @media (max-width: 800px){
      display: flex;
flex-direction: column;
align-items: center;
background: transparent;
width: 100%;

position: relative;
left: 0%;
    }
`

export const FormContainer = styled.div`

`

export const Footer = styled.div`

display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;

position: relative;
right: 0;
left: 0;
height: 160px;
bottom: 0px;
font-weight: bold;

background: white;
box-shadow: inset 0px 1px 0px rgba(246, 246, 247, 0.25);
    z-index: 10;

button{
      height: 49.82px;
      width: 90%;
    }

box-shadow: 0px -8px 16px rgba(24, 26, 54, 0.04);
@media (min-width: 801px){
    display: none;
}

`
export const StyledLink = styled(Link)`
      height: 40px;
      width: 100%;
      padding-left: 10%;
`
