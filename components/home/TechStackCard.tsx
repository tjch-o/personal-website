import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Image from 'next/image';

const techStack = [
    {
        name: 'Python',
        src: 'home/python.svg',
        alt: 'Python',
        url: 'https://www.python.org/',
    },
    {
        name: 'Java',
        src: 'home/java.svg',
        alt: 'Java',
        url: 'https://www.java.com/en/',
    },
    {
        name: 'JavaScript',
        src: 'home/javascript.svg',
        alt: 'JavaScript',
        url: 'https://www.javascript.com/',
    },
    {
        name: 'TypeScript',
        src: 'home/typescript.svg',
        alt: 'TypeScript',
        url: 'https://www.typescriptlang.org/',
    },
    {
        name: 'C',
        src: 'home/c.svg',
        alt: 'C',
        url: 'http://www.open-std.org/jtc1/sc22/wg14/www/docs/n1570.pdf',
    },
    {
        name: 'HTML',
        src: 'home/html.svg',
        alt: 'HTML5',
        url: 'https://developer.mozilla.org/en-US/docs/Glossary/HTML5',
    },
    {
        name: 'CSS',
        src: 'home/css.svg',
        alt: 'CSS',
        url: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
    },
    {
        name: 'Reactjs',
        src: 'home/reactjs.svg',
        alt: 'Reactjs',
        url: 'https://reactjs.org/',
    },
    {
        name: 'Bootstrap',
        src: 'home/bootstrap.svg',
        alt: 'Bootstrap',
        url: 'https://getbootstrap.com/',
    },
    {
        name: 'NextJs',
        src: 'home/nextjs.svg',
        alt: 'Nextjs',
        url: 'https://nextjs.org/',
    },
    {
        name: 'NodeJs',
        src: 'home/nodejs.svg',
        alt: 'Nodejs',
        url: 'https://nodejs.org/en/',
    },
    {
        name: 'ExpressJs',
        src: 'home/expressjs.svg',
        alt: 'Expressjs',
        url: 'https://expressjs.com/',
    },
    {
        name: 'PostgreSQL',
        src: 'home/postgresql.svg',
        alt: 'PostgreSQL',
        url: 'https://www.postgresql.org/',
    },
    {
        name: 'MongoDB',
        src: 'home/mongodb.svg',
        alt: 'MongoDB',
        url: 'https://www.mongodb.com/',
    },
    {
        name: 'Firebase',
        src: 'home/firebase.svg',
        alt: 'Firebase',
        url: 'https://firebase.google.com/',
    },
    { name: 'Git', src: 'home/git.svg', alt: 'Git', url: 'https://git-scm.com/' },
    { name: 'Linux', src: 'home/linux.svg', alt: 'Git', url: 'https://www.linux.org/' },
    { name: 'NumPy', src: 'home/numpy.svg', alt: 'NumPy', url: 'https://numpy.org/' },
    { name: 'Pandas', src: 'home/pandas.svg', alt: 'Pandas', url: 'https://pandas.pydata.org/' },
    { name: 'Pytorch', src: 'home/pytorch.svg', alt: 'Pytorch', url: 'https://pytorch.org/' }
];

const card = (
  <React.Fragment>
      <CardContent className="grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-10 mx-8">
          {techStack.map((tech) => (
              <a key={tech.name} href={tech.url} target="_blank" rel="noopener noreferrer">
                  <Image
                      src={`home/${tech.name.toLowerCase()}.svg`}
                      alt={tech.name}
                      width={100}
                      height={100}
                  />
              </a>
          ))}
      </CardContent>
  </React.Fragment>
);

function TechStackCard() {
  return (
      <div className="flex justify-center">
          <Box className="my-4" sx={{ minWidth: '80%' }}>
              <Card variant="outlined" sx={{ boxShadow: '0 4px 8px rgba(255, 255, 255, 0.5)' }}>
                  {card}
              </Card>
          </Box>
      </div>
  );
}

export default TechStackCard;
