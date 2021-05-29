import React from 'react'
import { Box } from '@chakra-ui/core'
import From from './components/Form'

export default function App() {
  return (
    <Box
      bgColor="#f1f1f1"
      h="100%"
      display="flex"
      alignItems="center"
      justifyContent="center"
      pt="3%"
    >
     <From />
    </Box>
  )
}