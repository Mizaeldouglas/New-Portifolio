import Prismic from '@prismicio/client';
import { GetStaticPaths, GetStaticProps } from 'next';
import { Container } from './styles';
import NavLink from './NavLink';
import { getPrismicClient } from '../../services/prismic';

interface IProjeto {
  slug: string;
  link: string;
}
interface ProjetosProps {
  curriculo: IProjeto;
}

export default function Header({ curriculo }: ProjetosProps) {
  return (
    <Container>
      <ul>
        <NavLink title="Home" path="/" />
        <NavLink title="Projetos" path="/projetos" includes />
        <NavLink title="Sobre Mim" path="/sobre" />
      </ul>
      <div className="curriculo">
        <a href={curriculo.link}>Download CV</a>
      </div>
    </Container>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const prismic = getPrismicClient();
  const curriculo = await prismic.query([
    Prismic.predicates.at('document.type', 'currirculo')
  ]);
  console.log(curriculo)
  const paths = curriculo.results.map(projeto => ({
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

  const curriculo = {
    slug: response.uid,
    link: response.data.curriculo.url
  };
  return {
    props: {
      curriculo
    },
    revalidate: 86400
  };
};