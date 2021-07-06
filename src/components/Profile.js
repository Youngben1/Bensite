import React from 'react'
import { useMediaQuery } from '@chakra-ui/media-query';
import { Flex, Box, Heading, Text } from '@chakra-ui/layout';
import Icon from '@chakra-ui/icon';
import { DiReact, DiSafari, DiMongodb } from 'react-icons/di'


function Profile() {

    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");


    return (
        <Flex direction={isNotSmallerScreen ? "row" : "column"} w="100%"
            maxWidth={{ base: "100vh", md: "130vh", lg: "130vh", xl:"130vh" }}>
            <Box alingself="center" px="32" py="16">
                <Heading fontWeight="extrabold" color="cyan.500" size="4xl">
                    1+
                </Heading>
                <Text fontSize="2xl" color="gray.400">Year(s) of Experience</Text>
            </Box>
            <Box alingself="center" px="32" py="16">
                <Text fontWeight="bold" fontSize="2xl">Self Taught Developer, conversant with html,css and Javascript, React over Next, haha.</Text>
                <Flex direction={isNotSmallerScreen ? "row" : "column"} mt={8} >
                    <Flex rounded="xl" direction="column" mt={4} bg="blue.400" h="30vh" w="30vh" justify="flex-end">
                        <Icon> color="teal" p="4" as={DiReact} w="24" h="24" </Icon>
                        <Text color="black" p="4" fontSize="xl" fontWeight="semibold">  
                            React   
                        </Text>
                    </Flex>

                    <Flex rounded="xl" direction="column" mt={4} bg="blue.400" h="30vh" w="30vh" justify="flex-end" _hover={{bg: "yellow.400", }}>
                        <Icon> color="teal" p="4" as={DiSafari} w="24" h="24" </Icon>
                        <Text color="black" p="4" fontSize="xl" fontWeight="semibold">  
                              Safari
                        </Text>
                    </Flex>

                    <Flex rounded="xl" direction="column" mt={4} bg="blue.400" h="30vh" w="30vh" justify="flex-end" _hover={{bg: "yellow.400", }}>
                        <Icon> color="teal" p="4" as={DiMongodb} w="24" h="24" </Icon>
                        <Text color="black" p="4" fontSize="xl" fontWeight="semibold">  
                            MongoDb
                        </Text>
                    </Flex>

                </Flex>


            </Box>
        </Flex>
    )
}

export default Profile
