import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import App from './App.jsx';
import DangNhap from './DangNhap/index.jsx';
import DangKy from './DangKy/index.jsx';
import LayLaiMatKhau from './LayLaiMatKhau/index.jsx';
import GioiThieu from './GioiThieu/index.jsx';
import AllProduct from './AllProduct/index.jsx';
import Blog3 from './blog/Blog3.jsx';
import Blog2 from './blog/Blog2.jsx';
import Blog1 from './blog/Blog1.jsx';
import SearcghPage from './SearchPage/index.jsx';
import DetailProduct from './DetailProduct/index.jsx';
import Cart from './Cart/index.jsx';
import PaymentOption from './PaymentOption/index.jsx';
import InfoForm from './InfoForm/index.jsx';
import FinishOrder from './FinishOrder/index.jsx';
import Blog from './blog/index.jsx';
import ReactDOM from 'react-dom/client';
import SearcghPageParam from './SearchPageParam/index.jsx';

function MainApp() {
  return (
    <HashRouter>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route path="/dang-nhap" element={<DangNhap />} />
        <Route path="/dang-ky" element={<DangKy />} />
        <Route path="/lay-lai-mat-khau" element={<LayLaiMatKhau />} />
        <Route path="/ve-chung-toi" element={<GioiThieu />} />
        <Route path="/tat-ca-san-pham" element={<AllProduct />} />
        <Route path="/blog/Blog3" element={<Blog3 />} />
        <Route path="/blog/Blog2" element={<Blog2 />} />
        <Route path="/blog/Blog1" element={<Blog1 />} />
        <Route path="/tim-kiem" element={<SearcghPage />} />
        <Route path="/tim-kiem/:key" element={<SearcghPageParam />} />
        <Route path="/product/:slug" element={<DetailProduct />} />
        <Route path="/gio-hang" element={<Cart />} />
        <Route path="/phuong-thuc-thanh-toan" element={<PaymentOption />} />
        <Route path="/thong-tin-dat-hang" element={<InfoForm />} />
        <Route path="/don-hang-hoan-tat" element={<FinishOrder />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </HashRouter>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MainApp />
  </React.StrictMode>,
);
