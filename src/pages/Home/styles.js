import styled from 'styled-components'

export const Main = styled.main`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	> section + section {
		margin-top: 2.4rem;
	}
`
