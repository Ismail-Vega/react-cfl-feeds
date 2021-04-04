import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AboutPage, ContactPage, HomePage, NotFoundPage } from '../pages';

function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route exact path='/about' component={AboutPage} />
        <Route exact path='/contact' component={ContactPage} />
        <Route exact path='/' component={HomePage} />
        <Route path='*' component={NotFoundPage} />
      </Switch>
    </Router>
  );
}

export default AppRouter;
