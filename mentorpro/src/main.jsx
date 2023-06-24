import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import {ContextProvider} from './components/Context/userContext/Context.jsx'
import {UiContextProvider} from './components/Context/ProfileContext/ProfileContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextProvider>
    <UiContextProvider>
    <App />
    </UiContextProvider>
    <ToastContainer />
    </ContextProvider>
  </React.StrictMode>,
)
