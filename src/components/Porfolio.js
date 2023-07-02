import React from 'react';
import { Box, Flex, Grid, GridItem, Image, Link } from '@chakra-ui/react';

export default function Portfolio() {
  const projects = [
    {
      title: 'Project 1',
      imageSrc: 'https://example.com/project1.jpg',
      deployedLink: 'https://example.com/project1',
      githubLink: 'https://github.com/user/project1',
    },
    // Add more projects here...
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