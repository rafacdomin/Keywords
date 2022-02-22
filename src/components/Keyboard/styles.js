import styled from 'styled-components'

export const Key = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;

	background-color: rgba(0, 0, 0, 0.3);
	background-color: ${props => props.wrong && 'var(--wrong)'};
	background-color: ${props => props.present && 'var(--present)'};
	background-color: ${props => props.correct && 'var(--correct)'};

	font-size: 1.6rem;
	font-weight: bold;
	color: white;
	text-transform: uppercase;

	border: none;
	border-radius: 0.8rem;
	width: ${props => (props.large ? '100%' : '40%')};
	height: 6rem;

	cursor: pointer;

	transition: all 0.2s;

	& + button {
		margin-left: 0.4rem;
	}

	&:active {
		background-color: rgba(0, 0, 0, 0.8);
	}

	svg {
		width: 2rem;
		height: 2rem;
	}

	@media (min-width: 768px) {
		font-size: 1.8rem;

		width: ${props => (props.large ? '12rem' : '5.5rem')};
		height: 6rem;

		svg {
			width: 3rem;
			height: 3rem;
		}

		& + button {
			margin-left: 0.6rem;
		}
	}
`
export const KeyLine = styled.section`
	display: flex;
	width: 100%;

	& + section {
		margin-top: 0.4rem;
	}

	@media (min-width: 768px) {
		& + section {
			margin-top: 0.6rem;
		}
	}
`

export const Space = styled.div`
	margin-left: 0rem;

	@media (min-width: 768px) {
		margin-left: 3.2rem;
	}
`
