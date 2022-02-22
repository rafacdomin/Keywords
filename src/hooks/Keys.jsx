import React, {
	createContext,
	useContext,
	useCallback,
	useEffect,
	useState,
} from 'react'
import PropTypes from 'prop-types'

const availableKeys = [
	'Q',
	'W',
	'E',
	'R',
	'T',
	'Y',
	'U',
	'I',
	'O',
	'P',
	'A',
	'S',
	'D',
	'F',
	'G',
	'H',
	'J',
	'K',
	'L',
	'BACKSPACE',
	'Z',
	'X',
	'C',
	'V',
	'B',
	'N',
	'M',
	'ENTER',
]

const KeysContext = createContext({})

export const KeyProvider = ({ children }) => {
	const [pressedKey, setPressedKey] = useState()

	const handleKeyDown = useCallback(event => {
		if (event.key === 'Tab') {
			return event.preventDefault()
		}

		if (event.shiftKey || event.ctrlKey) {
			return
		}

		const keyExists = availableKeys.find(key => key === event.key.toUpperCase())
		if (keyExists) {
			setPressedKey(state =>
				state === event.key.toUpperCase()
					? `REPEAT_${event.key.toUpperCase()}`
					: event.key.toUpperCase(),
			)
		}
	}, [])

	useEffect(() => {
		const eventListener = event => handleKeyDown(event)
		document.addEventListener('keydown', eventListener)
		return () => {
			document.removeEventListener('keydown', eventListener)
		}
	}, [handleKeyDown])

	return (
		<KeysContext.Provider
			value={{
				handleKeyDown,
				pressedKey,
			}}>
			{children}
		</KeysContext.Provider>
	)
}

KeyProvider.propTypes = {
	children: PropTypes.node,
}

export function useKey() {
	const context = useContext(KeysContext)

	return context
}
