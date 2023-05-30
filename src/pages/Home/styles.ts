import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: -5.5rem;
  padding: 0 1rem 2rem;
  gap: 2rem;
`
export const FormContainer = styled.div`
  margin-top: 1.5rem;
  width: 100%;
  max-width: 54rem;

  div {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;

    label {
      font-size: 1.125rem;
      color: ${({ theme }) => theme['base-subtitle']};
      font-weight: bold;
    }

    span {
      font-size: 0.875rem;
      color: ${({ theme }) => theme['base-span']};
      text-align: right;
    }
  }

  input {
    width: 100%;
    padding: 0.75rem 1rem;
    margin-top: 0.75rem;

    background: ${({ theme }) => theme['base-input']};
    border: 1px solid ${({ theme }) => theme['base-border']};
    border-radius: 6px;

    color: ${({ theme }) => theme['base-text']};

    &::placeholder {
      color: ${({ theme }) => theme['base-label']};
    }
  }
`

export const PostsContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  width: 100%;
  max-width: 54rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`
