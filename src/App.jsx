
import { ConfigProvider } from 'antd'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import theme from './theme/theme'
import SignIn from './pages/SignIn'
import './styles/global.scss'

// import React from 'react';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Projects from './pages/Projects';
import Activity from './pages/Activity';

const router = createBrowserRouter([
  {
    path: "/signin",
    element: <SignIn />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/",
    element: <Dashboard/>,   
  },
  {
    path: "/activity",
    element: <Activity />
  },
  {
    path: '/project',
    element: <Projects/>,
  },
]);

const App = () => (
  <ConfigProvider>
    <RouterProvider router={router} />
  </ConfigProvider>
);
export default App;