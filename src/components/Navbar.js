// header and navigation bar for the website
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Flex, Text, Box } from '@chakra-ui/react';

export default function Navbar() {
  const basePath = '';

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      p={4}
      bg="black"
      borderBottom="2px solid white"
      height="100px"
    >
      <Box>
        <Text as="h1" fontSize="2xl" fontWeight="bold" color="white" >
          Adam Day
        </Text>
      </Box>
      <Flex as="ul" id='navbar-content' listStyleType="none" mx="auto" justify="center" pr={120} >
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
    <Text as="li" mx={2} fontSize="xl" fontWeight="bold" border="2px solid white" p={3} borderRadius={20}>
      <NavLink to={to} activeclassname="active">
        {children}
      </NavLink>
    </Text>
  );
}
