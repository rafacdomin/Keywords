import React from 'react'
import Home from 'pages/Home'
import GlobalStyle from 'styles/global'
import { CustomProvider } from 'hooks'

function App() {
	return (
		<CustomProvider>
			<GlobalStyle />
			<Home />
		</CustomProvider>
	)
}

export default App
