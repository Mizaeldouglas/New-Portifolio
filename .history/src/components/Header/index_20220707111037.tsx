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
  projeto: IProjeto;
}

export default function Header({ projeto }: ProjetosProps) {
  return (
    <Container>
      <ul>
        <NavLink title="Home" path="/" />
        <NavLink title="Projetos" path="/projetos" includes />
        <NavLink title="Sobre Mim" path="/sobre" />
      </ul>
      <div className="curriculo">
        <a href={projeto.link}>Download CV</a>
      </div>
    </Container>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const prismic = getPrismicClient();
  const projetos = await prismic.query([
    Prismic.predicates.at('document.type', 'curriculo')
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

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const response = await prismic.getByUID('document.type', 'curriculo');

  const projeto = {
    slug: response.uid,
    link: response.data.link.url
  };
  return {
    props: {
      projeto
    },
    revalidate: 86400
  };
};
