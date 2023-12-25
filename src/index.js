import React from 'react'
import ReactDOM from 'react-dom/client'

import '~/pages/general.scss'
import { Provider } from '~/routes'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<React.StrictMode>
		{Provider}
	</React.StrictMode>
)