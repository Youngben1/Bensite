import React from 'react';
import Icon from '@chakra-ui/icon';
import { HStack } from '@chakra-ui/layout';
import { FaFacebookF, FaGoogle, FaSpotify } from 'react-icons/fa';


function Social() {
    return (
        <HStack spacing="24">
            <Icon as={ FaFacebookF} boxSize="30" />
            <Icon as={ FaGoogle} boxSize="30" />
            <Icon as={ FaSpotify} boxSize="30" />
        </HStack>
    )
}

export default Social
