// import Prismic from '@prismicio/client';
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
  projeto: IProjeto;
}

export default function Header() {
  return (
    <Container>
      <ul>
        <NavLink title="Home" path="/" />
        <NavLink title="Projetos" path="/projetos" includes />
        <NavLink title="Sobre Mim" path="/sobre" />
      </ul>

      <div className="curriculo">
        <a href={projetos.slug}>Download CV</a>
      </div>
    </Container>
  );
}

export const getStaticProps: GetStaticProps = async context => {
  const prismic = getPrismicClient();
  const { slug } = context.params;

  const response = await prismic.getByUID('projetos', String(slug), {});

  const projeto = {
    slug: response.uid,
    title: response.data.title,
    type: response.data.type,
    description: response.data.Descripton,
    link: response.data.ProjectOnline.url,
    thumbnail: response.data.Thumbmail.url
  };
  return {
    props: {
      projeto
    },
    revalidate: 86400
  };
};
