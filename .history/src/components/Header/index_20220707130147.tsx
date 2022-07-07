import { useRouter } from 'next/router';
import { Container } from './styles';
import NavLink from './NavLink';

interface Props {
  path: string;
  includes?: boolean;
}

export default function Header({ path, includes = false }: Props) {
  const router = useRouter();

  function verifyIfIsActive() {
    if (includes) {
      return router.pathname.includes(path);
    }
    return path === router.pathname;
  }

  const isActive = verifyIfIsActive();

  return (
    <Container isActive={isActive}>
      <ul>
        <NavLink title="Home" path="/" />
        <NavLink title="Projetos" path="/projetos" includes />
        <NavLink title="Sobre Mim" path="/sobre" />
      </ul>
    </Container>
  );
}
