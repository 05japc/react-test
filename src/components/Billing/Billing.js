import Bill from "../Bill/Bill";
import Form from "../Form/Form";
import text from "../Form/text";
import { BillContainer, MainContainer, Footer, StyledLink } from "./style";
import {PrimaryButton, SecondaryButton, SsecondaryButton} from "../Style/Button-style";
import {Link, useNavigate} from "react-router-dom";

function Billing(props) {
 
  return (
    <div>
    <MainContainer>
        <BillContainer>
        <Bill numeroRecibo={props.numeroRecibo}/>
        </BillContainer>
        <Form cambiaCorreo={correo =>props.cambiaCorreo(correo)}/>
    </MainContainer>
    <Footer>
      <PrimaryButton color="White" background="#FC4C02" type="submit" form="fiscales">{text.generateInvoice}</PrimaryButton>
      <StyledLink to="/preview"><SecondaryButton color="#FC4C02" background="#FCF1ED">{text.preview}</SecondaryButton></StyledLink>
    </Footer>
    </div>
  );
}

export default Billing;
