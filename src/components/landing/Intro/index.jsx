import React, { useContext } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { ThemeContext } from './../../../providers/ThemeProvider';
import { Header } from '../../theme';
import { Container, Button } from './../../common';
import dev from './../../../assets/illustrations/dev.svg';
import { Wrapper, IntroWrapper, Details, Thumbnail } from './styles';

export const Intro = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper>
      <Header />
      <IntroWrapper as={Container}>
        <Details theme={theme}>
          <h1>Hi There!</h1>
          <h4>Hola soy ingeniero de sistemas</h4>
          <Button as={AnchorLink} href="#contact">
            contactame
          </Button>
        </Details>
        <Thumbnail>
          <img src={dev} alt="Hola mi nombre es Jairo" />
        </Thumbnail>
      </IntroWrapper>
    </Wrapper>
  );
};
