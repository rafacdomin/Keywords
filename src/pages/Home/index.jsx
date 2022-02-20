import React, { useCallback, useEffect, useState } from 'react'
import { Keyboard } from '../../components/Keyboard'
import { Words } from '../../components/Words'
import { Main } from './styles'

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

function Home() {
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
				state === event.key ? `Repeat_${event.key}` : event.key,
			)
		}
	}, [])

	useEffect(() => {
		const eventListener = event => handleKeyDown(event)
		window.addEventListener('keydown', eventListener)
		return () => {
			window.removeEventListener('keydown', eventListener)
		}
	}, [handleKeyDown])

	return (
		<>
			<header></header>

			<Main>
				<section className="notification"></section>
				<section>
					<Words pressedKey={pressedKey} />
				</section>
				<section>
					<Keyboard handleClick={handleKeyDown} />
				</section>
			</Main>
		</>
	)
}

export default Home
