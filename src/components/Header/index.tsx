import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";
import imgLogo from "../../assets/logo.svg";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={imgLogo} alt="" />
        <NewTransactionButton>Nova Transação</NewTransactionButton>
      </HeaderContent>
    </HeaderContainer>
  );
}
