import { motion } from "framer-motion";
import styled from "styled-components";

export const MovieListWrap = styled(motion.ul)`
    position: relative;
    top: -100px;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 30px;
    margin: 0 60px;

    @media (max-width: 1200px) {
        grid-template-columns: repeat(4, 1fr);
    }

    @media (max-width: 900px) {
        grid-template-columns: repeat(3, 1fr);
        gap: 20px;
    }

    @media (max-width: 700px) {
        grid-template-columns: repeat(2, 1fr);
    }
`;

export const MovieItem = styled(motion.li) <{ bg: string }>`
    height: 300px;
    background-image: url(${(props) => props.bg});
    background-size: cover;
    background-position: center;
    border-radius: 10px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: flex-end;
    padding: 0 0 20px 20px;
`;
export const MovieTitle = styled.span`
    font-weight: bold;
    font-size: 20px;
`