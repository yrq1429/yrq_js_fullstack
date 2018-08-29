import React from 'react';
import { Router as DefaultRouter, Route, Switch } from 'react-router-dom';
import dynamic from 'umi/dynamic';
import renderRoutes from 'umi/_renderRoutes';


let Router = DefaultRouter;


let routes = [
  {
    "path": "/",
    "component": require('../../layouts/index.js').default,
    "routes": [
      {
        "path": "/discover.html",
        "exact": true,
        "component": require('../discover/page.jsx').default
      },
      {
        "path": "/home.html",
        "exact": true,
        "component": require('../home/page.jsx').default
      },
      {
        "path": "/index.html",
        "exact": true,
        "component": require('../index.js').default
      },
      {
        "path": "/",
        "exact": true,
        "component": require('../index.js').default
      },
      {
        "path": "/list.html",
        "exact": true,
        "component": require('../list.js').default
      },
      {
        "path": "/order.html",
        "exact": true,
        "component": require('../order/page.jsx').default
      },
      {
        "path": "/profile.html",
        "exact": true,
        "component": require('../profile/page.jsx').default
      },
      {
        "path": "/shop.html",
        "exact": true,
        "component": require('../shop/page.jsx').default
      },
      {
        "component": () => React.createElement(require('C:/Users/Administrator/AppData/Roaming/npm/node_modules/umi/node_modules/umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'pages', routes: '[{"path":"/","component":"./layouts\\\\index.js","routes":[{"path":"/discover.html","exact":true,"component":"./pages/discover/page.jsx"},{"path":"/home.html","exact":true,"component":"./pages/home/page.jsx"},{"path":"/index.html","exact":true,"component":"./pages/index.js"},{"path":"/","exact":true,"component":"./pages/index.js"},{"path":"/list.html","exact":true,"component":"./pages/list.js"},{"path":"/order.html","exact":true,"component":"./pages/order/page.jsx"},{"path":"/profile.html","exact":true,"component":"./pages/profile/page.jsx"},{"path":"/shop.html","exact":true,"component":"./pages/shop/page.jsx"}]}]' })
      }
    ]
  }
];


export default function() {
  return (
<Router history={window.g_history}>
  <Route render={({ location }) =>
    renderRoutes(routes, {}, { location })
  } />
</Router>
  );
}
