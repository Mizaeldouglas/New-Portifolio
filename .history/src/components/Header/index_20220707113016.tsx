// import Prismic from '@prismicio/client';
// import { GetStaticPaths, GetStaticProps } from 'next';
import { Container } from './styles';
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
        <a href="https://drive.google.com/file/d/16IAsA4cZ0Kd_te4g5VwCkg7sgIgf4Kru/view?usp=sharing">Download CV</a>
      </div>
    </Container>
  );
}
