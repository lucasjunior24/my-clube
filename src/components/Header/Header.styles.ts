import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  background: ${(props) => props.theme["gray-700"]};
  height: 70px;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.white};
`;

export const IconContainer = styled.div`
  padding: 10px;

  & svg {
    height: 30px;
  }

  &:hover {
    cursor: pointer;
  }
`;

export const TitleContainer = styled.div`
  margin: auto;
`;
