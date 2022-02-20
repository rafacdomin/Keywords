import React, { useState } from 'react'
import { Container, Letter } from './styles'

export const Words = () => {
	const [words] = useState([
		['', '', '', '', ''],
		['', '', '', '', ''],
		['', '', '', '', ''],
		['', '', '', '', ''],
		['', '', '', '', ''],
		['', '', '', '', ''],
	])

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
