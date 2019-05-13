import React from 'react';
import './Home.scss';

export default () => {
  return (
    <div className="homeContainer">
      <h1 className="homeContainer__header">Velkomin</h1>
      <section className="homeContainer__content">
        <p>
          Nöfn.is hefur það markmið að bjóða tilvonandi foreldrum, sem og þeim
          sem hafa áhuga, lista yfir íslensk nöfn og merkingu þeirra. Með því að
          stofna aðgang að síðunni er hægt að vista nöfn.
        </p>
      </section>
    </div>
  );
};
