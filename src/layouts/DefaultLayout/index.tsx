import { Header, LayoutContainer } from './styles'
import { Outlet } from 'react-router-dom'
import logo from '../../assets/github_blog_logo.svg'

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <Header>
        <img src={logo} alt="" />
      </Header>
      <Outlet />
    </LayoutContainer>
  )
}
