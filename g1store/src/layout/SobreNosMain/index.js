import './style.scss';
import integrantes from './integrantes.json';
import { Card, Button  } from 'react-bootstrap';


function SobreNosMain() {

  return (
    <>
      <div>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
          </Card.Body>
          <Card.Body>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
          </Card.Body>
        </Card>
      </div>
      <div id="sobrenos">
        
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