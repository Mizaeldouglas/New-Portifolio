import Prismic from '@prismicio/client';
import { GetStaticProps } from 'next';
import { Container } from './styles';
import NavLink from './NavLink';
import { getPrismicClient } from '../../services/prismic';

interface Content {
  slug: string;
  curriculo: string;
}
interface ProjetosProps {
  content: Content;
}

export default function Header({ content }: ProjetosProps) {
  return (
    <Container>
      <ul>
        <NavLink title="Home" path="/" />
        <NavLink title="Projetos" path="/projetos" includes />
        <NavLink title="Sobre Mim" path="/sobre" />
      </ul>

      <div className="curriculo">
        <a href={content.curriculo}>Download CV</a>
      </div>
    </Container>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const projectResponse = await prismic.query([
    Prismic.Predicates.at('document.type', 'currirculos')
  ]);
  // console.log(projectResponse.results[0].type)

  const { curriculo } = projectResponse.results[0].data;

  const content = {
    slug: curriculo.uid,
    curriculo: curriculo.url
  };

  return {
    props: {
      content
    },
    revalidate: 60 * 2
  };
};
