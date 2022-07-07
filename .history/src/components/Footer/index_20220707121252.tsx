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
        <a>
          <AiFillGithub />
        </a>
        <a>
          <AiFillLinkedin />
        </a>
        <a>
          <AiOutlineWhatsApp />
        </a>
      </SocialMedia>
    </Container>
  );
}
