import { useEffect } from 'react';
import { types } from '../store/storeReducer';
import { useDispatch } from '../store/storeProvider';
import Navbar from '../components/Navigation/NavBar';
import useApiSearch from '../helpers/apiHooks/useApiSearch';

import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';

import {
  HomePage,
  GamesPage,
  AboutPage,
  PlayersPage,
  ContactPage,
  NotFoundPage,
  StandingsPage,
  TeamsPage,
  SeasonsPage,
} from '../pages';
import Footer from '../components/Footer/Footer';

function AppRouter() {
  const today = new Date();
  const dispatch = useDispatch();
  const gamesQuery = `/v1/games?filter[season][eq]=${today.getFullYear()}&page[size]=100`;
  const seasonGames2021 = useApiSearch({ query: gamesQuery });
  const { error, errorMsg, data } = seasonGames2021;

  useEffect(() => {
    if (error) {
      dispatch({ type: types.setError, payload: errorMsg });
      return;
    }

    dispatch({ type: types.setGames, payload: data });
  }, [data, dispatch, error, errorMsg]);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/games' element={<GamesPage />} />
        <Route path='/teams' element={<TeamsPage />} />
        <Route path='/players' element={<PlayersPage />} />
        <Route path='/seasons' element={<SeasonsPage />} />
        <Route path='/standings' element={<StandingsPage />} />

        <Route path='/about' element={<AboutPage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/' element={<HomePage />} />

        <Route path='/404' element={<NotFoundPage />} />
        <Route path='*' render={() => <Navigate to='/404' />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default AppRouter;
