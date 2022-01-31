import styled from "styled-components";


export const Footer = styled.div`

display: flex;
flex-direction: row;
justify-content: space-evenly;
align-items: center;
/* padding: 16px 8px 24px; */

position: fixed;
width: 100%;
height: 80px;
bottom: 0px;
font-weight: bold;

background: #FFFFFF;
box-shadow: 0px -8px 16px rgba(24, 26, 54, 0.04);



@media (max-width: 800px){
    height: 190px;
    flex-direction:column;
    
    button{
      height: 50px;
      width: 90%;
    }
}
`

export const FooterWrapper = styled.div`
      width: 80%;
    margin: 0 auto;
    
    > div{
          display: inline-block;
            width: 48%;
      }
    
    @media (max-width: 800px){
      width: 100%;
      
      > div{
          display: flex;
            width: initial;
      }
      
    }
`

export const ButtonContainer = styled.div`
  button{
      margin-left: 3vh;
      height: 48px;
      margin: 0.5em;
  }
  
      white-space: nowrap;
  
  @media (max-width: 800px){
    display:none !important;
    white-space: initial;
    display: flex;
    flex-direction: column;
    width:100%;
    text-align:center;
   }
`

export const ButtonContainerMovile = styled.div`; 
  white-space: nowrap;
  display: none !important;
  
  button{
      margin-left: 3vh;
      height: 48px;
      margin: 0.5em;
  }
  
  @media (max-width: 800px){
    display:flex !important;
    white-space: initial;
    display: flex;
    flex-direction: column;
    width:100%;
    text-align:center;
  }
`

export const InfoFooter = styled.div`
      color: #22243E;
    text-align: start;
    width: 90%;
    display: flex;
    padding-left: 16px;
        margin-bottom: 8px;
`

export const PreviewContainer = styled.div`

width: 696px;
left: 272px;
top: 84px;
padding:16px;

font-weight: bold; 

display: block;
align-content: center;
//top, right, bottom, left

p{
    padding: 3vh 0 0 3vh;
}

background: white;

box-shadow: 0px 8px 16px rgba(24, 26, 54, 0.04);
border-radius: 8px;

margin: 3vh auto;

    margin-bottom: 120px;


img{
    margin-top: 16px;
    width: 100%;
}

@media (max-width: 800px){
    width: auto;
    height: 338px;
    p{
        display: none;
    }
    img{
        display:block;
    margin:auto;
    margin-top: 1vh;
    max-width: 100%;
    max-height: 95%;
}
    }
`


export const MainContainer = styled.div`
`
