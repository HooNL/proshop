import { Card } from "react-bootstrap"

export const Product = ({ product }) => {
  return (
    <Card className="my-3 p-3 rounded">
      <a href={`/product/${product._id}`}>
        <Card.Img src={product.image} variant="top" />
      </a>
      <Card.Body>
        <a href={`/product/${product._id}`}>
          <Card.Text as="div">
            <strong className="my-3">
              {product.name} -{" "}
              <span className="text-muted">{product.brand}</span>
            </strong>
          </Card.Text>
        </a>
        <Card.Text as="h3">${product.price}</Card.Text>
      </Card.Body>
    </Card>
  )
}
