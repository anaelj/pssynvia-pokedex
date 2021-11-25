import styled from "styled-components";

export const SearchBar = styled.div`
  display: flex;
  flex: 1;
  max-width: 910px;
  width: 100%;
  margin-bottom: 30px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (min-width: 700px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  flex: 2;
  max-width: 400px;
`;

export const MainContainer = styled.div`
  margin: 0 auto;
  display: flex;
  flex: 1;
  width: auto;
  margin-top: 30px;
  padding: 8px;
  align-items: center;
  flex-direction: column;
`;

export const MainContent = styled.div`
  display: flex;
  flex: 2;
`;

interface IListContainerProps {
  like?: boolean;
}

export const ListContainerItem = styled.li<IListContainerProps>`
  margin: 5px;
  padding: 5px;
  width: 135px;
  height: 230px;
  display: flex;
  flex-direction: column;
  cursor: pointer;

  img {
    border-radius: 0.5em;
    background: var(--color-light-gray);
  }
  svg {
    display: block;
    position: relative;
    color: var(--color-red);

    margin-bottom: -30px;
    margin-left: 90px;
    padding: 7px;
  }
  .number {
    color: var(--color-dark-gray);
    padding: 5px;
  }
  .name {
    color: var(--color-black);
    font-size: 20px;
    font-weight: 700;
    padding: 5px;
  }
  .types {
    display: flex;
    padding: 5px;
    gap: 8px;
  }
`;

export const ListContainer = styled.div`
  display: flex;
  flex: 2;
  height: 800px;
  ul {
    display: flex;
    flex-wrap: wrap;
    max-width: 800px;
    align-items: flex-start;
    justify-content: flex-start;
    width: 800px;
    @media (max-width: 860px) {
      width: auto;
    }

    overflow-y: auto;

    &::-webkit-scrollbar {
      width: 12px;
    }

    &::-webkit-scrollbar-track {
      background: var(--color-light-gray);
    }

    &::-webkit-scrollbar-thumb {
      background-color: var(--default-red);
      border-radius: 20px;
      height: 60px;
    }
  }
`;

export const FilterContainer = styled.div`
  display: flex;
  flex: 1;
  height: 350px;
  max-width: 115px;
  gap: 6px;
  flex-wrap: wrap;
  margin-top: 10px;
`;

export const OrderingContainer = styled.div`
  display: flex;
  flex: 1;
  max-width: 278px;
  justify-content: flex-end;
  align-items: center;
  margin-top: 8px;
  @media (min-width: 700px) {
    margin-top: 0px;
  }
`;
