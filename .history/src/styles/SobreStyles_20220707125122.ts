import styled from 'styled-components';

export const SobreContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  main {
    margin-top: 2rem;
    margin-bottom: 2rem;
    width: 100%;
    padding: 0 5rem;
    h1 {
      text-align: center;
      color: ${({ theme }) => theme.textLight};
    }
    p {
      font-size: 1.5rem;
      line-height: 2;
      color: ${({ theme }) => theme.textHighlight};
    }
    span {
      color: ${({ theme }) => theme.textLight};
    }
    .tecnologias {
      margin-top: 3rem;
    }
    .estudos {
      margin-top: 5rem;
    }
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
    color: #000;
  }
  .linkedin {
    color: #007bb6;
  }
  .whatsapp {
    color: #34af23;
  }
`;
