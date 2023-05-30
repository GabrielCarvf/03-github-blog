import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Infos, UserProfileContainer } from './styles'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'

export function UserProfile() {
  return (
    <UserProfileContainer>
      <img src="https://avatars.githubusercontent.com/u/39717664?v=4" alt="" />
      <div>
        <h3>Gabriel Carvalho</h3>
        <p>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </p>
        <Infos>
          <div>
            <FontAwesomeIcon icon={faGithub} size="lg" />
            <span>GabrielCarvf</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faBuilding} />
            <span>VFLOWS</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faUserGroup} />
            <span>10 seguidores</span>
          </div>
        </Infos>
      </div>
      <a
        href="https://github.com/GabrielCarvf"
        target="_blank"
        rel="noreferrer"
      >
        GITHUB <FontAwesomeIcon icon={faArrowUpRightFromSquare} />{' '}
      </a>
    </UserProfileContainer>
  )
}
