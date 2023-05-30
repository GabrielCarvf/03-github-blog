import { FormContainer, HomeContainer, PostsContainer } from './styles'
import { UserProfile } from './components/UserProfile'
import { PostCard } from './components/PostCard'

export function Home() {
  return (
    <HomeContainer>
      <UserProfile />

      <FormContainer>
        <div>
          <label>Publicações</label>
          <span>6 publicações</span>
        </div>
        <input type="text" placeholder="Buscar conteúdo" />
      </FormContainer>

      <PostsContainer>
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </PostsContainer>
    </HomeContainer>
  )
}
