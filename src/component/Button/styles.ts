import styled from "styled-components";

interface IProps {
  selected: boolean;
}

export const ButtonContainer = styled.button<IProps>`
  border: 2px solid ${(props) =>
      props.selected ? "var(--color-white)" : "var(--color-red)"};
  border-radius: 2em;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 40px;
  background: ${(props) =>
    props.selected ? "var(--color-dark-gray)" : "var(--color-white)"};
  cursor: pointer;
  * {
    padding: 2px;
    font-size: 12px;
    cursor: pointer;
    color: ${(props) =>
      props.selected ? "var(--color-white)" : "var(--color-red)"};
    justify-content: center;
    align-items: center;
    background: transparent;
  }
`;
