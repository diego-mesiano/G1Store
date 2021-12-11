import './style.scss';
import { Card } from 'react-bootstrap';
import integrantes from './integrantes.json'



function SobreNosMain() {

  return (
    <>
      <main>
        <h2 className='titulo-equipe'>Sobre a equipe de Desenvolvimento</h2>
        <div className="w-100 row g-3 justify-content-center my-2">
          <div className='descricao-projeto'>

            <h3>
              Projeto Desenvolvido como avaliação final e integradora das disciplinas de Front-End 3, Back-End e Infra-Estrutura 2 do curso <strong>Web Developer Full Stack</strong> da <strong>Digital House Brasil</strong> {`(`}Veja a grade do curso clicando <a target="_blank" href={`https://assets.digitalhouse.com/content/br/course/certified-tech-developer-fulltime.pdf`}  rel="noopener noreferrer">aqui</a>{`)`}.
            </h3><br/>
            <p>
              <strong>Tecnologias Utilizadas em Front-End:</strong> React.Js | JavaScript | Sass | Html | Ide: Visual Studio Code | Axios | React-Bootstrap | React-helmet-async  | React-router-dom | SweetAlert2
            </p>
            <p>
              <strong>Tecnologias Utilizadas em Back-End:</strong> Java 11 | Maven | Spring Data JPA | Spring Web | MySQL Driver | Hibernate
            </p>
            <p>
              <strong>Tecnologias Utilizadas em Infra-Estrutura:</strong> AWS ElasticBeanStalk (Deploy) | Heroku (Deploy Reserva) | AWS RDS MYSQL (Banco de Dados)
            </p>
          </div>

          {
            integrantes.map(({ nome, foto, github, linkedin, bio }) => {
              return (
                <Card className="col-3 " style={{ width: '22rem' }} key={nome}>
                  <Card.Img className="pt-3" variant="top" src={`${foto}`} />
                  <Card.Body>
                    <Card.Title>{nome}</Card.Title>
                    <Card.Text>
                      {bio}
                    </Card.Text>
                  </Card.Body>
                  <Card.Body className="btn-group mb-2 mx-2 justify-content-center align-items-center">
                    <Card.Link className="btn btn-primary" target="_blank" rel="noopener noreferrer" href={github}>Github</Card.Link>
                    <Card.Link className="btn btn-primary" target="_blank" rel="noopener noreferrer" href={linkedin} >LinkedIn</Card.Link>
                  </Card.Body>
                </Card>
              )
            })
          }
        </div>
      </main>
    </>
  );
}

export default SobreNosMain