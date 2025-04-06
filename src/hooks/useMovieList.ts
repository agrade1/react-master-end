import { useQuery } from '@tanstack/react-query';

export interface Movie {
    id: number;
    title: string;
    overview: string;
    poster_path: string;
    backdrop_path: string;
    release_date: string;
    vote_average: number;
}

export interface MovieResponse {
    results: Movie[];
}

export function useMovieList(queryKey: string, fetchFn: () => Promise<MovieResponse>) {
    return useQuery<MovieResponse>({
        queryKey: [queryKey],
        queryFn: fetchFn,
    });
}