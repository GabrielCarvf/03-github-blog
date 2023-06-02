import { FormContainer, HomeContainer, PostsContainer } from './styles'
import { UserProfile } from './components/UserProfile'
import { PostCard } from './components/PostCard'
import { ChangeEvent, useContext, useState } from 'react'
import { BlogContext } from '../../contexts/blogContext'

export function Home() {
  const [searchString, setSearchString] = useState('')
  const { userPosts, fetchUserPosts } = useContext(BlogContext)

  function handleSearchStringChange(event: ChangeEvent<HTMLInputElement>) {
    fetchUserPosts(event.target.value)
    setSearchString((state) => {
      return event.target.value
    })
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
          value={searchString}
          onChange={handleSearchStringChange}
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
