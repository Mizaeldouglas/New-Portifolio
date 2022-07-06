import Link from 'next/link';
import { SectionTitle } from '../SectionTitle';
import ProjectItem from './ProjectItem';
import { Container } from './styles';

export function Project() {
  return (
    <Container>
      <SectionTitle title="Ultimos Projetos" />
      <section>
        <ProjectItem
          img="https://plusdin.com.br/box/uploads/2021/03/cinco-maos-segurando-o-cartao-Nubank.png"
          title="Projeto 01"
          type="website"
          slug="www.google.com"
        />
        <ProjectItem
          img="https://plusdin.com.br/box/uploads/2021/03/cinco-maos-segurando-o-cartao-Nubank.png"
          title="Projeto 02"
          type="website"
          slug="www.google.com"
        />

      </section>
      <button type="button">
        <Link href="/projetos">
          <a>Ver todos os Projetos</a>
        </Link>
      </button>
    </Container>
  );
}
