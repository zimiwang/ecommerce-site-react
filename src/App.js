import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import NavBar from './components/NavBar'; // 引入新的导航条组件
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import PageTemplate from './pages/PageTemplate'; // 引入通用模版
import { pageData } from './utils/pageData'; // 动态页面数据

function App() {
  const [cart, setCart] = useState([]); // 购物车状态

  // 添加商品到购物车
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        // 如果商品已存在，增加数量
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      // 如果商品不存在，添加新商品
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  return (
    <Router>
      <div>
        <Header cartItemCount={cart.reduce((total, item) => total + item.quantity, 0)} />
        <NavBar /> {/* 新增的导航条 */}
        <Routes>
          <Route path="/" element={<HomePage addToCart={addToCart} />} />
          <Route path="/product/:id" element={<ProductPage addToCart={addToCart} />} />
          <Route path="/cart" element={<CartPage cart={cart} setCart={setCart} />} />

          {/* 动态生成页面 */}
          {Object.entries(pageData).map(([path, data]) => (
            <Route
              key={path}
              path={path}
              element={
                <PageTemplate
                  title={data.title}
                  description={data.description}
                  products={data.products}
                  subTitle={data.subTitle}
                  gridContents={data.gridContents}
                />
              }
            />
          ))}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
