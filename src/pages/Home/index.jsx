import React from 'react'
import { Keyboard } from '../../components/Keyboard'
import { Words } from '../../components/Words'
import { KeyboardSection, WordsSection } from './styles'

function Home() {
	const handleKeyDown = event => {
		console.log(event)
	}

	return (
		<>
			<header></header>

			<main>
				<section className="notification"></section>
				<WordsSection>
					<Words />
				</WordsSection>
				<KeyboardSection>
					<Keyboard handleClick={handleKeyDown} />
				</KeyboardSection>
			</main>
		</>
	)
}

export default Home
