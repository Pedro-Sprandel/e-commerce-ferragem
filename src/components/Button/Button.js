import React from 'react';
import { Button as ChakraButton, Flex, Text } from '@chakra-ui/react';

export const Button = (props) => {
    const { title, bgColor, color } = props;

    return (
        <ChakraButton p="0" {...props}>
            <Flex w="full" h="full" px="2" rounded="base" backgroundColor={bgColor} alignItems="center">
                <Text color={color}>{title}</Text>
            </Flex>
        </ChakraButton>
    );
};  