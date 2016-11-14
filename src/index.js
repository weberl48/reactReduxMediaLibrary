import React from 'react';
import ReactDOM from 'react-dom';
import {Router, browserHistory} from 'react-router';
import routes from './routes';

// require the routes and render to the DOM using ReactDOM APIs

ReactDOM.render(
  <Router history={browserHistory} routes={routes} />,
  document.getElementById('root')
);

//pass in routes and browserHistory as props to Router
// browserHistory uses your browsers History API to create a clean and real URL without the gibberish
// ...the gibberish that comes with using hashHistory.

//Router: a high-level API that keeps your UI and URL in sync. It ensures that required props are passed whenever you change URL.

//ReactDOM is the API for mounting our application on the DOM node(root, in our own case)
