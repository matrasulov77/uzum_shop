import { Box, Button, Container, Flex, Image, Input, Text } from '@chakra-ui/react'
import logo from '../../Assets/Svg_pic/image.svg'
import React from 'react'
import { FaSearch } from "react-icons/fa";
import { CiHeart, CiShoppingCart, CiUser} from "react-icons/ci";

const Header2 = () => {
  return (
    <Box>
        <Container maxW={'1440px'}>
          <Flex justify={'space-between'} align={'center'} height={'60px'}>
            <Flex gap={'20px'}>
                <Image src={logo} width={'200px'}/>
            </Flex>
            <Flex gap={2}>
                <Button border={'1px solid #5C5CD6'} bg={'#5C5CD6'} color={'white'}>Katalog</Button>
                <Flex border={'1px solid black'} width={'500px'} align={'center'}>
                    <Input placeholder='Mahsulotlar va turkumlar izlash' border={'none'}/>
                    <FaSearch style={{width:'70px', background: "rgba(118, 121, 127, 0.05)"}}/>
                </Flex>
            </Flex>
            <Flex gap={'30px'}>
                <Flex align={'center'} gap={2}>
                 <CiUser/>
                 <Text>Kirish</Text>
                </Flex>
                <Flex align={'center'} gap={2}>
                 <CiHeart/>
                 <Text>Saralanganlar</Text>
                </Flex>
                <Flex align={'center'} gap={2}>
                 <CiShoppingCart/>
                 <Text>Savatcha</Text>
                </Flex>
            </Flex>
          </Flex>
        </Container>
    </Box>
  )
}

export default Header2