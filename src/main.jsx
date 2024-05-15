import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
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

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/DangNhap",
    element: <DangNhap />
  },
  {
    path: "/DangKy",
    element: <DangKy />
  },
  {
    path: "/LayLaiMatKhau",
    element: <LayLaiMatKhau />
  },
  {
    path: "/GioiThieu",
    element: <GioiThieu />
  },
  {
    path: "/AllProduct",
    element: <AllProduct />
  },
  {
    path: "/blog/Blog3",
    element: <Blog3 />
  },
  {
    path: "/blog/Blog2",
    element: <Blog2 />
  },
  {
    path: "/blog/Blog1",
    element: <Blog1 />
  },
  {
    path: "/SearchPage",
    element: <SearcghPage />
  },
  {
    path: "/product/:slug",
    element: <DetailProduct />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
