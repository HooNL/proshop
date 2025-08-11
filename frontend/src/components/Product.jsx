import { Card } from "react-bootstrap"
import { Link } from "react-router-dom"

export const Product = ({ product }) => {
  return (
    <Card className="my-3 p-3 rounded">
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} variant="top" />
      </Link>
      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Text as="div">
            <strong className="my-3">
              {product.name} -{" "}
              <span className="text-muted">{product.brand}</span>
            </strong>
          </Card.Text>
        </Link>
        <Card.Text as="h3">${product.price}</Card.Text>
      </Card.Body>
    </Card>
  )
}
