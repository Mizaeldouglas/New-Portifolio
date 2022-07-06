import Prismic from '@prismicio/client';
import { GetStaticProps } from 'next';
import { Container } from './styles';
import NavLink from './NavLink';
import { getPrismicClient } from '../../services/prismic';

interface Content {
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

  const response = await prismic.query([
    Prismic.Predicates.at('document.type', 'curriculo')
  ]);

  // console.log(response.results[0].data);

  const { curriculo } = response.results[0].type;

  const content = {
    curriculo: curriculo.url
  };

  return {
    props: {
      content
    },
    revalidate: 60 * 2
  };
};
