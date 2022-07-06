import Link from 'next/link';
import { SectionTitle } from '../SectionTitle';
import ProjectItem from './ProjectItem';
import { Container } from './styles';

interface IProjeto {
  slug: string;
  title: string;
  type: string;
  description: string;
  thumbnail: string;
}
interface ProjetosProps {
  projetos: IProjeto[];
}

export function Project({ projetos }: ProjetosProps) {
  console.log(projetos);
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
        <ProjectItem
          img="https://plusdin.com.br/box/uploads/2021/03/cinco-maos-segurando-o-cartao-Nubank.png"
          title="Projeto 03"
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
