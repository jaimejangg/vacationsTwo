import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler
} from 'reactstrap';

const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="transparent" light expand="md">
        <h4 style={{ color: '#F44335' }}>Southwestern Vacations</h4>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;