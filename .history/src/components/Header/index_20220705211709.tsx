import { Container } from './styles';
import NavLink from './NavLink';

function Header() {
  return (
    <Container>
      <ul>
        <NavLink title="Home" path="/" />
        <NavLink title="Projetos" path="/projetos" includes />
        <NavLink title="Sobre Mim" path="/sobre" />
        <div className="curriculo">
          <a>Download</a>
        </div>
      </ul>
    </Container>
  );
}
export default Header;
