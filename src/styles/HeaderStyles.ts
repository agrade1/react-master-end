import { motion } from "framer-motion";
import styled from "styled-components";

export const Gnb = styled(motion.header)<{ scrolled: boolean }>`
    position: fixed;
    left: 0;
    top: 0;
    z-index: 1000;
    width: 100%;
    height: 80px;
    padding: 0 60px;
    transition: 0.5s;
    background: ${({ scrolled }) =>
    scrolled
      ? 'rgba(0, 0, 0, 0.9)'
      : 'linear-gradient(180deg, rgba(0, 0, 0, .7) 10%, transparent)'};

`
export const Circle = styled(motion.span)`
   position: absolute;
   width: 5px;
   height: 5px;
   border-radius: 5px;
   bottom: -15px;
   left: 0;
   right: 0;
   margin: 0 auto;
   background-color: red;
`;

export const Menu = styled.ul`
    display: flex;
    align-items: center;
    height: 100%;
    gap: 20px;

`
export const MenuList = styled.li`
    position: relative;
    a {
        display: block;
    }
`
export const Logo = styled.svg`
    height: auto;
    max-width: 100px;
    margin-right: 20px;
`