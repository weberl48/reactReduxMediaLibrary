import React from 'react';
import { Route, IndexRoute} from 'react-router'

import App from './containers/App';
import HomePage from './components/HomePage';

//Map components to different routes.
// parent componet wraps other componets and thus serves as the enterance to other react components
//
//IndexRoute maps HomePage to the default route

export default (
  <Route path="/" component={App}>
     <IndexRoute component={HomePage} />
   </Route>
)
