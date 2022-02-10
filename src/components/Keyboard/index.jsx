import React, { useCallback } from 'react'
import PropTypes from 'prop-types'

import { ReactComponent as BackSVG } from '../../assets/backspace-icon.svg'
import { KeyboardContainer, KeyLine, Key, Space } from './styles'

const keys = [
	['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
	['SPACE', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'BACK'],
	['SPACE', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'ENTER'],
]

export const Keyboard = ({ handleClick }) => {
	const KeyLines = useCallback(() => {
		return keys.map(keyLine => (
			<KeyLine key={keyLine}>
				{keyLine.map(key =>
					key === 'SPACE' ? (
						<Space key={key} />
					) : (
						<Key
							key={key}
							large={key === 'ENTER'}
							onClick={() => handleClick(key)}>
							{key === 'BACK' ? <BackSVG /> : key}
						</Key>
					),
				)}
			</KeyLine>
		))
	}, [keys])

	return (
		<KeyboardContainer>
			<KeyLines />
		</KeyboardContainer>
	)
}

Keyboard.propTypes = {
	handleClick: PropTypes.func,
}
