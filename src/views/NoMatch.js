import React from 'react';
import Helmet from 'react-helmet';

const NoMatch = () => (
  <div className="NoMatch">
    <section className="section thick">
      <div className="container">
        <h1>404 - Page Not Found</h1>
        <p>
          We can't find the page you are looking for!
          <br />
          Head back to
          <a href="https://still-shelf-23280.herokuapp.com">the homepage</a>
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
