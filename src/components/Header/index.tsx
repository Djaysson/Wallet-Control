import logoImg from "../../assets/logoControl.png";
import { Container, Content } from "./styles";

interface HeaderProps {
  onOpenNewTransactionModal: () => void;
}

export function Header({ onOpenNewTransactionModal }: HeaderProps) {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="Wallet Control" />
        <button type="button" onClick={onOpenNewTransactionModal}>
          nova transação
        </button>
      </Content>
    </Container>
  );
}
