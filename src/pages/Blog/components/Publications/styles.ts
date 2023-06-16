import styled from 'styled-components'

export const PublicationsContainer = styled.main`
  display: grid;
  grid-template-columns: 25rem 25rem;
  gap: 2rem;
`

export const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  height: 16.25rem;
  padding: 2rem;
  background-color: ${(props) => props.theme['base-post']};
  border-radius: 10px;
  border: 2px solid ${(props) => props.theme['base-post']};
  text-align: left;

  animation: transitionPost 1.5s normal;

  &:hover {
    cursor: pointer;
    border: 2px solid ${(props) => props.theme['base-span']};
    transition: border 400ms;
  }

  header {
    display: grid;
    grid-template-columns: 3fr 2fr;

    h3 {
      font-size: 1.25rem;
      color: ${(props) => props.theme['base-title']};
    }

    span {
      font-size: 0.875rem;
      color: ${(props) => props.theme['base-label']};
      margin-top: 0.3rem;
      text-align: right;
    }
  }

  section {
    overflow: hidden;
    p {
      color: ${(props) => props.theme['base-text']};
    }
  }

  @keyframes transitionPost {
    from {
      transform: translateY(-50px);
      opacity: 0%;
    }
    to {
      transform: translateY(0px);
      opacity: 100%;
    }
  }
`
