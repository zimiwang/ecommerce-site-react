import React from 'react';
import { Container, Header, Table, Button, Icon } from 'semantic-ui-react';

function CartPage({ cart, setCart }) {
  // 删除商品
  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  // 更新商品数量
  const updateQuantity = (id, delta) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) } // 保证数量不少于1
          : item
      )
    );
  };

  // 计算总价格
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <Container>
      <Header as="h2">Your Cart</Header>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <Table celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Product</Table.HeaderCell>
                <Table.HeaderCell>Price</Table.HeaderCell>
                <Table.HeaderCell>Quantity</Table.HeaderCell>
                <Table.HeaderCell>Action</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {cart.map((item) => (
                <Table.Row key={item.id}>
                  <Table.Cell>{item.name}</Table.Cell>
                  <Table.Cell>${item.price}</Table.Cell>
                  <Table.Cell>
                    <Button size="mini" onClick={() => updateQuantity(item.id, -1)}>-</Button>
                    {item.quantity}
                    <Button size="mini" onClick={() => updateQuantity(item.id, 1)}>+</Button>
                  </Table.Cell>
                  <Table.Cell>
                    <Button color="red" size="mini" onClick={() => removeFromCart(item.id)}>
                      <Icon name="trash" /> Remove
                    </Button>
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
          <Header as="h3">Total Price: ${totalPrice.toFixed(2)}</Header>
        </>
      )}
    </Container>
  );
}

export default CartPage;
