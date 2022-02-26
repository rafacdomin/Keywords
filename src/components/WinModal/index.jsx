import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { MdShare } from 'react-icons/md'
import { Modal } from 'components/Modal'

import { Container, Stats } from './styles'

export const WinModal = props => {
	const [timer, setTimer] = useState()
	const [diffTime, setDiffTime] = useState(() => {
		const date1 = new Date()
		const date2 = new Date(new Date().setHours(24, 0, 0, 0))

		const diffTime = Math.abs(date2 - date1)

		return diffTime
	})
	const [stat] = useState({
		games: {
			value: 0,
			label: 'Jogos',
		},
		victories: {
			value: '0%',
			label: 'Vitórias',
		},
		victorySequence: {
			value: 0,
			label: 'Sequência de Vitórias',
		},
		bestSequence: {
			value: 0,
			label: 'Melhor Sequência',
		},
	})

	const startTimer = useCallback(() => {
		if (!timer) {
			setTimer(
				setInterval(() => {
					setDiffTime(state => state - 1000)
				}, 1000),
			)
		}
	}, [timer])

	useEffect(() => {
		startTimer()
	}, [])

	const Statistics = useMemo(() => {
		return Object.values(stat).map(({ value, label }) => (
			<div key={label}>
				<h2> {value} </h2>
				<p> {label} </p>
			</div>
		))
	}, [stat])

	const Countdown = useMemo(() => {
		const diffHours = Math.floor(diffTime / (1000 * 60 * 60))
		const diffMinutes = Math.floor(
			(diffTime / (1000 * 60 * 60) - diffHours) * 60,
		)
		const diffSeconds = Math.floor(
			((diffTime / (1000 * 60 * 60) - diffHours) * 60 - diffMinutes) * 60,
		)

		const hour = diffHours < 10 ? `0${diffHours}` : diffHours
		const minutes = diffMinutes < 10 ? `0${diffMinutes}` : diffMinutes
		const seconds = diffSeconds < 10 ? `0${diffSeconds}` : diffSeconds

		return `${hour}:${minutes}:${seconds}`
	}, [diffTime])

	return (
		<Modal {...props}>
			<Container>
				<section className="statistics">
					<h1>Estatísticas</h1>
					<Stats>{Statistics}</Stats>
				</section>
				<section className="graphic"></section>
				<section className="share">
					<div>
						<p>Próxima palavra em</p>
						<strong>{Countdown}</strong>
					</div>

					<button>
						Compartilhe <MdShare />
					</button>
				</section>
			</Container>
		</Modal>
	)
}

WinModal.propTypes = {
	...Modal.propTypes,
}
