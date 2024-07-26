import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 1.5rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: bold; /* Añade esta línea para negrita */
	font-size: 1.2em;  /* Añade esta línea para aumentar el tamaño de la letra */
`;

export const Brand = styled.a`
  color: ${({ theme }) => (theme === 'light' ? '#21B056' : '#21B056')};

  @media (max-width: 960px) {
    mix-blend-mode: ${({ theme }) => (theme === 'light' ? 'unset' : 'difference')};
  }
`;
