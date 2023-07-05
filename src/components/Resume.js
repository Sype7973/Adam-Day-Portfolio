import React from 'react';
import { Box, Card, CardBody, Heading, Stack, Text, Button } from '@chakra-ui/react';

export default function Resume() {
  return (
    <Box h="100vh" display="flex" justifyContent="center" alignItems="center">
      <Box maxW="1000px">
        <Card id='aboutMe-card' variant="outline">
          <Stack spacing={4}>
            <CardBody>
              <Heading size="md" textAlign="center">Resume</Heading>
              <Heading size="sm" textAlign="left" mt={4} mb={2}>Front-end Development:</Heading>
              <ul>
                <li>
                  <Text py="2">
                    Advanced CSS styling
                  </Text>
                </li>
                <li>
                  <Text py="2">
                    Advanced CSS
                  </Text>
                </li>
              </ul>
              <Heading size="sm" textAlign="left" mt={4} mb={2}>Back-end Development:</Heading>
              <ul>
                <li>
                  <Text py="2">
                    Add your back-end development points here...
                  </Text>
                </li>
              </ul>
            </CardBody>
            <Box display="flex" justifyContent="center" mb= {4}>
              <Button colorScheme="red">Download Resume</Button>
            </Box>
          </Stack>
        </Card>
      </Box>
    </Box>
  );
}