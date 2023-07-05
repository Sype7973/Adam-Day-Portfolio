import React from 'react';
import { Box, Flex, Link, Image, Text } from '@chakra-ui/react';
import VibeImage from '../assets/images/Vibe.png';
import VibeScreenshot from '../assets/images/screenshots-main.png';
import PawesomeCareImage from '../assets/images/pawesomecare.png';
import PawesomeCareScreenshot from '../assets/images/pawesome-screenshot.png';
import ToDaysTechBlogImage from '../assets/images/Techblogposticon.png';
import ToDaysTechBlogScreenshot from '../assets/images/techblogpostscreen.PNG';
import noteTaker from '../assets/images/note-taker.png';
import noteTakerScreenshot from '../assets/images/note-taker-screencap.PNG';
import textEditor from '../assets/images/texteditor.png';
import textEditorScreenshot from '../assets/images/text-editor-screencap.PNG';


// custom styles to on hover and show screenshots of projects

export default function Portfolio() {
  const projects = [
    {
      title: 'Vibe',
      imageSrc: VibeImage,
      deployedLink: 'https://example.com/project1',
      githubLink: 'https://github.com/Gator2-0/Vibe',
      screenshotSrc: VibeScreenshot,
    },
    {
      title: 'PawesomeCare',
      imageSrc: PawesomeCareImage,
      deployedLink: 'https://example.com/project2',
      githubLink: 'https://github.com/Sype7973/PawsomeCare',
      screenshotSrc: PawesomeCareScreenshot,
    },
    {
      title: 'Day-2-Day-Note-Taker',
      imageSrc: noteTaker,
      deployedLink: 'https://example.com/project3',
      githubLink: 'https://github.com/Sype7973/Day-2-Day-Note-Taker',
      screenshotSrc: noteTakerScreenshot
    },
    {
      title: 'Dayly-Text-Editor',
      imageSrc: textEditor,
      deployedLink: 'https://example.com/project4',
      githubLink: 'https://github.com/Sype7973/Dayly-Text-Editor',
      screenshotSrc: textEditorScreenshot,
    },
    {
      title: 'To-Day-s-Tech-Blog',
      imageSrc: ToDaysTechBlogImage,
      deployedLink: 'https://example.com/project5',
      githubLink: 'https://github.com/Sype7973/To-Day-s-Tech-Blog',
      screenshotSrc: ToDaysTechBlogScreenshot,
    },
  ];

  return (
    <Box className="content-container" py={8}>
      <Text as="h1" fontSize="6xl" fontWeight="bold" textAlign="center" mb={4}>
        Portfolio
      </Text>
      <Flex wrap="wrap" justifyContent="center" mt={8}>
        {projects.map((project, index) => (
          <Box id ="portfolio-projects" key={index} maxW="450px" borderWidth="3px" borderRadius="lg" overflow="hidden" boxShadow="md" p={4} mx={2} mb={4}>
            <Link href={project.deployedLink} isExternal>
              <Image src={project.imageSrc} alt={project.title}/>
              <Image
                src={project.screenshotSrc}
                alt={project.title}
                className="project-screenshot"
              />
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