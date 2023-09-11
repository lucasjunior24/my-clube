import styled from "styled-components";

export const MenuItemContainer = styled.div<{ depth: number }>`
  display: flex;
  flex-direction: row;
  font-size: 18px;
  padding: 20px 10px 20px 20px;
  align-items: center;
  justify-content: space-between;
  color: ${(props) => props.theme.white};
  & svg {
    height: 22px;
    margin-right: 10px;
  }

  &:hover {
    background-color: ${(props) => props.theme["gray-500"]};
    opacity: 0.8;
    cursor: pointer;
    color: ${(props) => props.theme.white};
  }

  .menu-item {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: ${({ depth }) => `${depth}rem`};
  }

  &.selected {
    background-color: ${(props) => props.theme["green-500"]};
    color: ${(props) => props.theme.colors.textLight};
  }
`;
