import styled from 'styled-components'

export const UserProfileContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 2rem;
  max-width: 54rem;
  padding: 2rem;

  border-radius: 10px;

  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  background: ${({ theme }) => theme['base-profile']};

  img {
    border-radius: 8px;
    max-width: 9.25rem;
    max-height: 9.25rem;
  }

  h3 {
    color: ${({ theme }) => theme['base-title']};
    font-weight: bold;
    font-size: 2rem;
    line-height: 1.3;
  }

  p {
    color: ${({ theme }) => theme['base-text']};
    margin-bottom: 1rem;
  }

  a {
    position: absolute;
    right: 2rem;
    top: 2rem;

    color: ${({ theme }) => theme.blue};
    font-weight: bold;
    font-size: 0.75rem;
    text-decoration: none;

    border-bottom: 1px solid transparent;

    &:hover {
      border-bottom: 1.5px solid ${({ theme }) => theme.blue};
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    a {
      position: static;
    }
  }
`

export const Infos = styled.section`
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
    color: ${({ theme }) => theme['base-subtitle']};
  }
`
