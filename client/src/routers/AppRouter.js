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

import Navbar from '../components/Navigation/NavBar';

function AppRouter() {
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
