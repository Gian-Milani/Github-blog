import styled from 'styled-components'

export const PostContainer = styled.div`
  max-width: 54rem;
  width: 100%;
  margin: auto;
  margin-bottom: 5rem;
  padding: 0 1rem;

  display: flex;
  flex-direction: column;

  animation: defaultTransition 1.5s normal;

  section {
    padding: 2.5rem 2rem;
    text-align: justify;

    img {
      max-width: 48rem;
    }
  }
`
