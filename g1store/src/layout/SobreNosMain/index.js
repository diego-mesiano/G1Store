import './style.scss';
import integrantes from './integrantes.json';
import { Button } from 'react-bootstrap';


function SobreNosMain() {

  return (
    <>
      <div id="sobrenos">
        <h1>
          Sobre a equipe de desenvolvimendo
        </h1>
        <p>
            Este foi o nosso primeiro projeto integrador em grupo implementando as matérias de Back-end, Front-end e Infraesrutura. 
            Feito durante o terceiro bimestre do curso <a href="https://www.digitalhouse.com/br/acoes/certified-tech-developer">certified tech developer</a>(curso dispobilinizado pela empresa <a href="https://www.digitalhouse.com/br">Digital House</a>), pelos alunos:
        </p>
      </div>
      <div >
        <ul id="sobrenos-ul">
          {
            integrantes.map((integrantes) => {
              return (
                <li key={integrantes.id.toString()}>
                  <h3>{integrantes.nome}</h3>
                  <img id="fotos" src={integrantes.foto} alt="" />
                  <a rel="noopener noreferrer" href={integrantes.github} target="_blank"><Button>GitHub</Button></a>
                  <a rel="noopener noreferrer" href={integrantes.linkedin} target="_blank"><Button>LinkedIn</Button></a>
                </li>
              )
            })
          }
        </ul>
      </div>
    </>
  );
}

export default SobreNosMain