import { useEffect, useState } from 'react'
import { ProfileContainer } from './styles'
import axios from 'axios'
import { ArrowSquareOut, Buildings, Globe } from 'phosphor-react'
import githubLogo from '.././../../../assets/github-logo.svg'

interface UserProps {
  avatar_url: string
  name: string
  html_url: string
  bio: string
  login: string
  company: string
  location: number
}

export function Profile() {
  const [profile, setProfile] = useState({} as UserProps)

  useEffect(() => {
    axios
      .get('https://api.github.com/users/Gian-Milani')
      .then((response) => setProfile(response.data))
      .catch((error) =>
        console.error(`Erro ao buscar dados do Github: ${error}`),
      )
  }, [])

  return (
    <ProfileContainer>
      <div>
        <img src={profile.avatar_url} alt="Github profile picture" />
      </div>

      <section>
        <header>
          <h2>{profile.name}</h2>
          <a href={profile.html_url} target="_blank" rel="noreferrer">
            GITHUB
            <ArrowSquareOut size={17} weight="bold" />
          </a>
        </header>

        <p>{profile.bio}</p>

        <footer>
          <span>
            <img src={githubLogo} alt="Github logo" />
            <small>{profile.login}</small>
          </span>

          <span>
            <Buildings size={18} />
            <small>{profile.company}</small>
          </span>

          <span>
            <Globe size={18} />
            <small>{profile.location}</small>
          </span>
        </footer>
      </section>
    </ProfileContainer>
  )
}
