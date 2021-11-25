import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  flex: 1;
  background: var(--color-black);
  height: 150px;
  align-items: flex-end;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.50);
`;

export const LogoApp = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
    h1 {
    font-size: 26px;
    color: #fff;
    font-family: "Titillium Web";
    font-weight: 700; 
  }
`;
export const Logout = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
`;

export const HeaderCenter = styled.div`
  display: flex;
  max-width: 910px;
  min-width: 350px;
  flex: 1;
  align-items: center;
  padding: 16px;
  justify-content: space-between;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  height: 100px;
  background: var(--default-red);
  flex: 1;
  justify-content: center;
`;
