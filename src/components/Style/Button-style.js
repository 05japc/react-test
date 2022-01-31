import styled from "styled-components";

// eslint-disable-next-line no-unused-vars
export const PrimaryButton = styled.button`
/* Auto Layout */
border: none;
:hover{
    background-color: ${(props) => props.hover};
}

padding: 0px;

width: 222px;
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


export const SecondaryButton = styled.button`
/* Auto Layout */
border: none;
:hover{
    background-color: ${(props) => props.hover};
}

padding: 0px;

width: 222px;
height: 48px;
cursor:pointer;


background: ${(props) => props.background};
border-radius: 8px;


font-family: "AvertaStandard-Regular";




font-size: 16px;
line-height: 24px;
font-weight: bold;



color: ${(props) => props.color};

`
