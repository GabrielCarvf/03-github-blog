import {
  ReactNode,
  createContext,
  useCallback,
  useEffect,
  useState,
} from 'react'
import { api } from '../lib/axios'
import { useDebounce } from 'use-debounce'

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
  number: number
  title: string
  body: string
  created_at: string
  html_url: string
  comments: number
  userLogin: string
}

interface BlogContextType {
  userProfile: UserProfileProps
  userPosts: UserPostProps[]
  searchTerm: string
  setSearchTerm: (searchTerm: string) => void
}

interface BlogContextProviderProps {
  children: ReactNode
}

export const BlogContext = createContext({} as BlogContextType)

export function BlogContextProvider({ children }: BlogContextProviderProps) {
  const userName = 'GabrielCarvf'
  const [userProfile, setUserProfile] = useState({} as UserProfileProps)

  const [userPosts, setUserPosts] = useState([] as UserPostProps[])

  const [searchTerm, setSearchTerm] = useState('')
  const [debouncedSearchTerm] = useDebounce(searchTerm, 500)

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
    const { data } = await api.get(
      `https://api.github.com/search/issues?q=${searchString}+repo:${userName}/03-github-blog`,
    )

    const posts = data.items.reduce((acc: any, item: any) => {
      acc.push({
        id: item.id,
        number: item.number,
        title: item.title,
        body: item.body,
        created_at: item.created_at,
        html_url: item.html_url,
        comments: item.comments,
        userLogin: item.user.login,
      })

      return acc
    }, [])
    setUserPosts(posts)
  }, [])

  useEffect(() => {
    fetchUserProfile()
  }, [])

  useEffect(() => {
    fetchUserPosts(debouncedSearchTerm)
  }, [debouncedSearchTerm, fetchUserPosts])

  return (
    <BlogContext.Provider
      value={{
        userProfile,
        userPosts,
        searchTerm,
        setSearchTerm,
      }}
    >
      {children}
    </BlogContext.Provider>
  )
}
