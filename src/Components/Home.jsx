import React from 'react'
import SimpleSlider from './Swiper'
import { Box, Container } from '@chakra-ui/react'
import Products from './Products'

const Home = () => {
  return (
    <>
    <Container maxW={'1440px'}>
        <Box my={'20px'}>
        <SimpleSlider/>
        <Products/>
        </Box>
    </Container>
    </>
  )
}

export default Home