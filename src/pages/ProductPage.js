import React from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../utils/data';
import { Container, Header, Image, Button } from 'semantic-ui-react';

function ProductPage({ addToCart }) {
  const { id } = useParams(); // Get product's id
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) return <h2>Product not found!</h2>;

  return (
    <Container>
      <Header as="h2">{product.name}</Header>
      <Image src={product.image} size="medium" />
      <p>{product.description}</p>
      <p>
        <strong>Price: </strong>${product.price}
      </p>
      <Button primary onClick={() => addToCart(product)}>
        Add to Cart
      </Button>
    </Container>
  );
}

export default ProductPage;
