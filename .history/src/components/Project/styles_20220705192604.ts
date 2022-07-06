import { darken } from 'polished';
import styled from 'styled-components';

interface ProjetoProps {
  imgUrl: string;
}

export const Container = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5rem;

  > section {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 4rem;

    @media (max-width: 1000px) {
      gap: 2rem;
    }
  }
  > button {
    background: ${({ theme }) => theme.primary};
    padding: 0.8rem 3rem;
    border-radius: 0.5rem;
    border: none;
    transition: none;

    &:hover {
      background: ${({ theme }) => darken(0.5, theme.primary)};
    }
    a {
      text-transform: uppercase;
      color: #fff;
      font-size: 1.5rem;
      font-weight: 300;
    }
    @media (max-width: 580px) {
      padding: 1rem;
      a {
        font-size: 1rem;
      }
    }
  }
`;

export const ProjetoContainer = styled.div<ProjetoProps>`
  width: 100%;
  display: flex;
  height: 20rem;
  align-items: flex-end;
  position: relative;

  &:hover {
    > section .text {
      right: -6rem;
    }
    .overlay {
      opacity: 0.4;
    }
    > button a {
      color: ${({ theme }) => theme.primary};
    }
  }

  > button {
    height: 4rem;
    margin: 0 0 3rem 5rem;
    background: none;
    border: none;

    a {
      color: #fff;
      font-size: 2rem;
      font-weight: 300;
      display: flex;
      align-items: center;
      gap: 0.8rem;
      transition: 0.5s;
    }
  }

  > section {
    width: 50rem;
    height: 100%;
    background: url(${props => props.imgUrl}) no-repeat center;
    background-size: cover;
    position: relative;
  }
  .overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    background: ${({ theme }) => theme.gradient};
    opacity: 0.75;
    transition: 0.5s;
  }
  .text {
    position: absolute;
    top: 3rem;
    right: -5rem;
    transition: 0.7s;
    width: fit-content;

    h1 {
      color: ${({ theme }) => theme.primary};
      font-size: 2.5rem;
      text-shadow: -4px 5px 22px #11172b;
    }
    h2 {
      color: ${({ theme }) => theme.secondary};
      font-size: 2rem;
      font-weight: 300;
      text-shadow: -4px 5px 22px #11172b;
    }
  }
  &:nth-child(even) {
    flex-direction: row-reverse;
  }
  > button {
    margin: 3rem 5rem 0 0;
  }
  > section .text {
    text-align: right;
    right: 0;
    left: -5rem;
  }
  &:hover {
    > section .text {
      left: 6rem;
    }
  }
  @media (max-width: 1450px) {
    > section {
      width: 40rem;
    }
  }
  @media (max-width: 1000px) {
    > section {
      width: 100%;
      .text {
        left: 1rem;
        top: 1rem;
      }
    }
    > button {
      position: absolute;
      bottom: 1rem;
      right: 1rem;
      margin: 0;
    }

    &:nth-child(even) {
      flex-direction: row;

      > section {
        width: 100%;

        .text {
          left: 1rem;
          top: 1rem;
          text-align: right;
        }
      }
      > button {
        position: absolute;
        bottom: 1rem;
        right: 1rem;
        margin: 0;
      }

      &:hover {
        > section .text {
          left: 1rem;
        }
      }
    }
  }
  @media (max-width: 700px) {
    height: 17rem;
  }
  @media (max-width: 450px) {
    > button {
      height: auto;

      a {
        font-size: 1.5rem;
        gap: 0.8rem;
      }
    }
    > section .text {
      h1 {
        font-size: 1.5rem;
      }
      h2 {
        font-size: 1rem;
      }
    }
  }
`;
