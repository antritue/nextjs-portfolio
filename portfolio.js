const header = {
  homepage: 'https://antritue.github.io/react-portfolio/',
  title: 'Portfolio',
};

const about = {
  name: 'Tue An',
  role: 'Full Stack Developer',
  description:
    "My name is An Nam Hoang Tri Tue and I am a full stack web developer. I have worked with several front-end and back-end technologies. Currently my skillset has me focus on front-end development, but I'm ready to tackle any challenge.",
  resume:
    'https://drive.google.com/file/d/1PsxFCE9QYao2oWB9EyCbQMprs_Rz82jl/view',
  social: {
    linkedin: 'https://www.linkedin.com/in/tue-an/',
    github: 'https://github.com/antritue',
  },
};

const projects = [
  {
    name: 'Blog',
    description:
      'A SEO blog under active development built with Next.js, GraphQL and Hygraph CMS',
    stack: ['Next.js, GraphQL, Hygraph CMS'],
    sourceCode: 'https://github.com/antritue/blog',
    livePreview: 'https://kimngan.blog/',
  },
  {
    name: 'Covid-19 Tracker',
    description:
      'A website to track new cases, recovers and deaths of Covid-19 worldwide',
    stack: ['React, Material UI, React Leaflet, Chart JS'],
    sourceCode: 'https://github.com/antritue/covid-19-tracker',
    livePreview: 'https://covid-19-tracker-cbd40.web.app/',
  },
  {
    name: 'Easy Chat',
    description: 'A simple chat application built with Next.js and Chat Engine',
    stack: ['Next.js, Chat Engine'],
    sourceCode: 'https://github.com/antritue/nextjs-chat',
    livePreview: 'https://nextjs-chat-livid.vercel.app/',
  },
  {
    name: 'Memory Card Game',
    description:
      'The objective of the game is to collect all matching pairs within the time frame',
    stack: ['HTML', 'CSS', 'Javascript'],
    sourceCode: 'https://github.com/antritue/memory-card-game',
    livePreview: 'https://antritue.github.io/memory-card-game/',
  },
];

const skills = [
  'HTML5',
  'CSS3',
  'JavaScript',
  'React',
  'Serverless Framwork',
  'Next.js',
  'React Native',
  'Node.js',
  'Git',
  'Github',
  'AWS',
  'Azure',
  'MySQL',
  'MongoDB',
];

const contact = {
  email: 'antritue@mail.com',
};

export { header, about, projects, skills, contact };
