import React from 'react';
import { Box, Center, Card, CardBody, Stack, Image, Text } from '@chakra-ui/react';
import profilePicture from '../assets/images/profileimage.jpg';

// custom styles variable to place an image in a box above the card
const customStyles = {
  image: {
    borderRadius: '50%',
    border: '2px solid #c5d5cb',
    margin: '20px auto',
    float: 'center',
    width: '250px',
    height: '250px',
  },
  heading: {
    textAlign: 'center',
  },
};

export default function AboutMe() {
  return (
    <Box className ='content-container'   py={8}>
      <Image id='aboutMe-image' style ={customStyles.image}
        borderRadius='full'
        boxSize='250px'
        objectFit={'cover'}
        src={profilePicture}
        alt='Dan Abramov'
      />
      <Center>
        <Box maxW="1000px" m={4} >
          <Card id ='aboutMe-card'variant="outline">
            <Stack>
              <CardBody m={4}>
              <Text as="h1" fontSize="6xl" fontWeight="bold" textAlign="center" mb={4}>
                About Me
              </Text>
                <Text py="2">
                  Hi, my name is Adam. I am 29 years old. I am a gamer, average nerd, and musician, and I enjoy everything tech.
                  My love for new technology stems from my admiration for sci-fi. As a teenager, I avidly read "Do Androids Dream of Electric Sheep"
                  and dreamed of becoming a sci-fi writer. However, I soon realized that I wanted to be a part of real-world innovation rather than
                  just writing about imaginary technology.
                </Text>
                <Text py="2">
                  Currently, I work for an energy-efficient product manufacturer that specializes in creating a range of innovative products,
                  including an Energy Management App, aimed at state legislated Energy Efficiency schemes. In my role, I have the opportunity to
                  explore exciting possibilities within program development, and I aspire to make meaningful contributions to the renewable energy sector.
                </Text>
                <Text py="2">
                  While my passion for technology has led me to where I am today, my resume will reveal that I have also gained valuable experience
                  in various fields including, product support and customer service management, where i built CRM's for my employer. Family is of great importance to me, and growing up with three intelligent siblings has taught me valuable lessons
                  that I continue to apply in my life.
                </Text>
                <Text py="2">
                
                </Text>
                <Text as="h2" py="2">
                  Some fun facts about me:
                </Text>
                <ul>
                  <li>
                    <Text py="2">
                      I enjoy singing and recording music, and my mother has been in a band for over 30 years. &#127926;
                    </Text>
                  </li>
                  <li>
                    <Text py="2">
                      I have a passion for travel and have lived in Belarus for several months. I have also had the opportunity to live in Japan for multiple months at a time. &#127833;
                    </Text>
                  </li>
                  <li>
                    <Text py="2">
                      I organize a men's mental health talk every Wednesday/Thursday where we provide a safe space to discuss our anxieties and relieve stress.
                    </Text>
                  </li>
                  <li>
                    <Text py="2">
                      Maintaining a healthy fitness routine is important to me, despite my love for indulging in delicious food.
                    </Text>
                  </li>
                  <li>
                    <Text py="2">
                      I have built my own gaming PCs since I was young and have always enjoyed the process of assembling and optimizing them.
                    </Text>
                  </li>
                  <li>
                    <Text py="2">
                      I am a fan of Warhammer, both Fantasy and 40k. Although I'm not a skilled painter, I am captivated by the lore and world-building aspects of the hobby.
                    </Text>
                    <Text fontSize ="2xl" py="2">
                    I hope you enjoy exploring my portfolio. &#128513;
                    </Text>
                  </li>
                </ul>
              </CardBody>
            </Stack>
          </Card>
        </Box>
      </Center>
    </Box>
    
  );
}