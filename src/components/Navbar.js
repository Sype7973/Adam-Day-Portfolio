import React from 'react';
import { Link } from 'react-router-dom';
import { Flex, Text } from '@chakra-ui/react';

export default function Navbar() {
  const basePath = '';

  return (
    <Flex as="nav" align="center" justify="space-between" p={4} bg="gray.200">
      <Flex align="center">
        <Text as="h1" fontWeight="bold" fontSize="xl">
          Adam Day Portfolio
        </Text>
      </Flex>
      <Flex as="ul" listStyleType="none" ml={8}>
        <NavItem to={basePath + '/about'}>Home</NavItem>
        <NavItem to={basePath + '/about'}>About Me</NavItem>
        <NavItem to={basePath + '/resume'}>Resume</NavItem>
        <NavItem to={basePath + '/portfolio'}>Portfolio</NavItem>
        <NavItem to={basePath + '/contact'}>Contact</NavItem>
      </Flex>
    </Flex>
  );
}

function NavItem({ to, children }) {
  return (
    <Text as="li" mx={2}>
      <Link to={to}>{children}</Link>
    </Text>
  );
}