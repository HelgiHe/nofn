import React from 'react';
import './segregatedTab.scss';

const SegregatedTab = ({ onClick }) => {
  return (
    <div className="tabContainer">
      <button
        onClick={() => onClick('femaleNames')}
        className="tabContainer__btn1"
      >
        Stúlkur
      </button>
      <button
        onClick={() => onClick('maleNames')}
        className="tabContainer__btn2"
      >
        Drengir
      </button>
    </div>
  );
};

export default SegregatedTab;
