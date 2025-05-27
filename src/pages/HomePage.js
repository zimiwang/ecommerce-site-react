import React from 'react';
import { Container, Header } from 'semantic-ui-react';
import ProductList from '../components/ProductList';

function HomePage() {
  return (
    <Container>
      <Header as="h2">Welcome to Wonder World</Header>
      <ProductList />
    </Container>
  );
}

export default HomePage;
