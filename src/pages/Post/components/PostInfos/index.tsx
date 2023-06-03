/* eslint-disable camelcase */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Infos, PostInfosContainer } from './styles'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faArrowUpRightFromSquare,
  faCalendarDay,
  faChevronLeft,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'
import { formatDateDifference } from '../../../../utils/formatter'
import { UserPostProps } from '../../../../contexts/blogContext'

export function PostInfos({
  html_url,
  title,
  userLogin,
  created_at,
}: UserPostProps) {
  return (
    <PostInfosContainer>
      <nav>
        <NavLink to="/">
          <FontAwesomeIcon icon={faChevronLeft} /> VOLTAR
        </NavLink>
        <a href={html_url} target="_blank" rel="noreferrer">
          VER NO GITHUB <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </a>
      </nav>
      <h3>{title}</h3>
      <Infos>
        <div>
          <FontAwesomeIcon icon={faGithub} size="lg" />
          <span>{userLogin}</span>
        </div>
        <div>
          <FontAwesomeIcon icon={faCalendarDay} />
          <span>{formatDateDifference(created_at)}</span>
        </div>
        <div>
          <FontAwesomeIcon icon={faComment} />
          <span>5 comentários</span>
        </div>
      </Infos>
    </PostInfosContainer>
  )
}
