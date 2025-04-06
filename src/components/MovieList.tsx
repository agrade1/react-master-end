import { Movie } from "../hooks/useMovieList";
import { makeImagePath } from "../utils/Api";
import { useLocation, useNavigate } from "react-router-dom";
import { MovieItem, MovieListWrap, MovieTitle } from "../styles/MovieStyles";

interface Props {
    movies: Movie[];
}


const listVariants = {
    hidden: {
        opacity: 0,
        y:-20,
    },
    visible: {
        opacity: 1,
        y:0,
        transition: {
            duration: 0.5,
            staggerChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", damping: 20, stiffness: 1000, duration: 0.5 }},
};

function MovieList({ movies }: Props) {
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <MovieListWrap
            variants={listVariants}
            initial="hidden"
            animate="visible"
        >
            {movies.map((movie) => (
                <MovieItem
                    key={movie.id}
                    variants={itemVariants}
                    bg={makeImagePath(movie.poster_path)}
                    whileHover={{ scale: 1.05, y: -20 }}
                    layoutId={`movie-${movie.id}`}
                    onClick={() => navigate(`/${movie.id}`, { state: { background: location } })}
                >
                    <MovieTitle>{movie.title}</MovieTitle>
                </MovieItem>
            ))}
        </MovieListWrap>
    );
}

export default MovieList;