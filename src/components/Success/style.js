import styled from "styled-components";
import { Link } from 'react-router-dom';

export const MainContainer = styled.div`

  height: 461px;
  display: flex;
  background: white;
  padding-inline:  10em;
  

  p {
    font-size: 28px;
    line-height: 40px;
    font-weight: bold;
    //top, right, bottom, left
    margin: 7em 0 1% 0;
    
  }


  @media (min-width: 1400px){
    max-width: 100%;
    padding-inline: 10%;
}
@media (max-width: 800px){
 margin: 0;
 padding: 0;
  height: 248px;
  display: flex;
  flex-direction: column;
  p{
    display: block;
    position: relative;
    max-width: 175px ;
    left: 50%;
    transform: translateX(-50%);
    top:8em;
    margin: 0;
    color: #177850;
font-size: 18px;
line-height: 28px;
  }
}

@media (max-width: 142px){
   p{display: none;}
 }

`


export const Span = styled.span`
  font-weight: bold;
`

export const SpanContainer = styled.span`
//T R B L
/* margin: 30vh 0 0 0; */
/* margin-inline: 10%; */

font-size:14px;
color:#22243E;

@media (max-width: 800px){
      position: relative;
    max-width: 255px;
    top: 10em;
    margin: 0;
    padding: 0;
    padding-top: 16px;
    display: block;
    text-align: center;
    margin: 0 auto;
    font-size: 14px;
 }
 @media (max-width: 254px){
   display: none;
 }
`
export const PrimaryButton = styled.button`
/* Auto Layout */
border: none;
:hover{
    background-color: ${(props) => props.hover};
}

padding: 0px;

width: 250px;
height: 48px;
cursor:pointer;


background: ${(props) => props.background};
box-shadow: 0px 6px 12px rgba(252, 76, 2, 0.2);
border-radius: 8px;


font-family: "AvertaStandard-Regular";




font-size: 16px;
line-height: 24px;
font-weight: bold;



color: ${(props) => props.color};

`

export const ButtonContainer = styled.div`
    display: flex;
  button{
      margin-right: 3vh !important;
        height: 48px;
        margin-top: 32px;
  }
  @media (max-width: 800px){
    display: none;
    flex-direction: column;
    width:100%;
    text-align:center;
    }
`

export const ButtonContainerMovile = styled.div`
    display: none;
  button{
        height: 48px;
        margin-top: 16px;
  }
  @media (max-width: 800px){
    display: flex;
    flex-direction: column;
    width:100%;
    text-align:center;
    }
`


export const ImageContainer = styled.div`
  margin:6em 0 0 9em ;

  @media (max-width: 800px){
    position: relative;
    margin: 0;
    padding: 0;
    img{
      position: relative;
      left: 50%;
      transform: translateX(-50%);
      width: 128px;
      top:-2em;
    }
}

@media (max-width: 195px){
    display: none;
}

`

export const Footer = styled.div`

display: none;
flex-direction: row;
justify-content: space-evenly;
align-items: center;
/* padding: 16px 8px 24px; */

position: absolute;
width: 100%;
height: 80px;
bottom: 0px;
font-weight: bold;

background: #FFFFFF;
box-shadow: 0px -8px 16px rgba(24, 26, 54, 0.04);



@media (max-width: 800px){
    display: flex;
    height: 160px;
    flex-direction:column;
    
    button{
      height: 50px;
      width: 90%;
    }
}

`

export const StyledLink = styled(Link)`
      height: 40px;
      width: 100%;
      padding-left: 16.5%;
`


export const NoticeWrapper = styled.div`

width:100%;
position: fixed;

bottom: 40px;

@media (max-width: 800px){
    
    bottom: 180px;
}
`

export const NoticeBlue = styled.div`


display: flex;
flex-direction: row;
justify-content: center;
align-items: flex-start;
padding: 18px 24px;
width: 516px;

background: #E4F4F6;
border-radius: 8px;
color: #006470;
font-weight: bold;
font-size: 16px;
line-height: 24px;
    margin: 0 auto;
    

img{
    /*T R B L*/
margin: 0.5em 1em 0 0;
}

export const Notice = styled.div\`


display: flex;
flex-direction: row;
justify-content: center;
align-items: flex-start;
padding: 18px 24px;
width: 516px;

border-radius: 8px;
font-weight: bold;
font-size: 16px;
line-height: 24px;
    margin: 0 auto;
    

img{
    /*T R B L*/
margin: 0.5em 1em 0 0;
}

@media (max-width: 800px){
    
    max-width: 80%;
    
    p{
       margin-left: 0%;
        font-size: 12px;
        line-height: 18px;
    }
}

@media (max-width: 250px){
   display: none;
}

`
