import styled from 'styled-components'

export const ProfileContainer = styled.div`
  background-color: ${(props) => props.theme['base-profile']};
  padding: 2rem 2.5rem;
  margin-top: -5.5rem;

  display: flex;
  align-items: center;

  border-radius: 10px;

  animation: defaultTransition 1.5s normal;

  div {
    margin-right: 2rem;

    img {
      width: 9.25rem;
      border-radius: 8px;
    }
  }

  section {
    flex-grow: 1;

    header {
      display: flex;
      justify-content: space-between;

      h2 {
        font-size: 1.5rem;
        color: ${(props) => props.theme['base-title']};
      }

      a {
        text-decoration: none;
        color: ${(props) => props.theme.blue};
        font-weight: bold;
        font-size: 0.75rem;
        display: flex;

        svg {
          margin-left: 0.5rem;
        }

        &:hover {
          cursor: pointer;
          text-decoration: underline;
        }
      }
    }

    p {
      margin-top: 1.375rem;
    }

    footer {
      margin-top: 2rem;
      display: flex;
      align-items: center;
      justify-content: space-between;

      max-width: 24.56rem;

      span {
        display: flex;
        justify-content: center;
        align-items: center;

        svg {
          color: ${(props) => props.theme['base-label']};
        }

        small {
          margin-left: 0.5rem;
          color: ${(props) => props.theme['base-subtitle']};
          font-size: 1rem;
        }
      }
    }
  }
`
