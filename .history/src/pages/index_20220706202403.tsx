import { GetStaticProps } from 'next';
import Prismic from '@prismicio/client';
import { useEffect } from 'react';
import Aos from 'aos';
import { HomeContainer } from '../styles/HomeStyles';
import HomeHero from '../components/HomeHero';
import { Project } from '../components/Project';
import { getPrismicClient } from '../services/prismic';
import 'aos/dist/aos.css';
// eslint-disable-next-line import/order
import Head from 'next/head';

interface IProjeto {
  slug: string;
  title: string;
  type: string;
  description: string;
  link: string;
  thumbnail: string;
}
interface HomeProps {
  projetos: IProjeto[];
}

export default function Home({ projetos }: HomeProps) {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <HomeContainer>
      <Head>
        <title>Home | Meu portfólio</title>
        <meta
          name="description"
          content="Sou um desenvolvedor Full-stack e aqui apresento alguns projetos desenvolvidos por mim!"
        />
        <meta property="og:image" content="/ogimage.png" />
        <meta property="og:image:secure_url" content="/ogimage.png" />
        <meta name="twitter:image" content="/ogimage.png" />
        <meta name="twitter:image:src" content="/ogimage.png" />
        <meta
          property="og:description"
          content="Sou um desenvolvedor Front-end e aqui apresento alguns projetos desenvolvidos por mim!"
        />
      </Head>
      <main className="container">
        <HomeHero />
        <Project projetos={projetos} />
      </main>
    </HomeContainer>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const projectResponse = await prismic.query(
    [Prismic.Predicates.at('document.type', 'projetos')],
    { orderings: '[document.first_publication_date desc]' }
  );
  const projetos = projectResponse.results.map(item => ({
    slug: item.uid,
    title: item.data.title,
    type: item.data.type,
    description: item.data.Descripton,
    link: item.data.link.url,
    thumbnail: item.data.Thumbmail.url
  }));

  return {
    props: {
      projetos
    },
    revalidate: 60 * 2
  };
};
