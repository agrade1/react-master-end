import { makeBgPath } from '../utils/Api';
import { Movie } from '../hooks/useMovieList';
import { memo } from 'react';
import { BannerDiv, BannerText, BannerTextWrap, BannerTitle } from '../styles/BannerStyles';

interface Props {
    movie: Movie;
}

function Banner({ movie }: Props){

    if (!movie) return null;

    return (
        <BannerDiv bg={makeBgPath(movie.backdrop_path)}>
            <BannerTextWrap>
                <BannerTitle>{movie.title}</BannerTitle>
                <BannerText>{movie.overview}</BannerText>
            </BannerTextWrap>
        </BannerDiv>
    );
}

export default memo(Banner);
