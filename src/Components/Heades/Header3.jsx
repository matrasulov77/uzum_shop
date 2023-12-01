import { Box, Container, Flex, Select } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Header3 = () => {
  return (
    <>
    <Container maxW={'1440px'}>
        <Flex align={'center'} gap={'25px'} justify={'space-between'}>
            <Link>Elektronika</Link>
            <Link>Maishiy</Link>
            <Link>Kiyim</Link>
            <Link>Poyabzallar</Link>
            <Link>Goʻzallik</Link>
            <Link>Salomatlik</Link>
            <Link>Uy-roʻzgʻor buyumlari</Link>
            <Link>Avtotovarlar</Link>
            <Link>Bolalar tovarlari</Link>
            <Select width={'90px'} height={'30px'} border={'none'}>
                <option value="yana">Yana</option>
            </Select>
        </Flex>
    </Container>
    </>
  )
}

export default Header3