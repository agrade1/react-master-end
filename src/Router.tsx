import { createBrowserRouter } from 'react-router-dom';
import MovieLayout from './layouts/MovieLayouts';
import MoviePage from './components/MoviePage';
import MovieModal from './components/MovieModal';

const Router = createBrowserRouter([
    {
        path: '/',
        element: <MovieLayout />,
        children: [
            {
                path: '',
                element: <MoviePage />,
                children: [
                    {
                        path: ':id',
                        element: <MovieModal />,
                    },
                ],
            },
            {
                path: 'now-playing',
                element: <MoviePage />,
                children: [
                    {
                        path: ':id',
                        element: <MovieModal />,
                    },
                ],
            },
            {
                path: 'coming-soon',
                element: <MoviePage />,
                children: [
                    {
                        path: ':id',
                        element: <MovieModal />,
                    },
                ],
            },
        ],
    },
]);

export default Router;
