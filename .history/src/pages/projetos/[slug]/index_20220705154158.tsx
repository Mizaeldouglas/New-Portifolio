import { GetStaticProps } from 'next';
import Prismic from '@prismicio/client';
import { BannerProjeto } from '../../../components/BannerProjeto';
import { getPrismicClient } from '../../../services/prismic';
import { ProjectContainer } from '../../../styles/ProjectStyles';

interface IProjeto {
  slug: string;
  title: string;
  type: string;
  description: string;
  thumbnail: string;
}
interface ProjetosProps {
  projetos: IProjeto[];
}

export default function Project({ projetos }: ProjetosProps) {
  return (
    <>
      {projetos.map(projeto => (
        <ProjectContainer>
          <BannerProjeto
            title={projeto.title}
            type={projeto.type}
            imgUrl={projeto.thumbnail}
          />
          <main>
            <p>{projeto.description}</p>
            <button type="button">
              <a href="#">Ver Projeto Online</a>
            </button>
          </main>
        </ProjectContainer>
      ))}
    </>
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
