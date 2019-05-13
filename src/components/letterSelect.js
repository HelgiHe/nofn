import React from 'react';
import { alphabet } from '../../lib';

import './letterSelect.scss';

const letterSelect = ({ onClick }) => {
  return alphabet.map(letter => {
    return (
      <div onClick={() => console.log(letter)} className="letterBtn">
        {letter}
      </div>
    );
  });
};

export default letterSelect;
