import text from "./text";
import {PrimaryButton, SecondaryButton} from "../Style/Button-style";
import {
  Footer,
  ButtonContainer,
  PreviewContainer,
  MainContainer,
  FooterContainer,
  InfoFooter,
  FooterWrapper, ButtonContainerMovile
} from "./style";
import {Link, useNavigate} from "react-router-dom";

function Preview() {
  let navigate = useNavigate();

  return (
    <MainContainer>
    <PreviewContainer> 
      <p>{text.title}</p>
      <img src="invoice.png" alt="invoice-preview"></img>
    </PreviewContainer>
    <Footer>
      <FooterWrapper>
        <InfoFooter>{text.check}</InfoFooter>
        <ButtonContainer>

          <Link to="/billing">
            <SecondaryButton color="#F53B02" background="#FCF1ED" hover="#f5e5df">{text.edit}</SecondaryButton></Link>


          <Link to="/success">
          <PrimaryButton color="White" background="#FC4C02" hover="#ef4b06">{text.confirm}</PrimaryButton></Link>


        </ButtonContainer>
        <ButtonContainerMovile>
          <Link to="/success">
            <PrimaryButton color="White" background="#FC4C02" hover="#ef4b06">{text.confirm}</PrimaryButton></Link>

          <Link to="/billing">
            <SecondaryButton color="#F53B02" background="#FCF1ED" hover="#f5e5df">{text.edit}</SecondaryButton></Link>
        </ButtonContainerMovile>
      </FooterWrapper>
    </Footer>
    </MainContainer>
  );
}

export default Preview;
