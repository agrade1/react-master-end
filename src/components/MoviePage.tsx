import { getPopular, getNowPlaying, getComingSoon } from '../utils/Api';
import MovieList from './MovieList';
import { useMovieList } from '../hooks/useMovieList';
import { useLocation, useMatch, useParams } from 'react-router-dom';
import { useAtomValue, useSetAtom } from 'jotai';
import { bannerMovieAtom } from '../atoms/BannerAtoms';
import { useEffect, useMemo } from 'react';
import MovieModal from './MovieModal';
import { Outlet } from 'react-router-dom';
import { AnimatePresence, LayoutGroup } from 'framer-motion';



function MoviePage() {
    const setBannerMovie = useSetAtom(bannerMovieAtom);
    const bannerMovie = useAtomValue(bannerMovieAtom);
    const { id } = useParams();
    const isModalOpen = !!id;


    const isNowPlaying = useMatch('/now-playing/*');
    const isComingSoon = useMatch('/coming-soon/*');

    const category = isNowPlaying
        ? 'now-playing'
        : isComingSoon
            ? 'coming-soon'
            : 'popular';

    const fetchFn = useMemo(() => {
        switch (category) {
            case 'now-playing':
                return getNowPlaying;
            case 'coming-soon':
                return getComingSoon;
            default:
                return getPopular;
        }
    }, [category]);

    const { data, isLoading } = useMovieList(category, fetchFn);

    useEffect(() => {
        if (data && !bannerMovie) {
            const random = data.results[Math.floor(Math.random() * data.results.length)];
            setBannerMovie(random);
        }
    }, [data, bannerMovie, setBannerMovie]);

    if (isLoading) return <div>Loading...</div>;
    if (!data) return null;

    return (
        <>
            <MovieList movies={data.results} />
            <AnimatePresence>
                {isModalOpen && <MovieModal />}
            </AnimatePresence>
        </>
    );

}

export default MoviePage;
