import { Container, Row, Col } from "react-bootstrap"
export const Footer = () => {
  return (
    <footer className="bg-dark text-light  ">
      <Container>
        <Row>
          <Col className="text-center py-3 ">
            <p>Copyright &copy; ProShop</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
