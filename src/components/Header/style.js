import styled from "styled-components";

export const DeskHeader = styled.div`
  left: 0;
  right: 0;
  position: relative;
  background-color: white;
  width: 100%;
  height: 64px;

  box-shadow: inset 0px -1px 0px #f6f6f7;

  @media (max-width: 800px) {
    background: white;
  }
`;

export const Container = styled.div`
  left: 0;
  right: 0;
  position: absolute;
  height: 64px;
  /* overflow:hide; */

  img {
    position: relative;
    top: 50%;
    transform: translateY(-50%);
  }

  h1 {
    display: none;
  }

  img {
    position: relative;
    left: 10em;
  }
  @media (max-width: 800px) {
    img {
      display: inline;
      position: relative;
      left: 2em;
    }
    h1 {
      display: inline-flex;
      font-size: 16px;
      position: relative;
      left: 40%;
      transform: translateX(-40%);
    }
  }
  @media (max-width: 285px) {
    h1 {
      display: none;
    }
  }
  @media (max-width: 75px) {
    img {
      display: none;
    }
  }
`;
