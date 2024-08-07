import React, { useContext } from 'react';
// import { Link } from 'gatsby';
import { ThemeContext } from './../../../../providers/ThemeProvider';
import { Container } from './../../../common';
import NavbarLinks from '../NavbarLinks';
import { Wrapper, Brand } from './styles';

const Navbar = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper as={Container}>
      <Brand  to="/" theme={theme}>
        Jairo Cogollo
      </Brand>
      <NavbarLinks desktop />
    </Wrapper>
  );
};

export default Navbar;
