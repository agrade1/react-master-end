import { useQuery } from '@tanstack/react-query';
import { getMovie, makeBgPath } from '../utils/Api';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useParams, useNavigate } from 'react-router-dom';


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
        <Overlay
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => navigate(-1)}
        >
            <Modal layoutId={`movie-${id}`} onClick={(e) => e.stopPropagation()}>
                <img src={makeBgPath(movie.backdrop_path)} alt={movie.title} />
                <h2>{movie.title}</h2>
                <p>{movie.overview}</p>
            </Modal>
        </Overlay>
    );
}

const Overlay = styled(motion.div)`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Modal = styled(motion.div)`
  width: 90%;
  max-width: 800px;
  background: #111;
  color: white;
  border-radius: 10px;
  padding: 30px;
  position: relative;
  z-index: 998;

  img{
    width: 100%;
  }
`;

export default MovieModal;