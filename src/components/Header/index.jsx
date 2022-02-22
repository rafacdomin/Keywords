import React from 'react'
import { MdSettings, MdLeaderboard } from 'react-icons/md'
import { HeaderContainer, Wrapper, Icon } from './styles'

export const Header = () => {
	return (
		<HeaderContainer>
			<Wrapper>
				<aside>
					<Icon>?</Icon>
				</aside>
				<h2>KEYWORDS</h2>
				<aside>
					<Icon>
						<MdLeaderboard />
					</Icon>
					<Icon>
						<MdSettings />
					</Icon>
				</aside>
			</Wrapper>
		</HeaderContainer>
	)
}
