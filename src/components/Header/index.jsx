import { Container, Profile, Logout } from "./styles";
import { RiShutDownLine } from "react-icons/ri";

export function Header() {
  return (
    <Container>
      <Profile to="/profile">
        <img
          src="https://github.com/rdgdelfino.png"
          alt="Foto de perfil do usuário"
        />
        <div>
          <span>Bem-vindo,</span>
          <strong>Rodrigo Delfino</strong>
        </div>
      </Profile>
      <Logout>
        <RiShutDownLine />
      </Logout>
    </Container>
  );
}
