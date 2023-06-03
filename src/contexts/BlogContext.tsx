import {
  ReactNode,
  createContext,
  useCallback,
  useEffect,
  useState,
} from 'react'
import { api } from '../lib/axios'
import { useDebounce } from 'use-debounce'

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
  userPosts: UserPostProps[]
  searchTerm: string
  setSearchTerm: (searchTerm: string) => void
}

interface BlogContextProviderProps {
  children: ReactNode
}

export const BlogContext = createContext({} as BlogContextType)
export const userName = 'GabrielCarvf'
export const repoName = '03-github-blog'

export function BlogContextProvider({ children }: BlogContextProviderProps) {
  const [userPosts, setUserPosts] = useState([] as UserPostProps[])

  const [searchTerm, setSearchTerm] = useState('')
  const [debouncedSearchTerm] = useDebounce(searchTerm, 500)

  const fetchUserPosts = useCallback(async (searchString: string) => {
    const { data } = await api.get(
      `https://api.github.com/search/issues?q=${searchString}+repo:${userName}/${repoName}`,
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
    fetchUserPosts(debouncedSearchTerm)
  }, [debouncedSearchTerm, fetchUserPosts])

  return (
    <BlogContext.Provider
      value={{
        userPosts,
        searchTerm,
        setSearchTerm,
      }}
    >
      {children}
    </BlogContext.Provider>
  )
}
