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
        <a
          className="github"
          href="https://github.com/Mizaeldouglas"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillGithub />
        </a>
        <a
          className="linkedin"
          href="https://www.linkedin.com/in/mizael-douglas-aa850a216/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillLinkedin />
        </a>
        <a
          className="whatsapp"
          href="https://api.whatsapp.com/send?phone=5519995283104&text=WhatsApp%20do%20MizaelDouglas"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiOutlineWhatsApp />
        </a>
      </SocialMedia>
    </Container>
  );
}
