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
import { PROJECTS, INFORMATION } from '../utils/graphqlRequest';

const graphClient = new GraphQLClient(process.env.NEXT_PUBLIC_GRAPHQL_API);

export async function getStaticProps() {
  const { projects } = await graphClient.request(PROJECTS);
  const { information } = await graphClient.request(INFORMATION, {
    id: process.env.NEXT_PUBLIC_INFORMATION_ID,
  });
  return {
    props: {
      information,
      projects,
    },
  };
}

export default function Home({ information, projects }) {
  const [{ themeName }] = useContext(ThemeContext);
  return (
    <>
      <Head>
        <title>{information.metaTitle}</title>
        <meta name='description' content={information.metaDesc} />
        <meta name='keywords' content={information.metaKeywords} />
        <link rel='icon' href='/favicon.png' />
      </Head>

      <div id='top' className={`${themeName} app`}>
        <Header />
        <main>
          <About information={information} />
          <Projects projects={projects} />
          <Skills skills={information.skills} />
          <Contact email={information.email} />
        </main>

        <ScrollToTop />
        <Footer src={information.portfolio} />
      </div>
    </>
  );
}
