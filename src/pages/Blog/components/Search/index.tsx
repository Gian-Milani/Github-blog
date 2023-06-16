import { useState, useContext, FormEvent } from 'react'
import { SearchContainer } from './styles'
import { PublicationsContext } from '../../../../contexts/PublicationsContext'

export function Search() {
  const [searchText, setSearchText] = useState('')

  const { SearchPublications, publications } = useContext(PublicationsContext)

  function handleSearchPublications(event: FormEvent) {
    event.preventDefault()
    if (!searchText) {
      return false
    }

    console.log(searchText)
    SearchPublications(searchText)
  }

  return (
    <SearchContainer>
      <header>
        <h3>Publicações</h3>
        <span>{publications.length} publicações</span>
      </header>

      <form onSubmit={handleSearchPublications}>
        <input
          type="text"
          placeholder="Buscar conteúdo"
          onChange={(e) => {
            setSearchText(e.target.value)
          }}
          value={searchText}
          required
        />
      </form>
    </SearchContainer>
  )
}
