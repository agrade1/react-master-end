import { useQuery } from '@tanstack/react-query';
import { getMovie, makeBgPath } from '../utils/Api';
import { useParams, useNavigate } from 'react-router-dom';
import { Modal, ModalText, ModalTitle, Overlay } from '../styles/ModalStyles';


function MovieModal() {
    const { id } = useParams();
    const navigate = useNavigate();

    const { data: movie, isLoading } = useQuery({
        queryKey: ['movie', id],
        queryFn: () => getMovie(Number(id)),
        enabled: !!id,
    });

    if (!id || isLoading || !movie) return null;

    return (
        <>
            <Overlay
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => navigate(-1)}
            >
                <Modal layoutId={`movie-${id}`} onClick={(e) => e.stopPropagation()}>
                    <img src={makeBgPath(movie.backdrop_path)} alt={movie.title} />
                    <ModalTitle>{movie.title}</ModalTitle>
                    <ModalText>{movie.overview}</ModalText>
                    <ModalText>Budget: {movie.budget}</ModalText>
                    <ModalText>Revenue: {movie.revenue}</ModalText>
                    <ModalText>Runtime: {movie.runtime}</ModalText>
                    <ModalText>Rating: {movie.vote_average}</ModalText>
                </Modal>
            </Overlay>

        </>
    );
}



export default MovieModal;