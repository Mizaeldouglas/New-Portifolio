import Link from 'next/link';
import { useRouter } from 'next/router';
import { NavLinkContainer } from './styles';

interface Props {
  title: string;
  path: string;
  includes?: boolean;
}

export default function navLink({ title, path, includes = false }: Props) {
  const router = useRouter();

  function verifyIfIsActive() {
    if (includes) {
      return router.pathname.includes(path);
    }
    return path === router.pathname;
  }

  const isActive = verifyIfIsActive();

  return (
    <>
      <NavLinkContainer isActive={isActive}>
        <Link href={path}>
          <a>{title}</a>
        </Link>
      </NavLinkContainer>
      <a
        href="https://drive.google.com/file/d/16IAsA4cZ0Kd_te4g5VwCkg7sgIgf4Kru/view?usp=sharing"
        target="_blank"
        rel="noreferrer"
      >
        Download CV
      </a>
    </>
  );
}
