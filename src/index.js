import React from 'react'
import ReactDOM from 'react-dom'

import * as serviceWorker from './serviceWorker'
import reportWebVitals from './reportWebVitals'
import App from './app'

ReactDOM.render(<App />, document.getElementById('root'))


reportWebVitals()


serviceWorker.unregister()
