import React from 'react';
import Menu from './menu';

import './Nav.scss';

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = { expanded: false };
  }
  toggleMenu = () => {
    this.setState(prevState => ({ expanded: !prevState.expanded }));
  };
  render() {
    const { expanded } = this.state;
    return (
      <div
        className={`menu ${expanded ? 'menu--open' : ''}`}
        onClick={this.toggleMenu}
      >
        <Menu expanded={expanded} toggleMenu={this.toggleMenu} />
        <div className="menu-bars">
          <div
            className={`menu-bar bar1 
          ${expanded ? 'bar--close' : ''}`}
          />
          <div
            className={`menu-bar bar2 
          ${expanded ? 'bar--close' : ''}`}
          />
          <div
            className={`menu-bar bar3 
          ${expanded ? 'bar--close' : ''}`}
          />
        </div>
      </div>
    );
  }
}
