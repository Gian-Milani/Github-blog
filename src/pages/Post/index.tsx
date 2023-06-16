import { PublicationsContext } from '../../contexts/PublicationsContext'
import { Header } from './Header/Index'
import { PostContainer } from './styles'
import { useCallback, useContext } from 'react'
import ReactMarkdown from 'react-markdown'
import { useNavigate } from 'react-router-dom'
import remarkGfm from 'remark-gfm'

export function Post() {
  const { postSelected } = useContext(PublicationsContext)

  const navigate = useNavigate()
  const redirectToBlogPage = useCallback(() => {
    if (!postSelected) {
      navigate('/')
    }
  }, [postSelected, navigate])

  return (
    <PostContainer onLoad={redirectToBlogPage}>
      <Header />
      <section>
        <p>
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
          >{`${postSelected?.body}`}</ReactMarkdown>
        </p>
      </section>
    </PostContainer>
  )
}
