import { atom } from 'jotai';
import { Movie } from '../hooks/useMovieList';

export const bannerMovieAtom = atom<Movie | null>(null);