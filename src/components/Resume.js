import React from 'react';
import { Box, Card, CardBody, Heading, Stack, Text, Button } from '@chakra-ui/react';

export default function Resume() {
  return (
    <Box h="80vh" display="flex" justifyContent="center" alignItems="center">
      <Box width="1000px">
      <Text as="h1" fontSize="6xl" fontWeight="bold" textAlign="center" mb={4}>
        Resume
      </Text>
        <Card id='aboutMe-card' variant="outline">
          <Stack spacing={6}>
            <CardBody m={4}>
              <Heading size="md" textAlign="left" mt={4} mb={2}>Front-end Development:</Heading>
              <ul>
                <li>
                  <Text py="2">
                    Advanced CSS styling
                  </Text>
                </li>
                <li>
                  <Text py="2">
                    Handlebar.js templating
                  </Text>
                </li>
                <li>
                  <Text py="2">
                    Fundamental HTML Design
                  </Text>
                </li>
                <li>
                  <Text py="2">
                    Single page application design e.g. React.js Development
                  </Text>
                </li>
                <li>
                  <Text py="2">
                    Github version control
                  </Text>
                </li>
              </ul>
              <Heading size="md" textAlign="left" mt={4} mb={2}>Back-end Development:</Heading>
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