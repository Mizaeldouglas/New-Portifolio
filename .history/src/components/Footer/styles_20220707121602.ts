import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 5rem;
  background: ${({ theme }) => theme.gradient};
  align-items: center;
  display: flex;
  justify-content: space-evenly;
`;
export const SocialMedia = styled.div`
  font-size: 28px;
  margin-left: -100px;
`;
export const Text = styled.div`
  color: ${({ theme }) => theme.primary};
`;
