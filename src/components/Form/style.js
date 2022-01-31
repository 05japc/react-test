import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 24px;

  text-align: center;
  z-index: 10;

  background: #ffffff;

  box-shadow: 0px 8px 16px rgba(24, 26, 54, 0.04);
  border-radius: 8px; 
  form{
    display: flex;
  flex-direction: column;
  align-items: flex-start;

  text-align: center;

  }

  /* .rfc{
      text-transform: uppercase;
    } */

    
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
    box-shadow: none;
  }
  
  
  form{
    width:100%;
    
  }
  
  form > div{
    width:100%;
  }
  
  form > div .Errors{
    width:100%;
  }
`

export const Title = styled.div`
  font-size: 18px;
  font-weight: bolder;
  line-height: 28px;

  color: #22243e;

  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 15px 0px;
  text-align: start;
  
  @media (max-width: 800px){
    margin-left: 16px;
    width:90% !important;
  }
  
`;

export const RadioContainer = styled.div`
  display: block;
  justify-content: space-between;
  font-weight: bold;
  color: gray;
  label {
    font-weight: bold;
    color: black;
    float: left;
    margin: 5px 0;
  }

  input[type="radio"] {
    background: #ffffff;
    margin: 15px 1vh;

    border: 2px solid #babbc3;
    box-sizing: border-box;
    border-radius: 10px;
    background: #fc4c02;
  }
  input:checked ~ span {
    color: black;
  }
  p{
    display: inline;
    font-size: 10px;
    padding-left: 15px;
    color: #ca3a02;
  }
`;

export const InputsContainer = styled.div`
  

  select {
    /* Auto Layout */

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 19px 35px;

    position: static;
    width: 468px;
    height: 60px;
    left: 0px;
    top: 0px;

    /* surface/50-White */

    background: #ffffff;
    /* surface/300 */

    border: 1px solid #e8e9eb;
    box-sizing: border-box;
    border-radius: 8px;

    /* Inside Auto Layout */

    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 0;
    margin: 15px 0px;

    background: url("search.svg") no-repeat scroll 10px 15px;

    @media (max-width: 800px){
    width:100%;
  }
  }

  p {
    font-size: 14px;
    line-height: 20px;
    font-weight: bold;
    color: #5e5f73;
    flex: none;
    order: 0;
    flex-grow: 1;
    float: left;
  }

  span{
    font-size: 10px;
    color: #ca3a02;
    font-weight: bold;
    margin-top: -2vh;
  }
  .Errors{
    p{
      font-size: 10px;
    color: #ca3a02;
    margin-top: -2vh;
    }
  }
`

export const InfoContainer = styled.div`
  display: flex;
  margin: 4% 0;
  font-size: 14px;
  input {
    margin-right: 10px;
  }
`

export const ButtonContainer = styled.div`
  
  button {
    width: 210px;
    margin: 0 10px;
  }
 
  
@media (max-width: 800px){
    display: none;
  }
`
export const PolicyContainer = styled.div`
  
      display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    margin-bottom: 32px;
    font-size: 14px;
    margin-top: -16px;
    margin-left: 35px !important;
    color: #22243E;
    
    @media (max-width: 800px){
    margin-left: 53px !important;
  }
  a{
    margin-left: 5px;
    color: #FC4C02;
  }
`
export const CheckboxContainer = styled.div`
  display: flex;
  margin-left: 0px;
  font-size: 14px;
  line-height: 20px;
  font-weight: bold;

  input{
    width: 15px;
    height: 15px;
  }
  
`
