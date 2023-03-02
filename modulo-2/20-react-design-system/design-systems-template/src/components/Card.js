import {
    Heading,
    Avatar,
    Box,
    Center,
    Image,
    Flex,
    Text,
    Stack,
    Button,
    useColorModeValue,
    Link,
    Badge,
  } from '@chakra-ui/react';
  
  export default function Card(props) {
    return (
        <Center py={6} >
            <Box
            maxW={'320px'}
            minH="500px"
            w={'full'}
            bg={useColorModeValue('white', 'gray.900')}
            boxShadow={'2xl'}
            rounded={'lg'}
            p={6}
            textAlign={'center'}
            position="relative">
                <Avatar
                size={'xl'}
                src={
                    `https://i.pravatar.cc/200?u=${props.user.name}`
                }
                alt={'Avatar Alt'}
                mb={4}
                pos={'relative'}
                _after={{
                    content: '""',
                    w: 4,
                    h: 4,
                    bg: 'green.300',
                    border: '2px solid white',
                    rounded: 'full',
                    pos: 'absolute',
                    bottom: 0,
                    right: 3,
                }}
                />
                <Heading fontSize={'2xl'} fontFamily={'body'}>
                {props.user.name}
                </Heading>
                <Text fontWeight={600} color={'gray.500'} mb={4}>
                @{props.user.name}
                </Text>
                <Text
                textAlign={'center'}
                color={useColorModeValue('gray.700', 'gray.400')}
                px={3}>
                about:
                </Text>
                <Text
                textAlign={'center'}
                color={useColorModeValue('gray.700', 'gray.400')}
                px={3}
                mb="30px">
                {props.user.company.catchPhrase}
                </Text>
                <Text
                textAlign={'center'}
                color={useColorModeValue('gray.700', 'gray.400')}
                px={3}>
                website: <Link href={'#'}>{props.user.website}</Link>
                </Text>
                <Text
                textAlign={'center'}
                color={useColorModeValue('gray.700', 'gray.400')}
                px={3}>
                telephone: <Link href={'#'}>{props.user.phone}</Link>
                </Text>
                <Text
                textAlign={'center'}
                color={useColorModeValue('gray.700', 'gray.400')}
                px={3}
                mb="30px">
                email: <Link href={'#'}>{props.user.email}</Link>
                </Text>
            
                <Stack mt={8} direction={'row'} spacing={4}>
                <Button
                    position={"absolute"}
                    bottom="5"
                    w={"90%"}
                    _focus={{
                    bg: 'gray.200',
                    }}>
                    Message
                </Button>
                
                </Stack>
          </Box>
        </Center>
      );
    }