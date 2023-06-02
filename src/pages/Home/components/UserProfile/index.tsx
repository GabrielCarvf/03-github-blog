import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Infos, UserProfileContainer } from './styles'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { useContext } from 'react'
import { BlogContext } from '../../../../contexts/blogContext'

export function UserProfile() {
  const { userProfile } = useContext(BlogContext)

  return (
    <UserProfileContainer>
      <img src={userProfile.avatar_url} alt="" />
      <div>
        <h3>{userProfile.name}</h3>
        <p>{userProfile.bio}</p>
        <Infos>
          <div>
            <FontAwesomeIcon icon={faGithub} size="lg" />
            <span>{userProfile.login}</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faBuilding} />
            <span>{userProfile.company}</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faUserGroup} />
            <span>{userProfile.followers} seguidores</span>
          </div>
        </Infos>
      </div>
      <a href={userProfile.html_url} target="_blank" rel="noreferrer">
        GITHUB <FontAwesomeIcon icon={faArrowUpRightFromSquare} />{' '}
      </a>
    </UserProfileContainer>
  )
}
