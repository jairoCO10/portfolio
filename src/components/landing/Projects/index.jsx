import React, { useContext } from 'react';
import { ThemeContext } from '../../../providers/ThemeProvider';
import { Container 
  // Card, TitleWrap 

} from './../../common';
// import Star from './../../common/Icons/Star';
// import Fork from './../../common/Icons/Fork';
import { Wrapper, Grid
  //  Item, Content, Stats, Languages 
  } from './styles';

export const Projects = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <Wrapper as={Container} id="projects">
      <h2>Projects</h2>
      <Grid>

      </Grid>
    </Wrapper>
  );
};
