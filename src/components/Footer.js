import React from 'react';
import { Flex, Link, Text } from '@chakra-ui/react';

export default function Footer() {
  return (
    <footer>
      <Flex justify="center" py={4}>
        <Text>Connect with me:</Text>
        <Link href="mailto:adam.day7973@gmail.com" mx={2}>
          Email
        </Link>
        <Link href="https://github.com/Sype7973" target="_blank" rel="noopener noreferrer" mx={2}>
          GitHub
        </Link>
        <Link href="https://au.linkedin.com/in/adam-day-lightineasy" target="_blank" rel="noopener noreferrer" mx={2}>
          LinkedIn
        </Link>
      </Flex>
    </footer>
  );
}