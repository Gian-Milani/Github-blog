import styled from 'styled-components'
import headerBanner from '../../assets/header-banner.svg'

export const HeaderContainer = styled.header`
  background-image: url(${headerBanner});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 30% 45%;
  display: flex;

  img {
    width: 9.25rem;
    margin: 4rem auto 8.375rem;
  }
`
