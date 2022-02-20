import PropTypes from 'prop-types'
import React, { useCallback, useEffect, useState } from 'react'
import { Container, Letter } from './styles'

export const Words = ({ pressedKey }) => {
	const [wordCount, setWordCount] = useState(0)
	const [letterCount, setLetterCount] = useState(0)
	const [words, setWords] = useState([
		['', '', '', '', ''],
		['', '', '', '', ''],
		['', '', '', '', ''],
		['', '', '', '', ''],
		['', '', '', '', ''],
		['', '', '', '', ''],
	])

	const handleAddLetter = useCallback(
		key => {
			if (letterCount < 5 && wordCount < 6) {
				setWords(state => {
					state[wordCount][letterCount] = key
					return state
				})

				setLetterCount(state => state + 1)
			}
		},
		[wordCount, letterCount],
	)

	const handleBackSpace = useCallback(() => {
		if (letterCount > 0) {
			setWords(state => {
				state[wordCount][letterCount - 1] = ''
				return state
			})

			setLetterCount(state => state - 1)
		}
	}, [letterCount, wordCount])

	const handleEnter = useCallback(() => {
		if (letterCount < 5) {
			return
		}

		setLetterCount(0)
		setWordCount(state => state + 1)
	}, [letterCount, wordCount])

	useEffect(() => {
		if (pressedKey) {
			const key = pressedKey.includes('Repeat')
				? pressedKey.split('_')[1]
				: pressedKey

			switch (key) {
				case 'Enter':
					handleEnter()
					break
				case 'Backspace':
					handleBackSpace()
					break
				default:
					handleAddLetter(key)
			}
		}
	}, [pressedKey])

	return (
		<Container>
			{words.map((word, idx) => {
				return word.map((letter, index) => (
					<Letter
						key={`letter_${idx}_${index}`}
						wrong={false}
						correct={false}
						present={false}>
						{letter}
					</Letter>
				))
			})}
		</Container>
	)
}

Words.propTypes = {
	pressedKey: PropTypes.string,
}
