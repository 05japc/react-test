import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  

  text-align: center;
  padding: 16px 24px 16px 24px;
  /* z-index: 10; */

  background: #ffffff;

  box-shadow: 0px 8px 16px rgba(24, 26, 54, 0.04);
  border-radius: 8px; 
  ul {
    list-style: none;
  }

  #expand, #collapse{
    position: absolute;
    top: 40px;
    right: 24px;
  }
  
  .icon-billl-op{
        margin: 15px;
        margin-left: 0px;
  }
  
  

  
@media (max-width: 800px){
  position: relative;
    left: 0;
    right: 0;
    width: 100%;
    align-items: center;
    background: white;
    display: flex;
    margin: 0;
    padding: 0;
    border-radius: 0px;

    #expand, #collapse{
        position: absolute;
        top: 33px;
        left: 93%;
        z-index: 1;
  }
  
  
  .billl-ttitle{
    font-size: 14px;
    line-height: 18px;
        margin-top: 15px;
  }
  
  .billl-tsubtitle{
    font-size: 12px;
    line-height: 20px;
  }
  
  .bill-container-card{
    width:100%;
  }
  
  
  .icon-billl-op{
        margin: 24px 15px 24px 15px;
  }
}
`;
export const TicketLabel = styled.div`
  font-size: 12px;
  line-height: 18px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #8a8b99;
  font-weight: bold;
  margin-left: 20px;
`;

export const Bill = styled.div``;

export const Span = styled.span`
  color: ${(props) => props.color};
  font-weight: bold;
  display: flex;
  align-content: center;
  margin-top: 5px;
  
  
`;

export const TotalTag = styled.div`
  float: right;
  align-content: flex-end;
  font-weight: bold;

  margin-top: 20px;
    margin-left: 67px;
    margin-right: 18px;
    
    
    
    
    @media (max-width: 800px){
            float: right;
        -webkit-align-content: flex-end;
        -ms-flex-line-pack: end;
        -webkit-align-content: flex-end;
        -ms-flex-line-pack: end;
        align-content: flex-end;
        font-weight: bold;
        margin-top: 28px;
        margin-right: 20px;
        white-space: nowrap;
        text-align: right;
        margin-left: 40px;
        font-size: 12px;
    }
    
    
        
}
    
    
    
    
`;

export const Collapsed = styled.div`
  display: flex;
  align-content: space-between;
  justify-content: space-between;

  img {
    margin: 15px;
  }
`;

export const Lista = styled.div``;

export const Titles = styled.div`
  color: #5e5f73;
  font-weight: bold;

  font-size: 10px;
  line-height: 16px;

  display: flex;
  justify-content: space-between;
  padding: 12px 0;

  span{
    padding: 0 5px;
  }
`;

export const Li = styled.div`
display: flex;
justify-content: space-between;
font-weight: bolder;
    padding-top: 8px;
    padding-bottom: 8px;
    font-size: 14px;
/* margin-left: -37px; */
`

export const BillFooter = styled.div`
display: flex;
justify-content: space-between;
font-weight: bolder;
margin-top: 7%;

`
export const LabelandIcon = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
font-weight: bolder;
margin-left: -15em;

img{
    width: auto;
    height: 30px;
    margin-right: 12%;
}
p{
    color: gray;
    font-size: 12px;
line-height: 18px;
display: block;
margin-left: -3em;
}
span{
    font-size: 14px;
line-height: 20px;
}


@media (max-width: 800px){
    width: 70%;
    margin-left: 0px;
    text-align: start;
    
    p{
        margin-left: 0px;  
    }
}

`
export const AmountandDescription = styled.div`
display: flex;
justify-content: space-between;
font-weight: bolder;
font-size:10px;
`

export const X = styled.div`
display: flex;
justify-content: space-between;
font-weight: bolder;
img{
    width: auto;
    height: 30px;
    margin-right: 12%;
    margin-bottom: 15%;
}
span{
    margin-top: 10%;
    margin-left: 4px;
}
`


export const Cantidad = styled.div`
    font-size: 12px;
    border-radius: 100%;
    height: 20px;
    width: 20px;
    background: #D1D1D7;
    color: white;
    line-height: 23px;
    margin-top: 3px;
`

export const spanArrow = styled.div`
display: flex;
justify-content: space-between;
font-weight: bolder;
img{
    width: auto;
    height: 30px;
    margin-right: 12%;
    margin-bottom: 15%;
}
span{
    margin-top: 10%;
}
`
