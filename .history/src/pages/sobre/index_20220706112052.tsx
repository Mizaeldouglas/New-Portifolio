import Head from 'next/head';
import { SobreContainer } from '../../styles/SobreStyles';

export default function Sobre() {
  return (
    <SobreContainer>
      <Head>
        <title>Sobre | Meu portfólio</title>
        <meta
          name="description"
          content="Sou um desenvolvedor Full-stack e aqui apresento alguns projetos desenvolvidos por mim!"
        />
        <meta property="og:image" content="/ogimage.png" />
        <meta property="og:image:secure_url" content="/ogimage.png" />
        <meta name="twitter:image" content="/ogimage.png" />
        <meta name="twitter:image:src" content="/ogimage.png" />
        <meta
          property="og:description"
          content="Sou um desenvolvedor Front-end e aqui apresento alguns projetos desenvolvidos por mim!"
        />
      </Head>
      <main>
        <h1>Mizael Douglas de Mello</h1>
        <p className="tecnologias">
          👨‍💼<span>Desenvolvedor Front-End:</span> Em Front-End eu possuo
          experiência com JavaScript, TypeScript, HTML, CSS, ReactJs,NextJS,
          React Native, Figma(construir site e aplicações baseadas em disigners
          do figma) e estudando mais para evoluir nas tecnologias.
        </p>
        <p className="tecnologias">
          👨‍💼<span>Desenvolvedor Back-End:</span> Em Back-End eu possuo
          experiência com JavaScript, TypeScript, node js, Java, Spring boot,
          SQL, bancos de dados e estudando mais para evoluir nas tecnologias
        </p>
        <p className="estudos">
          👨‍🎓 <span>O que estou estudando:</span> Atualmente estou cursando
          análise e desenvolvimento de sistema e fazendo projetos em ReactJS
          para adquirir conhecimento Material Ui , Styled-components e
          react-router-dom e também estudando NextJS com Typescript e nodeJS.
          Estou sempre em busca de adquirir conhecimento, seja para evoluir na
          tecnologias que eu já sei, como também adquirindo conhecimento sobre
          novas tecnologias. Não tenho experiência de trabalho na área de
          programação, mas tenho experiência de trabalhar em grupo que me
          permitiram desenvolver qualidades pessoais, como mentalidade
          colaborativa, bons relacionamentos com colegas de trabalhos e
          clientes,boa aceitação de feedback,análise critica e resolução de
          problemas.
        </p>
      </main>
    </SobreContainer>
  );
}
