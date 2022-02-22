import React from 'react'
import PropTypes from 'prop-types'
import { KeyProvider } from './Keys'
import { LetterProvider } from './Letters'

export const CustomProvider = ({ children }) => {
	return (
		<KeyProvider>
			<LetterProvider>{children}</LetterProvider>
		</KeyProvider>
	)
}

CustomProvider.propTypes = {
	children: PropTypes.node,
}
