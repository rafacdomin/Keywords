import styled from 'styled-components'

export const Main = styled.main`
	display: flex;
	height: 100vh;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: center;

	> section {
		width: 100%;
		padding: 0.8rem;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	@media (min-width: 768px) {
		> section {
			width: unset;
			padding: unset;
		}
	}
`
