import { Box } from '@chakra-ui/react'
import React from 'react'
import Header1 from './Heades/Header1'
import Header2 from './Heades/Header2'
import Header3 from './Heades/Header3'

const Header = () => {
  return (
    <Box boxShadow={'1px 1px #424242'}>
        <Header1/>
        <Header2/>
        <Header3/>
    </Box>
  )
}

export default Header