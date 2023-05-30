import styled from 'styled-components'

export const PostContainer = styled.div`
  padding: 2rem;
  max-height: 16.25rem;
  border-radius: 10px;
  background: ${({ theme }) => theme['base-post']};

  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 1rem;

    h3 {
      flex: 1;
      color: ${({ theme }) => theme['base-title']};
      font-weight: bold;
      font-size: 1.25rem;
    }

    span {
      color: ${({ theme }) => theme['base-span']};
      font-size: 0.875rem;
    }
  }

  p {
    overflow: auto;
  }
`
