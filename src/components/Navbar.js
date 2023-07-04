import React from 'react';
import { Link } from 'react-router-dom';
import { Flex, Text } from '@chakra-ui/react';

export default function Navbar() {
  const basePath = '';

  return (
    
    
    <Flex as="nav" align="center" justify="center" p={4} bg="#c5d5cb">
      <Flex align="center">
      </Flex>
      <Flex as="ul" listStyleType="none" ml={8}>
        <NavItem to={basePath + '/'}>Home</NavItem>
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
    <Text as="li" mx={2} fontSize="xl" fontWeight="bold">
      <Link to={to}>{children}</Link>
    </Text>
  );
}