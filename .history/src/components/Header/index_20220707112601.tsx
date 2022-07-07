// import Prismic from '@prismicio/client';
// import { GetStaticPaths, GetStaticProps } from 'next';
import { Container } from './styles';
import curriculo from '../../assets/curriculo.pdf';
import NavLink from './NavLink';
// import { getPrismicClient } from '../../services/prismic';

export default function Header() {
  return (
    <Container>
      <ul>
        <NavLink title="Home" path="/" />
        <NavLink title="Projetos" path="/projetos" includes />
        <NavLink title="Sobre Mim" path="/sobre" />
      </ul>
      <div className="curriculo">
        <a href={curriculo}>Download CV</a>
      </div>
    </Container>
  );
}
