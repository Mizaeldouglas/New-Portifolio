/* eslint-disable react/jsx-no-comment-textnodes */
import { Container, TextContainer } from './styles';
import image from '../../assets/Mizael-4.png';
import { InfoArea } from '../InfoArea';
import { OfficeArea } from '../OfficeArea';

export default function HomeHero() {
  return (
    <Container data-aos="fade-up">
      <div className="curriculo">
      <img src={image} alt="Perfil" />
        <a
          href="https://drive.google.com/file/d/16IAsA4cZ0Kd_te4g5VwCkg7sgIgf4Kru/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          Download CV
        </a>
      </div>
      <div>
        <TextContainer>
          <h1>Olá</h1>
          <h2>Me Chamo Mizael</h2>
        </TextContainer>
        <InfoArea />
        <OfficeArea />
      </div>
    </Container>
  );
}
