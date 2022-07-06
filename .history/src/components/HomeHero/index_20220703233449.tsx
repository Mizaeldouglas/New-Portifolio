/* eslint-disable react/jsx-no-comment-textnodes */
import { Container, TextContainer } from './styles';
import image from '../../assets/mizael.png';
import { InfoArea } from '../InfoArea';
import { OfficeArea } from '../OfficeArea';

export default function HomeHero() {
  return (
    <Container>
      <img src={image} alt="Perfil" />
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
