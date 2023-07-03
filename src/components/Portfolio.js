import React from 'react';
import { Box, Grid, GridItem, Link, Image, Text} from '@chakra-ui/react';
import VibeImage from '../assets/images/Vibe.png';
import PawesomeCareImage from '../assets/images/pawesomecare.png';

export default function Portfolio() {
  const projects = [
    {
      title: 'Vibe',
      imageSrc: VibeImage,
      deployedLink: 'https://example.com/project1',
      githubLink: 'https://github.com/Gator2-0/Vibe',
    },
    // Add more projects here...
    {
      title: 'PawesomeCare',
      imageSrc: PawesomeCareImage,
      deployedLink: 'https://example.com/project2',
      githubLink: 'https://github.com/Sype7973/PawsomeCare',
    },
  ];

  return (
    <Box py={8}>
      <Text as="h1" fontSize="2xl" fontWeight="bold" mb={4}>
        Portfolio
      </Text>
      <Grid templateColumns="repeat(auto-fit, minmax(200px, 1fr))" gap={6} mt={8}>
        {projects.map((project, index) => (
          <GridItem key={index}>
            <Link href={project.deployedLink} isExternal>
              <Box maxW="300px" borderWidth="1px" borderRadius="md" overflow="hidden" boxShadow="md" p={4}>
                <Image src={project.imageSrc} alt={project.title} />
                <Box mt={4}>
                  <Text fontWeight="bold" fontSize="lg">
                    {project.title}
                  </Text>
                  <Link href={project.deployedLink} isExternal>
                    Deployed App
                  </Link>
                  <Link href={project.githubLink} isExternal>
                    GitHub Repo
                  </Link>
                </Box>
              </Box>
            </Link>
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
}