import styled from 'styled-components'

export const Container = styled.main`
	display: grid;
	grid-template-columns: repeat(5, 6rem);
	grid-template-rows: repeat(6, 6rem);
	gap: 0.6rem 0.6rem;
`

export const Letter = styled.span`
	border: 2px solid
		${props => (props.correct || props.wrong ? 'transparent' : 'grey')};
	border-radius: 0.4rem;
	display: flex;
	align-items: center;
	justify-content: center;

	color: white;
	font-size: 3.2rem;
	font-weight: 700;
	text-transform: uppercase;

	background-color: ${props =>
		props.wrong ? 'rgba(255, 255, 255, 0.04)' : ''};
	background-color: ${props => (props.correct ? '#538d4e' : '')};
	background-color: ${props => (props.present ? '#b59f3b' : '')};
`
