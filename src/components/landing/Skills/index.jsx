import React, { useContext } from 'react';
// import AnchorLink from 'react-anchor-link-smooth-scroll';
import { ThemeContext } from '../../../providers/ThemeProvider';
import { Container } from '../../common';
// import dev from './../../../assets/illustrations/skills.svg';
import { Wrapper, SkillsWrapper, Details, Thumbnail } from './styles';

export const Skills = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper id="about">
      
      <SkillsWrapper as={Container}>
        <Thumbnail>
        
  
        </Thumbnail>
        <Details theme={theme}>
          <h1>More about me</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry’s standard dummy.
            
            </p>
            <p>
            * Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry’s standard dummy.
          </p>
          {/* <Button as={AnchorLink} href="#contact">
            Hire me
          </Button> */}
        </Details>
      </SkillsWrapper>
    </Wrapper>
  );
};
