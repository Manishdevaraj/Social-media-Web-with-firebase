import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ChakraProvider, ColorModeScript} from '@chakra-ui/react'
import bg from './Service/ChakraTheme.jsx'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={bg}>
    <ColorModeScript   initialColorMode={bg.config.initialColorMode} />
     <BrowserRouter>
          <App />
     </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>,
)
