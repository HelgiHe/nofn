import React from 'react';
import Helmet from 'react-helmet';

import './NoMatch.scss';

const NoMatch = () => (
  <div className="NoMatch">
    <section className="section thick">
      <div className="container">
        <h1>404 - Page Not Found</h1>
        <p>
          Við fundum ekki síðuna sem þú ert að leita af 😕
          <br />
          Líklega best að fara aftur á
          <a href="https://still-shelf-23280.herokuapp.com"> Heimasíðuna</a>
        </p>
      </div>
    </section>
    <Helmet>
      <title>404 – Page Not Found</title>
      <body className="body--NoMatch" />
    </Helmet>
  </div>
);

export default NoMatch;
