import Prismic from '@prismicio/client';
import { GetStaticProps } from 'next';
import { Container } from './styles';
import NavLink from './NavLink';
import { getPrismicClient } from '../../services/prismic';

interface IProjeto {
  curriculo: string;
}
interface ProjetosProps {
  projetos: IProjeto;
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
        <a href={projetos.curriculo}>Download CV</a>
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

  const { curriculo } = response.results[0].data;

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
