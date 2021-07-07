import React from 'react';
import { Stack, Flex, Box, Text, useColorMode, useMediaQuery, Button, Image } from '@chakra-ui/react';
import logo from './Image/noface.jpeg';

function Header() {

    const { colorMode } = useColorMode();
    const isDark = colorMode === "dark";

    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");

    return (
        <Stack>
            {/* <Circle position="absolute" bg="blue.100" opacity="0.1" */}
                {/* w="300px" h="300px" alignSelf="flex-end" /> */}
                <Flex direction={isNotSmallerScreen ? "row" : "column"}
                    spacing="200px" p={isNotSmallerScreen ? "32" : "0"}
                    alignself="flex-start">
                        <Box mt={isNotSmallerScreen ? "0" : 16} align='flex-start'>
                            <Text fontSize="3xl" fontWeight="semibold">Hello, I am</Text>
                            <Text fontSize="6xl" fontWeight="bold" bgGradient="linear(to-r, cyan.400, blue.500, purple.600)" bgClip='text' >Benjamin Renny</Text>
                            <Text color={isDark ? "gray.200" : "gray.500"}>Entreprenuer, Fish Farmer, Dog Owner, Self Taught Front End Developer</Text>
                            <Button mt={8} colorScheme="red">Hire me</Button>
                        </Box>
                        <Image alignself="center" mt={isNotSmallerScreen ? "0" : "12"}
                            mb={isNotSmallerScreen ? "0" : "12"} borderRadius='full'
                            backgroundColor="transparent" boxShadow="lg"
                            boxSize="300px" src={logo} />
                    </Flex>

        </Stack>
    )
}

export default Header
