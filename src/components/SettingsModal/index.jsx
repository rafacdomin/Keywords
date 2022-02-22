import React from 'react'
import { Modal } from 'components/Modal'
import { Container } from './styles'

export const SettingsModal = props => {
	return (
		<Modal {...props}>
			<Container>
				<fieldset>
					<p>
						<label htmlFor="contrast">
							<span>Alto Contraste</span>
							<small>Para aumentar a visibilidade das cores</small>
						</label>
						<input
							type="checkbox"
							name="contrast"
							id="contrast"
							defaultValue={false}
						/>
					</p>
					<p>
						<label htmlFor="hardMode">
							<span>Modo Díficil</span>
							<small>Dicas reveladas devem ser usadas nas tentativas</small>
						</label>
						<input
							type="checkbox"
							name="hardMode"
							id="hardMode"
							defaultValue={false}
						/>
					</p>
					<p>
						<label htmlFor="darkTheme">Tema Escuro</label>
						<input
							type="checkbox"
							name="darkTheme"
							id="darkTheme"
							defaultValue={false}
						/>
					</p>
				</fieldset>
				<section>
					<p>
						<strong>Keywords</strong> é um jogo baseado em{' '}
						<a
							href="https://www.nytimes.com/games/wordle/index.html"
							target="_blank"
							rel="noreferrer">
							Wordle
						</a>
						.
					</p>
					<p>
						Feito com 💛 por{' '}
						<a
							href="https://rafaeldomingues.dev"
							target="_blank"
							rel="noreferrer">
							Rafael Domingues
						</a>
					</p>
				</section>
			</Container>
		</Modal>
	)
}

SettingsModal.propTypes = {
	...Modal.propTypes,
}
