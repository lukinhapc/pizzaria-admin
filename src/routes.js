import React from 'react';
import Pedidos from './views/Pedidos/Pedidos';


const Dashboard = React.lazy(() => import('./views/Dashboard'));
const Colors = React.lazy(() => import('./views/Theme/Colors'));

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/theme', exact: true, name: 'Theme', component: Colors },
  { path: '/pedidos', exact: true, name: 'Pedidos', component:Pedidos}

];

export default routes;
