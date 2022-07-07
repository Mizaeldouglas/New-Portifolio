/* eslint-disable react/jsx-no-comment-textnodes */
import { InfosContainer, CodeItem } from './styles';

export function InfoArea() {
  return (
    <InfosContainer>
      <CodeItem data-aos="zoom-in">
        <span className="comment">// Minha Apresentação</span>
        <span className="purple">Infos: </span> {'\u007B'}
        <div>
          Nome: <span className="blue">Mizael Douglas;</span>
        </div>
        <div>
          Curriculo:{' '}
          <span className="blue">
            <a
              href="https://drive.google.com/file/d/16IAsA4cZ0Kd_te4g5VwCkg7sgIgf4Kru/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              Download CV
            </a>
            ;
          </span>
        </div>
        {'\u007D'}
      </CodeItem>
    </InfosContainer>
  );
}
