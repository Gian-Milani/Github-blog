import styled from 'styled-components'

export const HeaderContainer = styled.div`
  background-color: ${(props) => props.theme['base-profile']};
  padding: 2rem 2.5rem;
  margin-top: -5.5rem;

  border-radius: 10px;

  animation: defaultTransition 1.5s normal;

  header {
    display: flex;
    justify-content: space-between;

    button {
      font-size: 0.75rem;
      font-weight: bold;
      color: ${(props) => props.theme.blue};
      background-color: transparent;
      border: none;

      display: flex;
      align-items: center;
      gap: 0.5rem;
      border-bottom: 1px solid ${(props) => props.theme['base-profile']};

      &:hover {
        cursor: pointer;
        border-bottom: 1px solid ${(props) => props.theme.blue};
      }
    }

    a {
      font-size: 0.75rem;
      text-decoration: none;
      font-weight: bold;
      color: ${(props) => props.theme.blue};

      display: flex;
      align-items: center;
      gap: 0.5rem;

      border-bottom: 1px solid ${(props) => props.theme['base-profile']};

      &:hover {
        cursor: pointer;
        border-bottom: 1px solid ${(props) => props.theme.blue};
      }
    }
  }

  main {
    margin-top: 1.25rem;

    p {
      color: ${(props) => props.theme['base-title']};
      font-size: 1.25rem;
      font-weight: bold;
    }
  }

  footer {
    margin-top: 1rem;

    display: flex;
    gap: 2rem;

    span {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
  }
`
