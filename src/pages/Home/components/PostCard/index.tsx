/* eslint-disable camelcase */
import { UserPostProps } from '../../../../contexts/blogContext'
import { PostContainer } from './styles'
import { formatDateDifference } from '../../../../utils/formatter'

export function PostCard({ number, title, created_at, body }: UserPostProps) {
  return (
    <PostContainer to={`/${number}`}>
      <header>
        <h3>{title}</h3>
        <span>{formatDateDifference(created_at)}</span>
      </header>
      <p>{body && body.substring(0, 150)}...</p>
    </PostContainer>
  )
}
