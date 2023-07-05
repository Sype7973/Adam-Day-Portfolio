import React, { useState } from 'react';
import { Box, Heading, Text, Input, Textarea, Button } from '@chakra-ui/react';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitMessage, setSubmitMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if any fields are empty
    if (!name || !email || !message) {
      setSubmitMessage('Sorry! Please fill out all the fields');
      return;
    }

    // Perform form submission logic here
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);

    // Reset the form fields
    setName('');
    setEmail('');
    setMessage('');
    setSubmitMessage('Thank you for your message! I will get back to you as soon as possible.');
  };

  return (
    <Box className="content-container" p={4}>
              <Text as="h1" fontSize="6xl" fontWeight="bold" textAlign="center" mb={4}>
                Contact
              </Text>
      <Box borderWidth={1} borderRadius="md" p={4} mb={4}>
        <Heading as="h2" size="md" mb={2}>
          Name
        </Heading>
        <Input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </Box>
      <Box borderWidth={1} borderRadius="md" p={4} mb={4}>
        <Heading as="h2" size="md" mb={2}>
          Email
        </Heading>
        <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </Box>
      <Box borderWidth={1} borderRadius="md" p={4} mb={4}>
        <Heading as="h2" size="md" mb={2}>
          Message
        </Heading>
        <Textarea value={message} onChange={(e) => setMessage(e.target.value)} required />
      </Box>
      {submitMessage && <p>{submitMessage}</p>}
      <Button type="submit" onClick={handleSubmit}>
        Submit
      </Button>
    </Box>
  );
}