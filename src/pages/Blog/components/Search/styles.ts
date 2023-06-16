import styled from 'styled-components'

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    h3 {
      color: ${(props) => props.theme['base-subtitle']};
      font-size: 1.125rem;
    }

    span {
      color: ${(props) => props.theme['base-span']};
      font-size: 0.875rem;
    }
  }

  form {
    display: flex;

    input {
      flex: 1;
      padding: 0.75rem 1rem;
      border: none;
      border-radius: 6px;
      border: 1px solid ${(props) => props.theme['base-border']};

      background-color: ${(props) => props.theme['base-input']};
      color: ${(props) => props.theme['base-text']};

      &:placeholder-shown {
        color: ${(props) => props.theme['base-label']};
      }
    }
  }
`
