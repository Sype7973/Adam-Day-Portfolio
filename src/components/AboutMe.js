import React from 'react';

import { Card, CardBody, CardFooter, Heading, Image, Stack, Text, Button } from '@chakra-ui/react';

// About Me card with picture
export default function AboutMe() {
  return (
    <Card direction={{ base: 'column', sm: 'row' }} overflow='hidden' variant='outline'>
      <Image
        objectFit='cover'
        maxW={{ base: '100%', sm: '200px' }}
        src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
        alt='Caffe Latte'
      />

      <Stack>
        <CardBody>
          <Heading size='md'>About Me</Heading>

          <Text py='2'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam accumsan diam eu lectus finibus, nec
            sodales lorem convallis. Nulla facilisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; Proin tincidunt ante ac neque fermentum finibus. Integer euismod maximus est ut
            ullamcorper. Proin posuere mi sed elementum eleifend.
          </Text>
        </CardBody>

        <CardFooter>
          <Button variant='solid' colorScheme='blue'>
            Learn More
          </Button>
        </CardFooter>
      </Stack>
    </Card>
  );
}