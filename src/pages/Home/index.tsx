import { FormContainer, HomeContainer, PostsContainer } from './styles'
import { UserProfile } from './components/UserProfile'
import { PostCard } from './components/PostCard'
import { ChangeEvent, useContext } from 'react'
import { BlogContext } from '../../contexts/blogContext'

export function Home() {
  const { userPosts, searchTerm, setSearchTerm } = useContext(BlogContext)

  function handleSearchTermChange(event: ChangeEvent<HTMLInputElement>) {
    setSearchTerm(event.target.value)
  }

  return (
    <HomeContainer>
      <UserProfile />

      <FormContainer>
        <div>
          <label>Publicações</label>
          <span>6 publicações</span>
        </div>
        <input
          type="text"
          placeholder="Buscar conteúdo"
          value={searchTerm}
          onChange={handleSearchTermChange}
        />
      </FormContainer>

      <PostsContainer>
        {userPosts.map((post) => (
          <PostCard key={post.id} {...post} />
        ))}
      </PostsContainer>
    </HomeContainer>
  )
}
