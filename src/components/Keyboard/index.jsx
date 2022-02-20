import React, { useCallback } from 'react'
import PropTypes from 'prop-types'

import { ReactComponent as BackSVG } from '../../assets/backspace-icon.svg'
import { KeyLine, Key, Space } from './styles'

const keys = [
	['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
	['Space', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Backspace'],
	['Space', 'Space', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'Enter'],
]

export const Keyboard = ({ handleClick }) => {
	const KeyLines = useCallback(() => {
		return keys.map(keyLine => (
			<KeyLine key={keyLine}>
				{keyLine.map((key, idx) =>
					key === 'Space' ? (
						<Space key={`${key}_${idx}`} />
					) : (
						<Key
							key={`${key}_${idx}`}
							large={key === 'Enter'}
							onClick={() => handleClick({ key })}>
							{key === 'Backspace' ? <BackSVG /> : key}
						</Key>
					),
				)}
			</KeyLine>
		))
	}, [keys])

	return <KeyLines />
}

Keyboard.propTypes = {
	handleClick: PropTypes.func,
}
