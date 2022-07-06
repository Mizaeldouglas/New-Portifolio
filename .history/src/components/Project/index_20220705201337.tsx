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
  return (
    <Container>
      <SectionTitle title="Ultimos Projetos" />
      <section>
        {projetos.slice(0, 3).map(projeto => (
          <ProjectItem
            key={projeto.slug}
            img={projeto.thumbnail}
            title={projeto.title}
            type={projeto.type}
            slug={projeto.slug}
          />
        ))}
      </section>
      <button type="button">
        <Link href="/projetos">
          <a>Ver todos os Projetos</a>
        </Link>
      </button>
    </Container>
  );
}
