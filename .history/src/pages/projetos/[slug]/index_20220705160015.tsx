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
        type="teste"
        imgUrl="https://plusdin.com.br/box/uploads/2021/03/cinco-maos-segurando-o-cartao-Nubank.png"
      />
      <main>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, quidem
          amet. Neque pariatur magnam ducimus aliquid recusandae rem veritatis
          deleniti corrupti odit enim, delectus officiis minima sapiente!
          Possimus eius nulla ipsum doloremque minima. Aliquid minus explicabo
          alias quis autem veritatis recusandae ipsam ratione repudiandae
          eveniet? Tempora, quod repudiandae. Dolore earum quos et sit eum
          voluptas rerum aliquam esse illo soluta, debitis atque suscipit optio
          eos sequi vero consectetur! Labore, obcaecati soluta.
        </p>
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
    revalidate: 60 * 2
  };
};
