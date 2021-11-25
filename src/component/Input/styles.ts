import styled from "styled-components";

export const ContainerInput = styled.div`
  background: var(--color-light-gray);
  border-radius: 2em;
  display: flex;
  flex: 1;
  padding-left: 16px;

  input {
    display: flex;
    flex: 1;
    width: auto;
    background: transparent;
    border: 0px;
    color: var(--font-input-color);
    font-size: 16px;
    outline: none;
  }

  svg {
    padding: 8px;
    color: var(--default-red);
  }
`;

