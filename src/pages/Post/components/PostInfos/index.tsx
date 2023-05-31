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

export function PostInfos() {
  return (
    <PostInfosContainer>
      <nav>
        <NavLink to="/">
          <FontAwesomeIcon icon={faChevronLeft} /> VOLTAR
        </NavLink>
        <a
          href="https://github.com/GabrielCarvf"
          target="_blank"
          rel="noreferrer"
        >
          VER NO GITHUB <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </a>
      </nav>
      <h3>JavaScript data types and data structures</h3>
      <Infos>
        <div>
          <FontAwesomeIcon icon={faGithub} size="lg" />
          <span>GabrielCarvf</span>
        </div>
        <div>
          <FontAwesomeIcon icon={faCalendarDay} />
          <span>Há 1 dia</span>
        </div>
        <div>
          <FontAwesomeIcon icon={faComment} />
          <span>5 comentários</span>
        </div>
      </Infos>
    </PostInfosContainer>
  )
}
