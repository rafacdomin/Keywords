import styled from 'styled-components'

export const Container = styled.form`
	width: 100%;
	max-width: 600px;
	padding: 3.2rem;
	margin: 2.4rem;

	border-radius: 0.8rem;
	background-color: var(--dark);

	fieldset {
		margin-bottom: 1.6rem;
		border: none;

		p {
			display: flex;
			justify-content: space-between;
			align-items: center;

			label {
				display: flex;
				flex-direction: column;

				small {
					font-size: 1.2rem;
					filter: brightness(0.9);
				}
			}

			& + p {
				margin-top: 0.8rem;
			}
		}
	}

	section {
		border-top: 1px solid var(--grey);
		padding-top: 1.6rem;

		a {
			color: var(--present);
		}

		p + p {
			margin-top: 0.4rem;
		}
	}
`
