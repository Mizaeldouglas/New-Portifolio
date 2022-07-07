import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineWhatsApp
} from 'react-icons/ai';
import { Container, SocialMedia, Text } from './styles';

export function Footer() {
  return (
    <Container>
      <Text>
        <p>Feito Por MizaelDouglas</p>
      </Text>
      <SocialMedia>
        <a className="github">
          <AiFillGithub />
        </a>
        <a className="linkedin">
          <AiFillLinkedin />
        </a>
        <a className="whatsapp">
          <AiOutlineWhatsApp />
        </a>
      </SocialMedia>
    </Container>
  );
}
