import styled from "styled-components";

export const ContainerSelect = styled.div`
  border: 2px solid var(--default-red);
  border-radius: 2em;
  padding: 0px;
  padding-left: 16px;
  padding-right: 16px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  font-size: 16px;

  margin-left: 16px;
  height: 40px;
  flex: 1;
  width: 150px;

  select {
    display: flex;
    flex: 1;
    background: transparent;
    border: 0px;
    color: var(--color-red);
    margin: 0px;
    padding: 0px;
    outline: none;
    height: 26px;
  }

  `;
