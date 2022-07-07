// import Prismic from '@prismicio/client';
// import { GetStaticPaths, GetStaticProps } from 'next';
import { Container } from './styles';
import NavLink from './NavLink';
import { useRouter } from 'next/router';
// import { getPrismicClient } from '../../services/prismic';

interface Props {
  title: string;
  path: string;
  includes?: boolean;
}

export default function Header({ title, path, includes = false }: Props) {
  const router = useRouter();

  function verifyIfIsActive() {
    if (includes) {
      return router.pathname.includes(path);
    }
    return path === router.pathname;
  }

  const isActive = verifyIfIsActive();

  return (
    <Container sActive={isActive}>
      <ul>
        <NavLink title="Home" path="/" />
        <NavLink title="Projetos" path="/projetos" includes />
        <NavLink title="Sobre Mim" path="/sobre" />
      </ul>
      <div className="curriculo">
        <a
          href="https://drive.google.com/file/d/16IAsA4cZ0Kd_te4g5VwCkg7sgIgf4Kru/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          Download CV
        </a>
      </div>
    </Container>
  );
}
