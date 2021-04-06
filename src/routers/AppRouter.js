import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import Navbar from '../components/Navigation/NavBar';
import { AboutPage, ContactPage, HomePage, NotFoundPage } from '../pages';

function AppRouter() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/about' component={AboutPage} />
        <Route exact path='/contact' component={ContactPage} />
        <Route exact path='/' component={HomePage} />

        <Route path='/404' component={NotFoundPage} />
        <Route path='*'>
          <Redirect to='/404' />
        </Route>
      </Switch>
    </Router>
  );
}

export default AppRouter;
