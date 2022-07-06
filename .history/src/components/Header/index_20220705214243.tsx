import { Container } from './styles';
import NavLink from './NavLink';
import curriculo from '../../assets/curriculo.pdf';

function Header() {
  return (
    <Container>
      <ul>
        <NavLink title="Home" path="/" />
        <NavLink title="Projetos" path="/projetos" includes />
        <NavLink title="Sobre Mim" path="/sobre" />
      </ul>
      <div className="curriculo">
        <a href={curriculo}>Download CV</a>
      </div>
    </Container>
  );
}

export default Header;
