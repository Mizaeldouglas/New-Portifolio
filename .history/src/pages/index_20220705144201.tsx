import { GetStaticProps } from 'next';
import Prismic from '@prismicio/client';
import { HomeContainer } from '../styles/HomeStyles';
import HomeHero from '../components/HomeHero';
import { Project } from '../components/Project';
import { getPrismicClient } from '../services/prismic';

export default function Home() {
  return (
    <HomeContainer>
      <main className="container">
        <HomeHero />
        <Project />
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
    link: item.data.ProjectOnline.url,
    thumbnail: item.data.Thumbmail.url
  }));

  return {
    props: {
      projetos
    },
    revalidate: 86488
  };
};
