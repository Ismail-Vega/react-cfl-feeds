import { useEffect } from 'react';
import { types } from '../store/storeReducer';
import { useDispatch } from '../store/storeProvider';
import Navbar from '../components/Navigation/NavBar';
import useApiSearch from '../helpers/apiHooks/useApiSearch';

import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
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
      <Switch>
        <Route exact path="/games" component={GamesPage} />
        <Route exact path="/teams" component={TeamsPage} />
        <Route exact path="/players" component={PlayersPage} />
        <Route exact path="/seasons" component={SeasonsPage} />
        <Route exact path="/standings" component={StandingsPage} />

        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/contact" component={ContactPage} />
        <Route exact path="/" component={HomePage} />

        <Route path="/404" component={NotFoundPage} />
        <Route path="*">
          <Redirect to="/404" />
        </Route>
      </Switch>
    </Router>
  );
}

export default AppRouter;
