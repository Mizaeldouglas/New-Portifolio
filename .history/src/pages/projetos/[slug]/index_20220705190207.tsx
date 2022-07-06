import { GetStaticPaths, GetStaticProps } from 'next';
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
  projeto: IProjeto;
}

export default function Project({ projeto }: ProjetosProps) {
  return (
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
  );
}

export const getStactiPaths: GetStaticPaths = async () => {
  const prismic = getPrismicClient();
  const projetos = await prismic.query([
    Prismic.Predicates.at('document.type', 'projetos')
  ]);

  const paths = projetos.results.map(projeto => ({
    params: {
      slug: projeto.uid
    }
  }));

  console.log(paths);

  return {
    paths,
    fallback: true
  };
};

export const getStaticProps: GetStaticProps = async context => {
  const prismic = getPrismicClient();
  const { slug } = context.params;

  const response = await prismic.getByUID('projetos', String(slug), {});

  const projeto = {
    slug: response.uid,
    title: response.data.title,
    type: response.data.type,
    description: response.data.Descripton,
    thumbnail: response.data.Thumbmail.url
  };

  return {
    props: {
      projeto
    },
    revalidate: 86400
  };
};
