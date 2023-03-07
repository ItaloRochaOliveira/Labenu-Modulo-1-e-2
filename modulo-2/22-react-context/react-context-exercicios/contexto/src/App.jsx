import { useState } from 'react'
import './App.css'
import { Router } from './route/Route'
import { GlobalProvider } from './context/GlobalContext'

function App() {

  return (
    <GlobalProvider>
        <Router />
    </GlobalProvider>
  )
}

export default App
