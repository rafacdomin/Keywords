import React, {
	createContext,
	useState,
	useContext,
	useCallback,
	useEffect,
} from 'react'
import PropTypes from 'prop-types'

const LetterContext = createContext({})

export const LetterProvider = ({ children }) => {
	const [wrongLetters, setWrong] = useState([])
	const [correctLetters, setCorrect] = useState([])
	const [presentLetters, setPresent] = useState([])

	useEffect(() => {
		const storagedWrongLetters = localStorage.getItem('@Keywords:WrongLetters')
		const storagedCorrectLetters = localStorage.getItem(
			'@Keywords:CorrectLetters',
		)
		const storagedPresentLetters = localStorage.getItem(
			'@Keywords:PresentLetters',
		)

		if (storagedWrongLetters) {
			setWrong(JSON.parse(storagedWrongLetters))
		}

		if (storagedCorrectLetters) {
			setCorrect(JSON.parse(storagedCorrectLetters))
		}

		if (storagedPresentLetters) {
			setPresent(JSON.parse(storagedPresentLetters))
		}
	}, [])

	const updateWrong = useCallback(letter => {
		setWrong(state => {
			state = [...state, letter]
			localStorage.setItem('@Keywords:WrongLetters', JSON.stringify(state))
			return state
		})
	}, [])

	const updateCorrect = useCallback(letter => {
		setCorrect(state => {
			state = [...state, letter]
			localStorage.setItem('@Keywords:CorrectLetters', JSON.stringify(state))
			return state
		})
	}, [])

	const updatePresent = useCallback(letter => {
		setPresent(state => {
			state = [...state, letter]
			localStorage.setItem('@Keywords:PresentLetters', JSON.stringify(state))
			return state
		})
	}, [])

	return (
		<LetterContext.Provider
			value={{
				wrongLetters,
				updateWrong,
				correctLetters,
				updateCorrect,
				presentLetters,
				updatePresent,
			}}>
			{children}
		</LetterContext.Provider>
	)
}

LetterProvider.propTypes = {
	children: PropTypes.node,
}

export function useLetter() {
	const context = useContext(LetterContext)

	return context
}
