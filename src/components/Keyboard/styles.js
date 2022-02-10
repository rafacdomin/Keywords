import styled from 'styled-components'

export const KeyboardContainer = styled.main`
	display: flex;
	flex-direction: column;
	align-items: center;
`
export const Key = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;

	background-color: rgba(0, 0, 0, 0.4);
	font-size: 1.8rem;
	font-weight: bold;
	color: white;

	border: none;
	border-radius: 0.8rem;
	width: ${props => (props.large ? '14rem' : '6rem')};
	height: 7rem;

	cursor: pointer;

	transition: all 0.2s;

	& + button {
		margin-left: 0.8rem;
	}

	&:active {
		background-color: rgba(0, 0, 0, 0.8);
	}

	svg {
		width: 3rem;
		height: 3rem;
	}
`
export const KeyLine = styled.section`
	display: flex;

	& + section {
		margin-top: 0.8rem;
	}
`

export const Space = styled.div`
	margin-left: 3.2rem;
`
