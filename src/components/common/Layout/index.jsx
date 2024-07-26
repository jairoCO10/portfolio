import React from 'react';
// import { ThemeContext } from '../../../providers/ThemeProvider';
import { Footer } from '../../theme';
// import { Global } from './styles';
import './fonts.css';

export const Layout = ({ children }) => {
  // const { theme } = useContext(ThemeContext);

  return (
    <>
      {children}
      <Footer />
    </>
  );
};
