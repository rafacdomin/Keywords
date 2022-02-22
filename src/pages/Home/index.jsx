import React from 'react'
import { Keyboard } from 'components/Keyboard'
import { Words } from 'components/Words'
import { Header } from 'components/Header'
import { Main } from './styles'
import { useKey } from 'hooks/Keys'

function Home() {
	const { handleKeyDown, pressedKey } = useKey()

	return (
		<>
			<Header />

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
