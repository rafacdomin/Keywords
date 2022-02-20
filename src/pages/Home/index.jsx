import React from 'react'
import { Keyboard } from '../../components/Keyboard'
import { Words } from '../../components/Words'

function Home() {
	return (
		<>
			<header></header>

			<main>
				<section className="notification"></section>
				<section className="words">
					<Words />
				</section>
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
