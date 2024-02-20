import React from 'react';
import './App.css';

import { Routes,Route } from 'react-router-dom';

import Home from './component/pages/home';
import Catalog from './component/pages/catalog';
import GoodsItem from './component/pages/goods-item';
import Blog from './component/pages/blog';
import { Layout } from './component/layout/layout';
import { Cart } from './component/cart/cart';
import Favorite from './component/pages/favorite/favorite';
import ScrollToTop from './component/scrollToTop';
import Eror from './component/pages/eror';

function App() {
  return (
    <>
    <ScrollToTop />
     <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path='shop' element={<Catalog/>}/>
          <Route path='blog' element={<Blog  />}/>
          <Route path='shop/:id' element={<GoodsItem />}/>
          <Route path='cart' element={<Cart />}/>
          <Route path='favorite' element={<Favorite />}/>
          <Route path='error' element={<Eror />}/>
        </Route>
     </Routes>
     {/* <Cart/> */}
    </>
  );
}


export default App;
