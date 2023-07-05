import React from 'react';
import { Box, Flex, Link, Image, Text } from '@chakra-ui/react';
import VibeImage from '../assets/images/Vibe.png';
import PawesomeCareImage from '../assets/images/pawesomecare.png';
import ToDaysTechBlogImage from '../assets/images/Techblogposticon.png';
import noteTaker from '../assets/images/note-taker.png';
import textEditor from '../assets/images/texteditor.png';

// custom styles to on hover and show screenshots of projects

export default function Portfolio() {
  const projects = [
    {
      title: 'Vibe',
      imageSrc: VibeImage,
      deployedLink: 'https://example.com/project1',
      githubLink: 'https://github.com/Gator2-0/Vibe',
    },
    {
      title: 'PawesomeCare',
      imageSrc: PawesomeCareImage,
      deployedLink: 'https://example.com/project2',
      githubLink: 'https://github.com/Sype7973/PawsomeCare',
    },
    {
      title: 'Day-2-Day-Note-Taker',
      imageSrc: noteTaker,
      deployedLink: 'https://example.com/project3',
      githubLink: 'https://github.com/Sype7973/Day-2-Day-Note-Taker',
    },
    {
      title: 'Dayly-Text-Editor',
      imageSrc: textEditor,
      deployedLink: 'https://example.com/project4',
      githubLink: 'https://github.com/Sype7973/Dayly-Text-Editor',
    },
    {
      title: 'To-Day-s-Tech-Blog',
      imageSrc: ToDaysTechBlogImage,
      deployedLink: 'https://example.com/project5',
      githubLink: 'https://github.com/Sype7973/To-Day-s-Tech-Blog',
    },
  ];

  return (
    <Box className="content-container" py={8}>
      <Text as="h1" fontSize="6xl" fontWeight="bold" textAlign="center" mb={4}>
        Portfolio
      </Text>
      <Flex wrap="wrap" justifyContent="center" mt={8}>
        {projects.map((project, index) => (
          <Box key={index} maxW="450px" borderWidth="3px" borderRadius="lg" overflow="hidden" boxShadow="md" p={4} mx={2} mb={4}>
            <Link href={project.deployedLink} isExternal>
              <Image src={project.imageSrc} alt={project.title} />
            </Link>
            <Box mt={4}>
              <Text fontWeight="bold" fontSize="lg" textAlign="center">
                {project.title}
              </Text>
            </Box>
          </Box>
        ))}
      </Flex>
    </Box>
  );
}