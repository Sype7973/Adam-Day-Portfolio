import React from 'react';
import { Box, Card, CardBody, Heading, Text, Button, Link } from '@chakra-ui/react';

export default function Resume() {
    const resumeLink =
    'https://drive.google.com/file/d/1m4VKzPAAbNq6-eameEAIx3Uucrfnjxg3/view?usp=sharing'

  return (
    <Box py={8} px={4} m={4}>
      <Box maxWidth="1000px" margin="0 auto">
        <Text as="h1" fontSize="6xl" fontWeight="bold" textAlign="center" mb={4}>
          Resume
        </Text>
        <Card id="aboutMe-card" variant="outline">
          <CardBody p={6} m={4}>
            <Heading size="md" textAlign="left" mt={4} mb={2}>
              Front-end Development:
            </Heading>
            <ul>
              <li>Advanced CSS styling</li>
              <li>Handlebar.js templating</li>
              <li>Fundamental HTML Design</li>
              <li>Single page application design (e.g., React.js Development)</li>
              <li>Github version control</li>
              <li>
                Javascript fundamentals and advanced concepts (Object Oriented Programming, Functional Programming,
                Asynchronous Programming, etc.)
              </li>
            </ul>

            <Heading size="md" textAlign="left" mt={4} mb={2}>
              Back-end Development:
            </Heading>
            <ul>
              <li>Web API design</li>
              <li>
                Third-party API integration (e.g., Google Maps API, OpenWeather API, etc.) and RESTful API design
              </li>
              <li>Server side development using Node.js and Express.js</li>
              <li>MySQL and Sequelize ORM</li>
              <li>MVC design pattern</li>
              <li>NoSQL and MongoDB and Mongoose ODM</li>
              <li>PWA development</li>
            </ul>
            <Heading size="md" textAlign="left" mt={4} mb={2}>
              Other Skills:
            </Heading>
            <ul>
                <li>Project management</li>
                <li>Teamwork</li>
                <li>Communication</li>
                <li>Problem solving</li>
                <li>Time management</li>
                <li>Leadership</li>
                <li>Customer service</li>
                <li>Willingness to Learn</li>
            </ul>
            <Text as="h1" fontSize="xl" fontWeight="bold" textAlign="center" mb={4} mt={4}>
                    Please feel free to access my resume using the link below, and if you have any questions, click the contact link above to send me a message!
            </Text>
          </CardBody>
          <Box display="flex" justifyContent="center" mb={4}>
            <Link href={resumeLink} isExternal>
              <Button colorScheme="red">Download Resume</Button>
            </Link>
          </Box>
        </Card>
      </Box>
    </Box>
  );
};
