import { HeaderContainer } from './styles'
import { ArrowSquareOut, CaretCircleLeft, Calendar, Chat } from 'phosphor-react'
import githubLogo from '../../../assets/github-logo.svg'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { PublicationsContext } from '../../../contexts/PublicationsContext'
import { formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

export function Header() {
  const { postSelected, emptyPublications } = useContext(PublicationsContext)

  const navigate = useNavigate()
  const returnToBlogPage = () => {
    navigate('/')
    emptyPublications()
  }

  return (
    <HeaderContainer>
      <header>
        <button onClick={returnToBlogPage}>
          <CaretCircleLeft size={18} weight="bold" />
          VOLTAR
        </button>

        <a href={postSelected?.html_url} target="_blank" rel="noreferrer">
          VER NO GITHUB
          <ArrowSquareOut size={18} weight="bold" />
        </a>
      </header>

      <main>
        <p>{postSelected?.title}</p>
      </main>

      <footer>
        <span>
          <img src={githubLogo} alt="Github logo" />
          <small>{postSelected?.user.login}</small>
        </span>

        <span>
          <Calendar size={18} />
          <small>
            {postSelected?.created_at &&
              formatDistanceToNow(new Date(postSelected?.created_at), {
                addSuffix: true,
                locale: ptBR,
              })}
          </small>
        </span>

        <span>
          <Chat size={18} weight="fill" />
          <small>{`${postSelected?.comments} comentários`}</small>
        </span>
      </footer>
    </HeaderContainer>
  )
}
