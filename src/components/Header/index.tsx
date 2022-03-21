import logoImg from "../../assets/logo.png";
import { Container, Content } from "./styles";

export function Header() {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="Wallet Control" />
        <button type="button">nova transação</button>
      </Content>
    </Container>
  );
}
