/* eslint-disable react/jsx-no-comment-textnodes */
import { InfosContainer, CodeItem } from './styles';

export function OfficeArea() {
  return (
    <InfosContainer>
      <CodeItem>
        <span className="comment">// Meus Conhecimentos</span>
        <span className="purple">FullStack: </span> {'\u007B'}
        <div>
          technology: <span className="blue">React Js</span>
        </div>
        <div>
          technology: <span className="blue">Next Js</span>
        </div>
        <div>
          technology: <span className="blue">React-Native</span>
        </div>
        <div>
          technology: <span className="blue">Node Js</span>
        </div>
        <div>
          technology: <span className="blue">Java</span>
        </div>
        <div>
          technology: <span className="blue">Spring Boot</span>
        </div>
        {'\u007D'}
      </CodeItem>
    </InfosContainer>
  );
}
