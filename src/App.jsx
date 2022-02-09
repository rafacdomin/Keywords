import React from 'react'
import { Keyboard } from './components/Keyboard'

function App() {
	return (
		<>
			<header></header>

			<main>
				<section className="notification"></section>
				<section className="words"></section>
				<section className="keyboard">
					<Keyboard />
				</section>
			</main>
		</>
	)
}

export default App
