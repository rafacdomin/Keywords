import styled from 'styled-components'

export const HeaderContainer = styled.header`
	display: flex;
	align-items: center;
	justify-content: center;

	background-color: var(--darker);
	padding: 0 1.6rem;
`

export const Wrapper = styled.div`
	display: flex;
	flex: 1;

	max-width: 1120px;
	height: 5.6rem;

	align-items: center;
	justify-content: space-between;

	aside {
		display: flex;
		align-items: center;
		justify-items: center;
	}

	@media (min-width: 425px) {
		h2 {
			margin-left: 3.2rem;
		}
	}
`

export const Icon = styled.button`
	border: 1px solid var(--light);
	border-radius: 0.4rem;
	width: 3.2rem;

	background-color: transparent;
	color: var(--light);
	font-weight: 700;
	font-size: 1.8rem;
	transition: filter 0.2s;

	svg {
		margin-top: 0.6rem;
	}

	& + button {
		margin-left: 0.6rem;
	}

	&:active {
		filter: brightness(0.8);
	}
`
