import React from 'react'
import PropTypes from 'prop-types'

import { ReactComponent as BackSVG } from '../../assets/backspace-icon.svg'
import { KeyLine, Key, Space } from './styles'
import { useLetter } from '../../hooks/Letters'

const keys = [
	['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
	['Space', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Backspace'],
	['Space', 'Space', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'Enter'],
]

export const Keyboard = ({ handleClick }) => {
	const { wrongLetters, correctLetters, presentLetters } = useLetter()

	return keys.map(keyLine => (
		<KeyLine key={keyLine}>
			{keyLine.map((key, idx) =>
				key === 'Space' ? (
					<Space key={`${key}_${idx}`} />
				) : (
					<Key
						key={`${key}_${idx}`}
						large={key === 'Enter'}
						wrong={wrongLetters.includes(key)}
						correct={correctLetters.includes(key)}
						present={presentLetters.includes(key)}
						onClick={() => handleClick({ key })}>
						{key === 'Backspace' ? <BackSVG /> : key}
					</Key>
				),
			)}
		</KeyLine>
	))
}

Keyboard.propTypes = {
	handleClick: PropTypes.func,
}
