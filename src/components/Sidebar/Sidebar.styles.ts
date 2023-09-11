import styled from "styled-components";

type SidebarContainerProps = {
  isOpened: boolean;
};
export const SidebarContainer = styled.aside<SidebarContainerProps>`
  background: ${(props) => props.theme["gray-700"]};
  width: ${(props) => (props.isOpened ? '24rem' : "0rem")};
  transition: width 0.5s;
  overflow: hidden;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    width: ${(props) => (props.isOpened ? '100vw' : "0rem")};
    /* background: ${(props) => props.theme.colors.secondary}; */
  }
`;
