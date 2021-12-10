import './style.scss';
import { Card } from 'react-bootstrap';
import integrantes from './integrantes.json'
import {jezi} from '../../assets/img/jezi.jfif'


function SobreNosMain() {

  return (
    <>
      <div className=" w-100 row g-3 justify-content-center my-5">

        {
          integrantes.map(({ nome, foto, github, linkedin, bio }) => {
            return (
              <Card className="col-3 " style={{ width: '22rem' }}>
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
    </>
  );
}

export default SobreNosMain