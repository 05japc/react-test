import text from "./text";
import {DeskHeader, Container} from "./style"
import logo from "./logo.svg"
import {Link} from "react-router-dom";

function Header() {
  return (
    <DeskHeader>
      <Container>
      <Link to="/"><img src={logo} alt="icon"></img></Link>
      <h1>{text.title}</h1>
      </Container>
    </DeskHeader>
  );
}

export default Header;
