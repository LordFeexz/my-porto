import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import avenger from "../asset/image/marvel/avenger.jpg";
import blackwidow from "../asset/image/marvel/blackwidow.jpg";
import capmarvel from "../asset/image/marvel/capmarvel.jpeg";
import daredevil from "../asset/image/marvel/daredevil.jpg";
import endgame from "../asset/image/marvel/endgame.jpg";
import thor from "../asset/image/marvel/thor.jpg";

const Superhero = () => {
  return (
    <div>
      <Container>
        <br />
        <h1 className="text-white">SUPERHERO MOVIES</h1>
        <br />
        <Row>
          <Col md={3} className="movieimage" id="superhero">
            <Card className=" text-white movieimage">
              <div className="bg-dark">
                <div className="p-1 m-2">
                  <Card.Img src={avenger} alt="avenger" className="images" />
                  <Card.Title className="text-center">Avenger</Card.Title>
                  <Card.Text className="text-left">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</Card.Text>
                  <Card.Text>Last updated 3 mins ago</Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={3} className="movieimage">
            <Card className=" text-white movieimage">
              <div className="bg-dark">
                <div className="p-1 m-2">
                  <Card.Img src={blackwidow} alt="blackwidow" className="images" />
                  <Card.Title className="text-center">blackwidow</Card.Title>
                  <Card.Text className="text-left">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</Card.Text>
                  <Card.Text>Last updated 3 mins ago</Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={3} className="movieimage">
            <Card className=" text-white movieimage">
              <div className="bg-dark">
                <div className="p-1 m-2">
                  <Card.Img src={capmarvel} alt="capmarvel" className="images" />
                  <Card.Title className="text-center">Captain Marvel</Card.Title>
                  <Card.Text className="text-left">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</Card.Text>
                  <Card.Text>Last updated 3 mins ago</Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={3} className="movieimage">
            <Card className=" text-white movieimage">
              <div className="bg-dark">
                <div className="p-1 m-2">
                  <Card.Img src={daredevil} alt="daredevils" className="images" />
                  <Card.Title className="text-center">daredevil</Card.Title>
                  <Card.Text className="text-left">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</Card.Text>
                  <Card.Text>Last updated 3 mins ago</Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={3} className="movieimage">
            <Card className=" text-white movieimage">
              <div className="bg-dark">
                <div className="p-1 m-2">
                  <Card.Img src={endgame} alt="endgame" className="images" />
                  <Card.Title className="text-center">Endgame</Card.Title>
                  <Card.Text className="text-left">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</Card.Text>
                  <Card.Text>Last updated 3 mins ago</Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={3} className="movieimage">
            <Card className=" text-white movieimage">
              <div className="bg-dark">
                <div className="p-1 m-2">
                  <Card.Img src={thor} alt="thor" className="images" />
                  <Card.Title className="text-center">Thor</Card.Title>
                  <Card.Text className="text-left">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</Card.Text>
                  <Card.Text>Last updated 3 mins ago</Card.Text>
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Superhero;
