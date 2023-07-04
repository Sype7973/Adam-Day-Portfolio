import React from 'react';
import { Box, Heading, Image } from '@chakra-ui/react';

export default function Home() {
  return (
    <Box p={8}>
      <Image
      borderRadius='full'
      boxSize='150px'
      src='https://bit.ly/dan-abramov'
      alt='Dan Abramov'
      />
      <Heading as="h1" size="xl" textAlign="center">
        Adam Day Portfolio
      </Heading>
    </Box>
  );
}