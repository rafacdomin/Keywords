import React from 'react'
import { Keyboard } from '../../components/Keyboard'

function Home() {
	return (
		<>
			<header></header>

			<main>
				<section className="notification"></section>
				<section className="words"></section>
				<section className="keyboard">
					<Keyboard
						handleClick={key => {
							console.log(key)
						}}
					/>
				</section>
			</main>
		</>
	)
}

export default Home
