import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import venomimg from "../asset/image/trending/venom.jpg";
import spidermannwh from "../asset/image/trending/spidermannwh.jpg";
import morbius from "../asset/image/trending/morbius.jpg";
import layanganputus from "../asset/image/trending/layanganputus.jpg";
import kkn from "../asset/image/trending/kkn.jpg";
import joker from "../asset/image/trending/joker.jpeg";
const Trending = () => {
  return (
    <div>
      <Container>
        <br />
        <h1 className="text-white">TRENDING MOVIES</h1>
        <br />
        <Row>
          <Col md={3} className="movieimage" id="trending">
            <Card className=" text-white movieimage">
              <div className="bg-dark">
                <div className="p-1 m-2">
                  <Card.Img src={venomimg} alt="venom" className="images" />
                  <Card.Title className="text-center">Venom</Card.Title>
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
                  <Card.Img src={spidermannwh} alt="spidermannwh" className="images" />
                  <Card.Title className="text-center">spidermannwh</Card.Title>
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
                  <Card.Img src={morbius} alt="morbius" className="images" />
                  <Card.Title className="text-center">morbius</Card.Title>
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
                  <Card.Img src={layanganputus} alt="layanganputus" className="images" />
                  <Card.Title className="text-center">layanganputus</Card.Title>
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
                  <Card.Img src={kkn} alt="kkn" className="images" />
                  <Card.Title className="text-center">kkn</Card.Title>
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
                  <Card.Img src={joker} alt="joker" className="images" />
                  <Card.Title className="text-center">joker</Card.Title>
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
export default Trending;
