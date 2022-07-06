import { GetStaticProps } from 'next';
import Prismic from '@prismicio/client';
import { HomeContainer } from '../styles/HomeStyles';
import HomeHero from '../components/HomeHero';
import { Project } from '../components/Project';
import { getPrismicClient } from '../services/prismic';
import { useEffect } from 'react';
import Aos from 'aos';

interface IProjeto {
  slug: string;
  title: string;
  type: string;
  description: string;
  thumbnail: string;
}
interface HomeProps {
  projetos: IProjeto[];
}

export default function Home({ projetos }: HomeProps) {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <HomeContainer>
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
    thumbnail: item.data.Thumbmail.url
  }));

  return {
    props: {
      projetos
    },
    revalidate: 60 * 2
  };
};
