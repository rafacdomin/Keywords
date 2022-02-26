import styled from 'styled-components'

export const Container = styled.div`
	width: 90vw;
	max-width: 600px;
	padding: 2.4rem;
	margin-left: 10rem;
	margin-right: 10rem;

	border-radius: 0.8rem;
	background-color: var(--dark);

	h1 {
		text-align: center;
		margin-bottom: 2.4rem;
	}

	section + section {
		margin-top: 2.4rem;
	}

	@media (min-width: 768px) {
		padding: 3.2rem 5.4rem;
		width: 100%;
	}

	.share {
		display: flex;
		align-items: center;
		justify-content: space-between;
		text-align: center;

		font-size: 1.2rem;

		strong {
			font-size: 1.8rem;
		}

		@media (min-width: 768px) {
			font-size: 1.6rem;
			strong {
				font-size: 2.4rem;
			}
		}

		button {
			display: flex;
			align-items: center;

			border-radius: 0.8rem;
			padding: 1.6rem 2.4rem;
			font-size: 1.6rem;

			border: none;
			background-color: var(--correct);
			color: var(--white);

			transition: filter 0.2s;

			svg {
				margin-left: 0.8rem;
			}

			&:hover {
				filter: brightness(0.8);
			}

			@media (min-width: 768px) {
				padding: 2.4rem 5.6rem;
				font-size: 1.8rem;
			}
		}
	}
`

export const Stats = styled.div`
	display: flex;
	justify-content: space-between;
	font-size: 1.2rem;

	> div {
		width: 10rem;
		text-align: center;
	}

	p {
		filter: brightness(0.8);
	}

	@media (min-width: 768px) {
		font-size: 1.6rem;
	}
`
