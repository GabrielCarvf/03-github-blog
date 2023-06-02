import {
  ReactNode,
  createContext,
  useCallback,
  useEffect,
  useState,
} from 'react'
import { api } from '../lib/axios'

interface UserProfileProps {
  name: string
  login: string
  avatar_url: string
  company: string
  bio: string
  followers: number
  html_url: string
}

export interface UserPostProps {
  id: number
  title: string
  body: string
  created_at: string
}

interface BlogContextType {
  userProfile: UserProfileProps
  userPosts: UserPostProps[]
  fetchUserPosts: (searchString: string) => Promise<void>
}

interface BlogContextProviderProps {
  children: ReactNode
}

export const BlogContext = createContext({} as BlogContextType)

export function BlogContextProvider({ children }: BlogContextProviderProps) {
  const userName = 'GabrielCarvf'

  const [userProfile, setUserProfile] = useState({} as UserProfileProps)
  const [userPosts, setUserPosts] = useState([] as UserPostProps[])

  async function fetchUserProfile() {
    const { data } = await api.get(`/users/${userName}`)
    setUserProfile({
      name: data.name,
      login: data.login,
      avatar_url: data.avatar_url,
      company: data.company,
      bio: data.bio,
      followers: data.followers,
      html_url: data.html_url,
    })
  }

  const fetchUserPosts = useCallback(async (searchString: string) => {
    // const queryString =
    //   'q=' +
    //   encodeURIComponent(`${searchString}repo:${userName}/03-github-blog`)

    const { data } = await api.get(
      // 'https://api.github.com/search/issues?q=Boas%20pr%C3%A1ticas%20repo:rocketseat-education/reactjs-github-blog-challenge',
      `https://api.github.com/search/issues?q=${searchString}+repo:${userName}/03-github-blog`,
    )

    const posts = data.items.reduce((acc: any, item: any) => {
      acc.push({
        id: item.id,
        title: item.title,
        body: item.body,
        created_at: item.created_at,
      })

      return acc
    }, [])
    setUserPosts(posts)
  }, [])

  useEffect(() => {
    fetchUserPosts('')
    fetchUserProfile()
  }, [fetchUserPosts])

  return (
    <BlogContext.Provider value={{ userProfile, userPosts, fetchUserPosts }}>
      {children}
    </BlogContext.Provider>
  )
}
