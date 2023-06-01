import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Infos, UserProfileContainer } from './styles'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from 'react'
import { api } from '../../../../lib/axios'

interface UserProfileProps {
  name: string
  login: string
  avatar_url: string
  company: string
  bio: string
  followers: number
  html_url: string
}

export function UserProfile() {
  const [userProfile, setUserProfile] = useState({} as UserProfileProps)

  async function getUserProfile() {
    const { data } = await api.get('/users/GabrielCarvf')
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

  useEffect(() => {
    getUserProfile()
  }, [])

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
