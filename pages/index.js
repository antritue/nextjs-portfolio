import Head from 'next/head';
import Header from '../components/Header.js';

import { useContext } from 'react';
import { ThemeContext } from '../contexts/theme';

import About from '../components/About.js';
import Projects from '../components/Projects.js';
import Skills from '../components/Skills.js';
import Contact from '../components/Contact.js';
import Footer from '../components/Footer.js';
import ScrollToTop from '../components/ScrollToTop.js';

import { GraphQLClient } from 'graphql-request';
import { PROJECTS } from '../utils/graphqlRequest';

const graphClient = new GraphQLClient(process.env.NEXT_PUBLIC_GRAPHQL_API);

export async function getStaticProps() {
  const { projects } = await graphClient.request(PROJECTS);
  return {
    props: {
      projects,
    },
  };
}

export default function Home({ projects }) {
  const [{ themeName }] = useContext(ThemeContext);
  return (
    <>
      <Head>
        <title>Tue An</title>
        <link
          href='https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap'
          rel='stylesheet'
        />
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.png' />
      </Head>

      <div id='top' className={`${themeName} app`}>
        <Header />
        <main>
          <About />
          <Projects projects={projects} />
          <Skills />
          <Contact />
        </main>

        <ScrollToTop />
        <Footer />
      </div>
    </>
  );
}
