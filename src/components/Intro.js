import { Container, Col, Row, Button } from "react-bootstrap";
const Intro = () => {
  return (
    <div className="intro">
      <Container className="text-white d-flex justify-content-center text-center align-items-center ">
        <Row>
          <Col>
            <div className="title">NONTON GRATIS</div>
            <div className="title">GAK BIKIN KANTONG KEMPIS</div>
            <div className="Introbutton mt-4 text-center">
              <Button variant="dark">LIHAT SEMUA</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Intro;
