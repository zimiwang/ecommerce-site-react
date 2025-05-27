import React from 'react';
import { Menu, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header({ cartItemCount }) {
  return (
    <Menu className="custom-header">
      {/* Left menu icon */}
      <Menu.Item>
        <i className="bars icon"></i>
      </Menu.Item>

      {/* Center LOGO */}
      <Menu.Menu position="center" className="logo-container">
        <Menu.Item as={Link} to="/">
          <Image src="/images/logo_2.png" alt="Wonder World Logo" className="header-logo" />
        </Menu.Item>
      </Menu.Menu>

      {/* Right cart content */}
      <Menu.Menu position="right">
        <Menu.Item as={Link} to="/cart">
          <i className="shopping cart icon"></i>
          {cartItemCount > 0 && `(${cartItemCount})`}
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  );
}

export default Header;
