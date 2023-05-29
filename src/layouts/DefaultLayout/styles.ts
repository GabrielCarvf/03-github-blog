import styled from 'styled-components'
import backgroundImgHeader from '../../assets/header_background.svg'

export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const Header = styled.header`
  display: flex;
  justify-content: center;

  padding: 4rem;
  background-image: url(${backgroundImgHeader});
`
