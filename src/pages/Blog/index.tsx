import { Profile } from './components/Profile'
import { Publications } from './components/Publications'
import { Search } from './components/Search'
import { BlogContainer } from './styles'

export function Blog() {
  return (
    <BlogContainer>
      <Profile />
      <Search />
      <Publications />
    </BlogContainer>
  )
}
