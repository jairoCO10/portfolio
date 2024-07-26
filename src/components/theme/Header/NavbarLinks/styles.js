import styled from 'styled-components';

export const Wrapper = styled.div`
  a {
    color: #21B056;
    text-decoration: none;
	font-weight: bold; /* Añade esta línea para negrita */
	font-size: 1.2em;  /* Añade esta línea para aumentar el tamaño de la letra */

	@media (max-width: 960px) {
		color: ${({ theme }) => (theme === 'light' ? '#000' : '#21B056')};
	}
  }

  ${({ desktop }) =>
    desktop
      ? `
			align-items: center;
			display: flex;

			@media (max-width: 960px) {
					display: none;
			}

			a {
					margin-right: 1rem;

					&:last-child {
							margin-right: unset;
					}
			}
		`
      : `
			padding: 3rem;
			display: flex;
			flex-direction: column;

			a {
					margin-bottom: 1rem;

					&:last-child {
							margin-bottom: unset;
					}
			}
	`}
`;
