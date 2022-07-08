import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 5rem;
  background: ${({ theme }) => theme.gradient};
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;
export const Text = styled.div`
  color: ${({ theme }) => theme.primary};
  font-size: 20px;
`;
