import React from 'react'
import { LetterProvider } from 'hooks/Letters'
import Home from 'pages/Home'
import GlobalStyle from 'styles/global'

function App() {
	return (
		<LetterProvider>
			<GlobalStyle />
			<Home />
		</LetterProvider>
	)
}

export default App
