import styled from 'styled-components'

export const Container = styled.main`
	display: grid;
	grid-template-columns: repeat(5, 6rem);
	grid-template-rows: repeat(6, 6rem);
	gap: 0.6rem 0.6rem;
`

export const Letter = styled.span`
	border: 2px solid
		${props => (props.correct || props.wrong ? 'transparent' : 'var(--grey)')};
	border-radius: 0.4rem;
	display: flex;
	align-items: center;
	justify-content: center;

	color: white;
	font-size: 3.2rem;
	font-weight: 700;
	text-transform: uppercase;

	background-color: ${props => (props.wrong ? 'var(--wrong)' : '')};
	background-color: ${props => (props.correct ? 'var(--correct)' : '')};
	background-color: ${props => (props.present ? 'var(--present)' : '')};
`
