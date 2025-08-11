import { Container, Row, Col } from "react-bootstrap"
export const Footer = () => {
  return (
    <footer className="bg-dark text-light mt-5 ">
      <Container>
        <Row>
          <Col className="text-center py-3">
            <p>Copyright &copy; ProShop</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
