import Prismic from '@prismicio/client';
import { GetStaticProps } from 'next';
import { Container } from './styles';
import NavLink from './NavLink';
import { getPrismicClient } from '../../services/prismic';

interface Content {
  slug: string;
}
interface ProjetosProps {
  projetos: Content;
}

export default function Header({ projetos }: ProjetosProps) {
  return (
    <Container>
      <ul>
        <NavLink title="Home" path="/" />
        <NavLink title="Projetos" path="/projetos" includes />
        <NavLink title="Sobre Mim" path="/sobre" />
      </ul>

      <div className="curriculo">
        <a href={projetos.slug}>Download CV</a>
      </div>
    </Container>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const projectResponse = await prismic.query([
    Prismic.Predicates.at('document.type', 'currirculos')
  ]);

  const projetos = projectResponse.results.map(projeto => ({
    slug: projeto.data.currirculos.url
  }));

  return {
    props: {
      projetos
    },
    revalidate: 86400
  };
};
