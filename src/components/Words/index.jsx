import PropTypes from 'prop-types'
import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { Container, Letter } from './styles'
import { useLetter } from '../../hooks/Letters'

export const Words = ({ pressedKey }) => {
	const { wrongLetters, setWrong, setCorrect, setPresent } = useLetter()
	const [dailyWord] = useState('arara')
	const [wordCount, setWordCount] = useState(0)
	const [letterCount, setLetterCount] = useState(0)
	const [results, setResults] = useState([])
	const [words, setWords] = useState([
		['', '', '', '', ''],
		['', '', '', '', ''],
		['', '', '', '', ''],
		['', '', '', '', ''],
		['', '', '', '', ''],
		['', '', '', '', ''],
	])

	const testWord = useCallback(
		word => {
			const letters = word.split('')
			const dailyLetters = dailyWord.toUpperCase().split('')
			const result = []

			for (let i = 0; i < dailyLetters.length; i++) {
				if (letters[i] === dailyLetters[i]) {
					result[i] = 'correct'
					dailyLetters[i] = null
					setCorrect(state => [...state, letters[i]])
				} else if (dailyLetters.includes(letters[i])) {
					result[i] = 'present'
					setPresent(state => [...state, letters[i]])
				} else {
					result[i] = 'wrong'
					if (!wrongLetters.includes(letters[i])) {
						setWrong(state => [...state, letters[i]])
					}
				}
			}

			setResults(state => {
				state[wordCount] = result
				return state
			})

			if (
				!dailyWord.localeCompare(word, 'pt-br', {
					sensitivity: 'base',
				})
			) {
				console.log('You Win')
			}
		},
		[dailyWord, wordCount],
	)

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

		testWord(words[wordCount].join([]))
		setLetterCount(0)
		setWordCount(state => state + 1)
	}, [letterCount, wordCount])

	useEffect(() => {
		if (pressedKey) {
			const key = pressedKey.includes('REPEAT')
				? pressedKey.split('_')[1]
				: pressedKey

			switch (key) {
				case 'ENTER':
					handleEnter()
					break
				case 'BACKSPACE':
					handleBackSpace()
					break
				default:
					handleAddLetter(key)
			}
		}
	}, [pressedKey])

	const letterProps = useMemo(() => {
		return words.map((word, idx) => {
			return word.map((_, index) => {
				if (results.length > idx) {
					return {
						wrong: results[idx][index] === 'wrong',
						correct: results[idx][index] === 'correct',
						present: results[idx][index] === 'present',
					}
				}
			})
		})
	}, [wordCount])

	return (
		<Container>
			{words.map((word, idx) => {
				return word.map((letter, index) => {
					return (
						<Letter key={`letter_${idx}_${index}`} {...letterProps[idx][index]}>
							{letter}
						</Letter>
					)
				})
			})}
		</Container>
	)
}

Words.propTypes = {
	pressedKey: PropTypes.string,
}
