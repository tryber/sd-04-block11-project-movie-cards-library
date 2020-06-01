import React from 'react';
import { HeaderStyle } from '../styles/styles';

class Header extends React.Component {
  render() {
    return (
      <HeaderStyle>
        <header>
          <h1>Movie Cards Library</h1>
        </header>
      </HeaderStyle>
    );
  }
}

export default Header;
