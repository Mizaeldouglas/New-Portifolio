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
  margin-right: -20%;
  padding-top: 20px;
  a {
    padding-left: 30px;
  }
  .github {
  }
  .linkedin {
    color: #007bb6;
  }
  .whatsapp {
    color: #34af23;
  }
`;
export const Text = styled.div`
  color: ${({ theme }) => theme.primary};
  margin-left: 15%;
`;
