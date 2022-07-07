import Prismic from '@prismicio/client';
import { GetStaticProps } from 'next';
import { Container } from './styles';
import NavLink from './NavLink';
import { getPrismicClient } from '../../services/prismic';

interface IProjeto {
  slug: string;
  title: string;
  type: string;
  description: string;
  link: string;
  thumbnail: string;
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

      <div className="curriculo">
        <a href={projeto.link}>Download CV</a>
      </div>
    </Container>
  );
}
export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const projectResponse = await prismic.query(
    [Prismic.Predicates.at('document.type', 'projetos')],
    { orderings: '[document.first_publication_date desc]' }
  );
  const projeto = projectResponse.results.map(item => ({
    slug: item.uid,
    title: item.data.title,
    type: item.data.type,
    description: item.data.Descripton,
    link: item.data.ProjectOnline.link_type,
    thumbnail: item.data.Thumbmail.url
  }));

  return {
    props: {
      projeto
    },
    revalidate: 60 * 2
  };
};
