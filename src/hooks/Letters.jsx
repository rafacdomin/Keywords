import React, { createContext, useState, useContext } from 'react'
import PropTypes from 'prop-types'

const LetterContext = createContext({})

export const LetterProvider = ({ children }) => {
	const [wrongLetters, setWrong] = useState([])
	const [correctLetters, setCorrect] = useState([])
	const [presentLetters, setPresent] = useState([])

	return (
		<LetterContext.Provider
			value={{
				wrongLetters,
				setWrong,
				correctLetters,
				setCorrect,
				presentLetters,
				setPresent,
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
