import { useContext } from 'react'
import { PostContainer, PublicationsContainer } from './styles'
import { PublicationsContext } from '../../../../contexts/PublicationsContext'
import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { useNavigate } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'

export function Publications() {
  const { publications, saveSelectedPost } = useContext(PublicationsContext)

  const navigate = useNavigate()
  const redirectToPostPage = () => navigate('/post')

  function handleSaveSelectedPost(postUrl: string) {
    saveSelectedPost(postUrl)

    setTimeout(() => {
      redirectToPostPage()
    }, 1000)
  }

  return (
    <PublicationsContainer>
      {publications.map((publication) => {
        return (
          <PostContainer
            key={publication.id}
            onClick={() => handleSaveSelectedPost(publication.url)}
          >
            <header>
              <h3>{publication.title}</h3>
              <span>
                {formatDistanceToNow(new Date(publication.created_at), {
                  addSuffix: true,
                  locale: ptBR,
                })}
              </span>
            </header>

            <section>
              <p>
                <ReactMarkdown>
                  {`${publication.body === null ? '' : `${publication.body}`}`}
                </ReactMarkdown>
              </p>
            </section>
          </PostContainer>
        )
      })}
    </PublicationsContainer>
  )
}
