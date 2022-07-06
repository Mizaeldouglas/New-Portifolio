import { GetStaticProps } from 'next';
import Prismic from '@prismicio/client';
import { ProjectItem } from '../../components/ProjectItem';
import { getPrismicClient } from '../../services/prismic';
import { ProjetosContainer } from '../../styles/ProjetosStyles';

export default function Projetos() {
  return (
    <ProjetosContainer>
      <main className="container">
        <ProjectItem
          title="Projeto 01"
          type="Website"
          slug="teste"
          imgUrl="https://plusdin.com.br/box/uploads/2021/03/cinco-maos-segurando-o-cartao-Nubank.png"
        />
      </main>
    </ProjetosContainer>
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
