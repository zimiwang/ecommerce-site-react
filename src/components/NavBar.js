import React from 'react';
import { Menu, Dropdown } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { navItems } from '../utils/navData';
import './NavBar.css';

const NavBar = () => {
  return (
    <div className="responsive-menu">
      <Menu className="navbar-menu">
        <div className="hidden-menu">
          {navItems.map((item, index) => {
            if (item.dropdown) {
              return (
                <Dropdown item text={item.label} key={index}>
                  <Dropdown.Menu>
                    {item.dropdown.map((subItem, subIndex) => (
                      <Dropdown.Item as={Link} to={subItem.link} key={subIndex}>
                        {subItem.label}
                      </Dropdown.Item>
                    ))}
                  </Dropdown.Menu>
                </Dropdown>
              );
            } else {
              return (
                <Menu.Item as={Link} to={item.link} key={index}>
                  {item.label}
                </Menu.Item>
              );
            }
          })}
        </div>
      </Menu>
    </div>
  );
};

export default NavBar;
