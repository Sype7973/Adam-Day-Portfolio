import React from 'react';
import { Box, Grid, GridItem, Image, Link } from '@chakra-ui/react';

export default function Portfolio() {
  const projects = [
    {
        // placedholder code for design, adding projects after
      title: 'Vibe',
      imageSrc: '../public/images/Vibe.png',
      deployedLink: 'https://example.com/project1',
      githubLink: 'https://github.com/Gator2-0/Vibe',
    },
    // Add more projects here...
    {
      title: 'PawesomeCare',
      imageSrc: '../public/images/PawesomeCare.png',
      deployedLink: 'https://example.com/project2',
      githubLink: 'https://github.com/Sype7973/PawsomeCare'
    }
  ];

  return (
    <Box py={8}>
      <h1>Portfolio</h1>
      <Grid templateColumns="repeat(auto-fit, minmax(200px, 1fr))" gap={6} mt={8}>
        {projects.map((project, index) => (
          <GridItem key={index}>
            <Link href={project.deployedLink} target="_blank" rel="noopener noreferrer">
              <Image src={project.imageSrc} alt={project.title} />
            </Link>
            <Box mt={2} textAlign="center">
              <Link href={project.deployedLink} target="_blank" rel="noopener noreferrer">
                Deployed App
              </Link>
              <br />
              <Link href={project.githubLink} target="_blank" rel="noopener noreferrer">
                GitHub Repo
              </Link>
            </Box>
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
}