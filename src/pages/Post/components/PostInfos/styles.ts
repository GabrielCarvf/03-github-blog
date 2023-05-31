import styled from 'styled-components'

export const PostInfosContainer = styled.header`
  width: 100%;
  flex-direction: column;
  display: flex;
  gap: 1.25rem;
  max-width: 54rem;
  padding: 2rem;

  border-radius: 10px;

  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  background: ${({ theme }) => theme['base-profile']};

  h3 {
    color: ${({ theme }) => theme['base-title']};
    font-weight: bold;
    font-size: 1.5rem;
    line-height: 1.3;
  }

  nav {
    display: flex;
    justify-content: space-between;
    a {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      color: ${({ theme }) => theme.blue};
      font-size: 0.75rem;
      font-weight: bold;
      text-decoration: none;
      border-bottom: 1px solid transparent;

      &:hover {
        border-bottom: 1.5px solid ${({ theme }) => theme.blue};
      }
    }
  }
`

export const Infos = styled.section`
  margin-top: -0.5rem;
  display: flex;
  gap: 1.5rem;
  align-items: center;
  flex-wrap: wrap;

  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    svg {
      color: ${({ theme }) => theme['base-label']};
    }
  }

  span {
    color: ${({ theme }) => theme['base-span']};
  }
`
