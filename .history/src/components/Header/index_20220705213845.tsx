import { GetStaticProps } from 'next';
import Prismic from '@prismicio/client';
import { Container } from './styles';
import NavLink from './NavLink';
import { getPrismicClient } from '../../services/prismic';

function Header() {
  return (
    <Container>
      <ul>
        <NavLink title="Home" path="/" />
        <NavLink title="Projetos" path="/projetos" includes />
        <NavLink title="Sobre Mim" path="/sobre" />
      </ul>
      <div className="curriculo">
        <a>Download CV</a>
      </div>
    </Container>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const projectResponse = await prismic.query([
    Prismic.Predicates.at('document.type', 'curriculo')
  ]);

  const projetos = projectResponse.results.map(item => ({
    slug: item.data.curriculo.url
  }));
  console.log(projetos);
  return {
    props: {
      // projetos
    },
    revalidate: 60 * 2
  };
};

export default Header;
