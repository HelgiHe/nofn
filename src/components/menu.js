import React from 'react';
import { Link } from 'react-router-dom';

import './menu.scss';

class Menu extends React.Component {
  render() {
    const { expanded } = this.props;
    return (
      <div
        className={`menu-content
      ${expanded ? 'expanded' : ''} `}
      >
        <Link
          className={`menu__link
      ${expanded ? 'expanded' : ''} `}
          to="/"
        >
          Heim
        </Link>
        <Link
          className={`menu__link
      ${expanded ? 'expanded' : ''} `}
          to="/names/"
        >
          Nöfn
        </Link>
        <Link
          className={`menu__link
      ${expanded ? 'expanded' : ''} `}
          to="/login/"
        >
          Innskráning
        </Link>
      </div>
    );
  }
}

export default Menu;
