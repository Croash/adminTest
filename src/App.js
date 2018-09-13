import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

const Sandwiches = () => <h2>Sandwiches</h2>;

const Tacos = ({ routes }) => (
  <div>
    <h2>Tacos</h2>
    <ul>
      <li>
        <Link to="/tacos/bus">Bus</Link>
      </li>
      <li>
        <Link to="/tacos/cart">Cart</Link>
      </li>
    </ul>

  </div>
);

const Bus = ({match}) => { 
  console.log('bus',match.url)
  return <h3>Bus</h3> }
const Cart = ({match}) => { return <h3>Cart</h3>; }

////////////////////////////////////////////////////////////
// then our route config
const routes = [
  {
    path: "sandwiches",
    component: Sandwiches,
    exact: true,
    forceRefresh: false
  },
  {
    path: "/tacos",
    component: Tacos,
    exact: true,
    forceRefresh: false,
    routes: [
      {
        path: "/bus",
        component: Bus,
        exact: true ,
        forceRefresh: false
      },
      {
        path: "/cart",
        component: Cart,
        exact: true ,
        forceRefresh: false
      }
    ]
  }
];

const routesFunc = (routes,prePath,memory) => {
  if(!memory)
    memory=[]
  routes.forEach(r=>{
    const { routes ,...props } = r
    memory.push({...props,path:prePath+r.path})
    if(r.routes&&r.routes instanceof Array)
      routesFunc(r.routes,prePath+r.path,memory)
  })
  return memory
}

console.log(routesFunc(routes,''))

// wrap <Route> and use this everywhere instead, then when
// sub routes are added to any route it'll work

const RouteConfigExample = () => (
  <Router basename = {'/'}>
    <div>

      <Switch>
        {routesFunc(routes,'').slice().map(r=><Route {...r} ></Route>)}
      </Switch>
    </div>
  </Router>
);

export default RouteConfigExample;