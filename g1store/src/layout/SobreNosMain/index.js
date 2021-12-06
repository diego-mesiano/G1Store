import './style.scss';
import integrantes from './integrantes.json';

function SobreNosMain() {
  return (
    <div id = "main">
      <div id = "titulo">
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
                <li key={integrantes.id}>
                  <h3>{integrantes.nome}</h3>
                  <img src="">foto da Pessoa</img>
                  <button><link src={integrantes.github}>GitHub</link></button>
                  <button><link src={integrantes.linkedin}>Linkdin</link></button>
                </li>
              )
            })
          }
        </ul>
      </div>
    </div>
  );
}

export default SobreNosMain