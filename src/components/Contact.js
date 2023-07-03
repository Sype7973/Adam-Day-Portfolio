import React, { useState } from 'react';
import { Box, Heading, Input, Textarea, Button } from '@chakra-ui/react';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here
    // can access the form values via the 'name', 'email', and 'message' variables
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);

    // Reset the form fields
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <Box p={4}>
      <Heading as="h1" mb={4}>
        Contact
      </Heading>
      <Box borderWidth={1} borderRadius="md" p={4} mb={4}>
        <Heading as="h2" size="md" mb={2}>
          Name
        </Heading>
        <Input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </Box>
      <Box borderWidth={1} borderRadius="md" p={4} mb={4}>
        <Heading as="h2" size="md" mb={2}>
          Email
        </Heading>
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </Box>
      <Box borderWidth={1} borderRadius="md" p={4} mb={4}>
        <Heading as="h2" size="md" mb={2}>
          Message
        </Heading>
        <Textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
      </Box>
      <Button type="submit" onClick={handleSubmit}>
        Submit
      </Button>
    </Box>
  );
}