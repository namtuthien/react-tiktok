import React from 'react'
import ReactDOM from 'react-dom/client'

import General from '~/pages/General'
import { Provider } from '~/routes'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<React.StrictMode>
		<General>{Provider}</General>
	</React.StrictMode>
)