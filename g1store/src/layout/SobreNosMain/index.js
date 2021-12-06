import './style.scss';
import integrantes from './integrantes.json';
import {Button} from 'react-bootstrap';


function SobreNosMain() {

  return (
    <main id="sobrenos">
      <div>
        <h1>
          Sobre a equipe de desenvolvimendo
        </h1>
        <p>
          Esse foi o nosso primeiro projeto em grupo implementando as matérias de Back-end, Front-end e Infraesrutura em um único projeto.
          Foi feito durante o Curso Dev
        </p>
      </div>
      <div >
        <ul id="sobrenos">
          {
            integrantes.map((integrantes) => {
              return (
                <li key={integrantes.id.toString()}>
                  <h3>{integrantes.nome}</h3>
                  {/*<img src="">foto da Pessoa</img>*/}
                  <a rel="noopener noreferrer" href={integrantes.github} target="_blank"><Button>GitHub</Button></a>
                  <a rel="noopener noreferrer" href={integrantes.linkedin} target="_blank"><Button>LinkedIn</Button></a>
                </li>
              )
            })
          }
        </ul>
      </div>
    </main>
  );
}

export default SobreNosMain