import styled from 'styled-components'

export const ClubListContainer = styled.main`
  flex: 1;
  padding: 3.5rem;

  display: flex;
  flex-direction: column;

  h1 {
    font-size: 1.5rem;
    color: ${(props) => props.theme['gray-100']};
  }
`

export const ClubList = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  margin-top: 2rem;

  @media (max-width: 1268px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 868px) {
    display: grid;
    grid-template-columns: 1fr;
  }
  /* width: 100%; */
`

export const CardContainer = styled.div`
  width: 100%;
  /* min-width: 600px; */
  border-radius: 8px;
  border: solid 1px ${(props) => props.theme['gray-500']};
`

export const CardImage = styled.img`
  /* min-width: 600px; */
  /* border-radius: 8px; */
  max-width: 260px;
  max-width: 220px;
  border-top-right-radius: 8px;
  border-top-left-radius: 8px;

  @media (max-width: 1268px) {
    /* max-width: 160px;
    max-width: 120px; */
  }

`


export const Card = styled.div`
  width: 100%;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  background: ${(props) => props.theme['gray-600']};
  padding: 0.6rem;
  h4 {

    padding-bottom: 0.6rem;
    text-align: left;
    color: ${(props) => props.theme['gray-100']};
    font-size: 0.875rem;
    line-height: 1.6;
  }
  p {
    padding-bottom: 0.6rem;
    font-size: 0.775rem;
  }

  strong {
    text-align: right;
    &[data-available="true"] {
      color: ${(props) => props.theme['green-500']};
    }
    &[data-available="false"] {
      color: ${(props) => props.theme['red-500']};
    }
  }

`
