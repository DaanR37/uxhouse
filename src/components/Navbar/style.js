import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    scroll-behavior: smooth;
    width: 100%;
    height: 100vh;
    overflow-x: hidden;
    position: relative;
    overscroll-behavior-y: none;
  }
  *, *::after, *::before {
      box-sizing: border-box;
  }
`;

export const StyledBurger = styled.button`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 1.5rem;
  background: transparent;
  opacity: 0.8;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 2;
  overscroll-behavior-x: none;

  &:hover {
    opacity: 1;
    transition: 400ms ease-in-out;
  }

  &:focus {
    outline: none;
  }

  div {
    background: white;
    border-radius: 50px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => (open ? "rotate(50deg)" : "rotate(0)")};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
      transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-50deg)" : "rotate(0)")};
    }
  }

  @media screen and (max-width: 1280px) and (orientation: portrait) {
    position: fixed;
    top: 2rem;
    right: 2rem;
    
    div {
      width: 1.9rem;
      height: 0.25rem;
    }
  }

  @media screen and (max-width: 1280px) and (orientation: landscape) {
    position: absolute;
    top: 2.5rem;
    right: 3rem;

    div {
      width: 2.5rem;
      height: 0.25rem;
    }
  }

  @media screen and (min-width: 1280px) {
    position: absolute;
    top: 2.5rem;
    right: 3rem;

    div {
      width: 2rem;
      height: 0.15rem;
    }
  }
`;

export const StyledMenu = styled.nav`  
  display: flex;
  flex-direction: column;
  background: transparent;
  right: 0;
  transition: transform 0.6s ease-in-out;
  z-index: 1;

  a {
    text-transform: uppercase;
    font-weight: 100;
    letter-spacing: 0.5rem;
    color: white;
    opacity: 0.8;
    text-decoration: none;
    transition: color 0.3s linear;
    margin-right: 15rem;

    p {
      font-size: 1rem;
    }

    &:hover {
      opacity: 1;
    }
  }
  @media screen and (max-width: 1280px) and (orientation: portrait) {
    position: fixed;
    background: linear-gradient(
      90deg,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 1),
      black,
      black,
      black
    );
    height: 100%;
    width: 100%;
    padding-top: 1.5rem;
    top: 0;
    padding-top: 50%;
    padding-left: 20%;
    transform: ${({ open }) => (open ? "translateX(0%)" : "translateX(100%)")};

    a {
      font-size: 1rem;
      padding: 1.3rem;
      text-align: center;
    }
  }

  @media screen and (max-width: 1280px) and (orientation: landscape) {
    position: absolute;
    top: 5rem;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};

    a {
      font-size: 1rem;
      padding-bottom: 1.7rem;
    }
  }

  @media screen and (min-width: 1280px) {
    position: absolute;
    // top: 1rem;
    padding-top: 8%;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};

    a {
      display: flex;
      width: 100%;
      font-size: 1rem;
      padding: 0.1rem;
      align-items: center;
      :nth-child(2) > h3 {
          text-align: center;
      }
      h3 {
        font-weight: 100;
        // text-align: center;
      }
    }
    a:nth-child(1) > img {
        position: absolute;
        filter: invert(1);
        width: 2.5vw;
        right: 10rem;
    }
    a:nth-child(2) > img {
        position: absolute;
        filter: invert(1);
        width: 2.5vw;
        right: 10rem;
    }
    a:nth-child(3) > img {
        position: absolute;
        filter: invert(1);
        width: 2.5vw;
        right: 10rem;
    }
  }
`;
