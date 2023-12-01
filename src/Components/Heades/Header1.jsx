import { Box, Container, Flex, Image, Link, Select, Text } from "@chakra-ui/react";
import React from "react";
import { CiLocationOn } from "react-icons/ci";
import flag from '../../Assets/Svg_pic/Frame.svg'

const Header1 = () => {
  return (
    <Box width={'100%'} bg={'#F4F5F5'}>
      <Container maxW={'1440px'}>
      <Flex align={'center'} height={'32px'} justify={'space-between'}>
        <Flex align={'center'} fontSize={'14px'}>
          <CiLocationOn />
          <Text>Shahar:</Text> 
          <Link>Tashkent</Link>
          <Text px={'20px'}>Topshirish punktlari</Text>
        </Flex>
         <Flex>
            <Text>Buyurtmangizni 1 kunda bepul yetkazib beramiz!</Text>
         </Flex>
         <Flex gap={'10px'}>
            <Text>Savol-javoblar</Text>
            <Text>Buyurtmalarim</Text>
            <Flex align={'center'}>
             <Image src={flag}/>
             <Select border={'none'} height={'20px'}>
                <option>O'zbekcha</option>
             </Select>
            </Flex>
         </Flex>
      </Flex>
      </Container>
    </Box>
  );
};

export default Header1;
