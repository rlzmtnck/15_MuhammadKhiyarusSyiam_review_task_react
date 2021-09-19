import Home from './Home';

import Contact from './Contact';
import Success from './Success';
import NewsPage from './NewsPage';
import { Route, Switch } from 'react-router-dom';

export const Routes = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/news" component={NewsPage} />
        <Route path="/thankyou" component={Success} />
      </Switch>
    </div>
  );
};