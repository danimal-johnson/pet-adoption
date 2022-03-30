import React, { StrictMode, useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import ThemeContext from "./ThemeContext";

import SearchParams from './SearchParams';
import Details from './Details';

const App = () => {
  const theme = useState("darkBlue");

  return (
    <ThemeContext.Provider value={theme}>
      <StrictMode>
        <div>
          <Router>
          <header>
            <Link to='/'>
              <h1>Adopt Me!</h1>
            </Link>
          </header>
            <Switch>
              <Route path="/details/:id" component={Details} />
              <Route path="/" component={SearchParams} />
            </Switch>
          </Router>
        </div>
      </StrictMode>
    </ThemeContext.Provider>
  );
};

ReactDOM.render(React.createElement(App), document.getElementById('root'));