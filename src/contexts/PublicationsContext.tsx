import axios from 'axios'
import { ReactNode, createContext, useState } from 'react'

interface PublicationsProps {
  url: string
  id: number
  html_url: string
  title: string
  user: {
    login: string
  }
  created_at: string
  comments: number
  body: string
}

interface PublicationsContextProps {
  publications: PublicationsProps[]
  postSelected: PublicationsProps | undefined
  SearchPublications: (title: string) => void
  saveSelectedPost: (postUrl: string) => void
  emptyPublications: () => void
}

interface PublicationsContextProviderProps {
  children: ReactNode
}

export const PublicationsContext = createContext({} as PublicationsContextProps)

export function PublicationsContextProvider({
  children,
}: PublicationsContextProviderProps) {
  const [publications, setPublications] = useState<PublicationsProps[]>([])
  const [postSelected, setPostSelected] = useState<PublicationsProps>()

  async function SearchPublications(title: string) {
    await axios
      .get(`https://api.github.com/search/issues?q=${title}`)
      .then((response) => setPublications(response.data.items))
      .catch((error) => console.error(`Erro ao buscar as issues: ${error}`))
  }

  async function saveSelectedPost(postUrl: string) {
    await axios
      .get(postUrl)
      .then((response) => setPostSelected(response.data))
      .catch((error) => console.error(`Erro ao buscar as issues: ${error}`))
  }

  function emptyPublications() {
    setPublications([])
  }

  return (
    <PublicationsContext.Provider
      value={{
        publications,
        SearchPublications,
        postSelected,
        saveSelectedPost,
        emptyPublications,
      }}
    >
      {children}
    </PublicationsContext.Provider>
  )
}
