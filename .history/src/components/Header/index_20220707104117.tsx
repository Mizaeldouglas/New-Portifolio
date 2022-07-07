import Prismic from '@prismicio/client';
import { GetStaticProps } from 'next';
import { Container } from './styles';
import NavLink from './NavLink';
import { getPrismicClient } from '../../services/prismic';

interface IProjeto {
  link: string;
}
interface ProjetosProps {
  projeto: IProjeto[];
}

export default function Header({ projeto }: ProjetosProps) {
  return (
    <Container>
      <ul>
        <NavLink title="Home" path="/" />
        <NavLink title="Projetos" path="/projetos" includes />
        <NavLink title="Sobre Mim" path="/sobre" />
      </ul>

      {projeto.map(projetos => (
        <div className="curriculo">
          <a href={projetos.link}>Download CV</a>
        </div>
      ))}
    </Container>
  );
}
export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const projectResponse = await prismic.query([
    Prismic.Predicates.at('document.type', 'currirculo')
  ]);
  const projeto = projectResponse.results.map(item => ({
    link: item.data.ProjectOnline.url
  }));

  return {
    props: {
      projeto
    },
    revalidate: 60 * 2
  };
};
