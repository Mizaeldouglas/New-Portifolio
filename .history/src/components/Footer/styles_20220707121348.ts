import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 5rem;
  background: ${({ theme }) => theme.gradient};

  display: flex;
`;
export const SocialMedia = styled.div``;
export const Text = styled.div`
  color: ${({ theme }) => theme.primary};

  align-items: center;
  justify-content: center;
`;
