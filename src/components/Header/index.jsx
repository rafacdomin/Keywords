import { SettingsModal } from 'components/SettingsModal'
import React, { useCallback, useState } from 'react'
import { MdSettings, MdLeaderboard } from 'react-icons/md'
import { HeaderContainer, Wrapper, Icon } from './styles'

export const Header = () => {
	const [openModal, setOpenModal] = useState({
		help: false,
		settings: false,
		scoreboard: false,
	})

	const controlSettings = useCallback(modal => {
		setOpenModal(state => ({
			...state,
			[modal]: !state[modal],
		}))
	}, [])

	return (
		<>
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
						<Icon onClick={() => controlSettings('settings')}>
							<MdSettings />
						</Icon>
					</aside>
				</Wrapper>
			</HeaderContainer>

			<SettingsModal
				isOpen={openModal.settings}
				controlModal={() => controlSettings('settings')}
			/>
		</>
	)
}
