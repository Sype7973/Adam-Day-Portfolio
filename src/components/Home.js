import React from 'react';
import { Box, Flex, Heading, Image, Stack } from '@chakra-ui/react';
import textEditor from '../assets/images/text-editor.png';

export default function Home() {
  return (
    <Flex className="content-container" p={8} align="center" justify="center" h="100vh">
      <Stack direction="row" align="center" spacing={4}>
        <Image borderRadius="full" boxSize="300px" src={textEditor} alt="computer-screen" />
        <Box>
          <Heading as="h1" size="xl">
            Adam Day Portfolio
          </Heading>
          <Box w="400px" h="4px" bg="black" mt={4} borderRadius="full" />
        </Box>
      </Stack>
    </Flex>
  );
}