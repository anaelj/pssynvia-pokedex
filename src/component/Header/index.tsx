import React from "react";

import { Container, Content, HeaderCenter, LogoApp, Logout } from "./styles";
import { FiLogOut } from "react-icons/fi";

export const Header = () => {
  return (
    <Container>
      <Content>
        <HeaderCenter>
          <LogoApp>
            <img src="assets/pokeball.svg" alt="Logo" />
            <h1>Pokédex</h1>
          </LogoApp>
          <Logout>
            <img src="assets/synvia-A.svg" alt="logo-synvia" />
            <FiLogOut color="white" size={24} />
          </Logout>
        </HeaderCenter>
      </Content>
    </Container>
  );
};
