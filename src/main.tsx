import { Box, ChakraProvider, Heading, Link } from '@chakra-ui/react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ChakraProvider>
    <Heading as="h1" size="xl" textAlign="center">
      Formik Chakra UI
    </Heading>
    <Box as="p" textAlign="center">
      Example using{" "}
      <Link href="https://github.com/kgnugur/formik-chakra-ui" isExternal>
        Formik Chakra UI{" "}
      </Link>
    </Box>
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  </ChakraProvider>
)
