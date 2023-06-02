/* eslint-disable camelcase */
import { formatDistanceToNowStrict } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { UserPostProps } from '../../../../contexts/blogContext'
import { PostContainer } from './styles'

export function PostCard({ id, title, created_at, body }: UserPostProps) {
  function formatDateDifference(postCreationDateString: string) {
    return formatDistanceToNowStrict(new Date(postCreationDateString), {
      addSuffix: true,
      locale: ptBR,
    })
  }

  return (
    <PostContainer to={`/${id}`}>
      <header>
        <h3>{title}</h3>
        <span>{formatDateDifference(created_at)}</span>
      </header>
      <p>{body.substring(0, 150)}...</p>
    </PostContainer>
  )
}
