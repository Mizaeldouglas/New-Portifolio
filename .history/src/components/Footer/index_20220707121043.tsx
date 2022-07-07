import { AiFillGithub } from 'react-icons/ai';
import { Container, SocialMedia } from './styles';

export function Footer() {
  return (
    <Container>
      <p>Feito Por MizaelDouglas</p>
      <SocialMedia>
        <a>
          <AiFillGithub />
        </a>
      </SocialMedia>
    </Container>
  );
}
