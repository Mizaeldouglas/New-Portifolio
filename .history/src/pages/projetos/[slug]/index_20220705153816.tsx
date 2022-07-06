import { GetStaticProps } from 'next';
import Prismic from '@prismicio/client';
import { BannerProjeto } from '../../../components/BannerProjeto';
import { getPrismicClient } from '../../../services/prismic';
import { ProjectContainer } from '../../../styles/ProjectStyles';

export default function Project() {
  return (
    <ProjectContainer>
      <BannerProjeto
        title="Projeto 01"
        type="teste"
        imgUrl="https://plusdin.com.br/box/uploads/2021/03/cinco-maos-segurando-o-cartao-Nubank.png"
      />
      <main>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, quidem
          amet. Neque pariatur magnam ducimus aliquid recusandae rem veritatis
          deleniti corrupti odit enim, delectus officiis minima sapiente!
          Possimus eius nulla ipsum doloremque minima. Aliquid minus explicabo
          alias quis autem veritatis recusandae ipsam ratione repudiandae
          eveniet? Tempora, quod repudiandae. Dolore earum quos et sit eum
          voluptas rerum aliquam esse illo soluta, debitis atque suscipit optio
          eos sequi vero consectetur! Labore, obcaecati soluta.
        </p>
        <button type="button">
          <a href="#">Ver Projeto Online</a>
        </button>
      </main>
    </ProjectContainer>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const projectResponse = await prismic.query(
    [Prismic.Predicates.at('document.type', 'projetos')],
    { orderings: '[document.first_publication_date desc]' }
  );
  const projetos = projectResponse.results.map(item => ({
    slug: item.uid,
    title: item.data.title,
    type: item.data.type,
    description: item.data.Descripton,
    thumbnail: item.data.Thumbmail.url
  }));

  return {
    props: {
      projetos
    },
    revalidate: 60 * 2
  };
};
