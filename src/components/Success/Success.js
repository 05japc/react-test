import {
  MainContainer,
  Span,
  PrimaryButton,
  SpanContainer,
  ButtonContainer,
  ImageContainer,
  Footer,
  StyledLink,
  NoticeWrapper,
  NoticeBlue,
  ButtonContainerMovile
} from "./style";
import text from "./text";
import check from "./check.svg"
import {Link} from "react-router-dom";
import {SecondaryButton} from "../Style/Button-style";
import info from "./info.svg";



function Success(props) {
  return (
    <div>
    <MainContainer>
    
      <div>
      <div>
        <p>{text.title}</p>
        <SpanContainer>
          <span>{text.sub}</span>
          <Span>{props.correo}</Span>
        </SpanContainer>
      </div>
      <ButtonContainer>
          <Link to="/"><SecondaryButton color="#F53B02" background="#FCF1ED" hover="#f5e5df">{text.newinvoice}</SecondaryButton></Link>
          <Link to=""><PrimaryButton color="White" background="#FC4C02" hover="#ef4b06">{text.download}</PrimaryButton></Link>
      </ButtonContainer>
      </div>
      <ImageContainer>
        <img src={check} alt="check"/>
      </ImageContainer>
    </MainContainer>
    <Footer>

      <ButtonContainerMovile>

        <Link to="/">
          <PrimaryButton color="White" background="#F53B02">{text.download}</PrimaryButton>
        </Link>
        <Link to="/">
          <SecondaryButton color="#F53B02" background="#FCF1ED">{text.newinvoice}</SecondaryButton>
        </Link>
      </ButtonContainerMovile>

    </Footer>

      <NoticeWrapper>
        <NoticeBlue>
          <img src={info} alt="warning"></img>
          <p>{text.noticeFinal}</p>
        </NoticeBlue>
      </NoticeWrapper>
    </div>
  );
}

export default Success;
