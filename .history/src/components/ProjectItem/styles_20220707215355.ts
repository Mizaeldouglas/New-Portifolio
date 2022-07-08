import styled from 'styled-components';

interface ContainerProps {
  imgUrl: string;
}

export const Container = styled.div<ContainerProps>`
  a {
    position: relative;
    width: 100%;
    height: 10rem;
    background: url(${props => props.imgUrl}) no-repeat;
    background-size: cover;
    padding: 1.5rem;
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
    border-radius: 0.5rem;
    border: 1px solid ${({ theme }) => theme.border};
    transition: 0.5s;
    cursor: pointer;
    overflow: hidden;

    &:hover {
      border-color: ${({ theme }) => theme.primary};
      .overlay {
        opacity: 0.5;
      }
    }

    section {
      z-index: 2;
      h1 {
        color: ${({ theme }) => theme.error};
        font-size: 1.5rem;
      }
      h2 {
        color: ${({ theme }) => theme.secondary};
        font-size: 1rem;
      }
    }
    .overlay {
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
      background: ${({ theme }) => theme.gradient};
      opacity: 0.1;
      transition: 0.5s;
    }
  }
`;
