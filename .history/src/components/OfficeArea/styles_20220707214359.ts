import styled from 'styled-components';

export const InfosContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-top: 1.5rem;
`;

export const CodeItem = styled.pre`
  background: ${({ theme }) => theme.gradient};
  padding: 2rem;
  font-family: 'JetBrains Mono' monospace;
  font-weight: 300;
  color: #fff;
  width: 24rem;
  align-self: flex-end;
  transition: 1s !important;

  @media (max-width: 1023px) {
    width: 18rem;
    padding: 1.5rem;
    font-size: 0.9rem;
  }
  @media (max-width: 768px) {
    width: 100%;
    padding: 1.5rem;
    font-size: 0.8rem;
  }

  &:hover {
    filter: brightness(1.2);
  }

  > div {
    margin: 0.2rem 0;
    margin-left: 1rem;
  }
  .purple {
    color: #c38cdd;
  }
  .blue {
    color: #2a6f97;
  }
  .comment {
    color: ${({ theme }) => theme.text};
    margin-bottom: 1rem;
    display: block;
  }
`;
