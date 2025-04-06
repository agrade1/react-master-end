import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Banner from '../components/Banner';
import { useAtomValue } from 'jotai';
import { bannerMovieAtom } from '../atoms/BannerAtoms';

function MovieLayout() {
  const bannerMovie = useAtomValue(bannerMovieAtom);


  return (
    <>
      <Header />
      {bannerMovie && <Banner movie={bannerMovie} />}
      <Outlet />
    </>
  );
}

export default MovieLayout;