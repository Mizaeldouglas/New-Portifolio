import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 5rem;
  background: ${({ theme }) => theme.gradient};
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  a {
    cursor: pointer;
  }
`;
export const SocialMedia = styled.div`
  font-size: 28px;
  margin-right: -100px;
`;
export const Text = styled.div`
  color: ${({ theme }) => theme.primary};
`;
