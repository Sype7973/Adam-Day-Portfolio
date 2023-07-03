import React from 'react';
import { Flex, Link } from '@chakra-ui/react';

export default function Footer() {
  return (
    <footer>
      <Flex justify="center" py={4}>
        <Link href="mailto:adam.day7973@gmail.com" mx={2}>
          <img src="https://img.icons8.com/color/48/000000/gmail.png" alt="Email" />
          Email
        </Link>
        <Link href="https://github.com/Sype7973" target="_blank" rel="noopener noreferrer" mx={2}>
          <img src="https://img.icons8.com/color/48/000000/github--v1.png" alt="GitHub" />
          GitHub
        </Link>
        <Link href="https://au.linkedin.com/in/adam-day-lightineasy" target="_blank" rel="noopener noreferrer" mx={2}>
          <img src="https://img.icons8.com/color/48/000000/linkedin.png" alt="LinkedIn" />
          LinkedIn
        </Link>
      </Flex>
    </footer>
  );
}