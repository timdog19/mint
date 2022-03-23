import React from 'react'
import Routes from './routes'

import NavigationContextProvider from 'hook/Context/NavigationContext'
import { Web3Provider } from 'utils/Web3Provider'
import { Toaster } from 'react-hot-toast'

function App() {
  return (
    <div className="App">
      <Web3Provider>
        <NavigationContextProvider>
          <Routes />
        </NavigationContextProvider>
        <Toaster />
      </Web3Provider>
    </div>
  )
}

export default App
