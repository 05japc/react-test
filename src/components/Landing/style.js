import styled from "styled-components";

export const MainContainer = styled.div`

background-color: white;
display: flex;
height: 480px;
/* width: min(90%, 70.5 rem); */

padding: 2vh 10em;

button{
    margin: 4% 0 0 0;
    margin-top:32px;
    :hover{
        background-color: #ca3a02;
    }
    display: block;
}
span{
    font-size: 10px;
    /* padding-left: 10px; */
    color: #ca3a02;
    font-weight: bold;
}


@media (min-width: 1400px){
    max-width: 100%;
    padding-inline: 15%;
}

@media (max-width: 800px){
    left: 0;
    right: 0;
    position: relative;
    height: 244px;
    background: white;
    display: flex;
    flex-direction: column;
    /* align-items: flex-start; */
    padding: 24px 16px; 
    button{
        display: none;
    }
   
}
    
    
}




`

export const Title = styled.h1`



font-size: 28px;
line-height: 40px;
font-family: "AvertaStandard-Semibold";

/* white-space: pre-line; */
max-width: 600px;
color: #22243E;

/*T R B L*/
margin: 20% 0 0 0;

@media (max-width: 800px){
    font-size: 18px;
    line-height: 30px;
    margin-top:0 ;
    position: relative;
    display: block;
    left: 50%;
    transform: translateX(-50%);
}
`

export const Subtitle = styled.h2`


font-weight: 100;
font-size: 16px;
line-height: 24px;


color: #22243E;

margin: 3% 0 0 0;
margin-bottom: 32px;

@media (max-width: 800px){
    margin: 0;
    margin-top: 1em;
    color: #5E5F73;
    display: block;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
}

`

export const Input = styled.input`
    /* Auto Layout */

padding: 8px 16px;

width: 426px;
height: 60px;
/* text-transform: uppercase; */


background: #FFFFFF;

border: 1px solid #E8E9EB;
box-sizing: border-box;
border-radius: 8px;

margin: 3% 0 0 0;

background: url("infoi.svg") no-repeat scroll 370px 15px;
padding-left:30px;


@media (max-width: 800px){
    margin-top: 1em; 
    position: relative;
    display: inline-flex;
    width: 100%;
    background: url("infoi.svg") no-repeat scroll 95% 15px;
}
`

export const ImageContainer= styled.div`
margin-left: 10em;
img{
    max-height: 450px;
    max-width: 450px;
}


@media (max-width: 800px){
    display: none;
}

`


export const Footer = styled.div`

display: flex;
flex-direction: row;
justify-content: space-evenly;
align-items: center;

position: fixed;
width: 100%;
height: 96px;
bottom: 0;
left: 0;
font-weight: bold;

background: #FFFFFF;
box-shadow: 0px -8px 16px rgba(24, 26, 54, 0.04);
border-radius: 8px 8px 0px 0px;


button{
       width: 93%;
   }
   
@media (min-width: 801px){
    display: none;
}

@media (max-width: 225px){
   button{
       width: 100px;
   }
}`


export const NoticeWrapper = styled.div`

width:100%;
position: fixed;

bottom: 40px;

@media (max-width: 800px){
    
    bottom: 120px;
}
`

export const Notice = styled.div`


display: flex;
flex-direction: row;
justify-content: center;
align-items: flex-start;
padding: 18px 24px;
width: 516px;

background: #FDF6EA;
border-radius: 8px;
color: #A06000;
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

export const SuperContainer = styled.div`
/* height: 300px; */
`
