import styled from "styled-components";
import { Movie } from "../hooks/useMovieList";
import { makeImagePath } from "../utils/Api";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";

interface Props {
    movies: Movie[];
}

const MovieListWrap = styled(motion.ul)`
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

const MovieItem = styled(motion.li) <{ bg: string }>`
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
const MovieTitle = styled.span`
    font-weight: bold;
    font-size: 20px;
`

const listVariants = {
    hidden: {
        opacity: 0,
        y: 50,
      },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          type: 'spring',
          stiffness: 100,
          damping: 15,
          staggerChildren: 0.1, // 추가
        },
      },
      exit: {
        opacity: 0,
        y: 50,
        transition: {
          duration: 0.3,
        },
      },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
};


function MovieList({ movies }: Props) {
    return (
        <MovieListWrap
            variants={listVariants}
            initial="hidden"
            animate="visible"
        >
            {movies.map((movie, i) => (
                <Link
                    to={`${movie.id}`}
              >
                <MovieItem
                    key={movie.id}
                    variants={itemVariants}
                    bg={makeImagePath(movie.poster_path)}
                    whileHover={{ scale: 1.05, y: -20 }}
                    layoutId={movie.id + ''}
                >
                    <MovieTitle>{movie.title}</MovieTitle>
                </MovieItem>
                 </Link>
            ))}
        </MovieListWrap>
    );
}

export default MovieList;