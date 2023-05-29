import { useParams } from 'react-router-dom'

export function Post() {
  const { postId } = useParams()
  console.log('🚀 ~ file: index.tsx:5 ~ Post ~ postId:', postId)

  return <h1>Post</h1>
}
