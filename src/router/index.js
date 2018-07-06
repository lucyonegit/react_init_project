import React from 'react'
import { Router, Switch, Route } from 'react-router'
import { createBrowserHistory } from "history";


import Home from "../components/home/home"
let router_config = [
  {
    path: "/",
    component: Home
  },

]

const MainRoute = () => (
  <Router history={createBrowserHistory()}>
    <Switch>
      {router_config.map((v, k) => {
        return <Route exact {...v} />
      })}
    </Switch>
  </Router>
)
export default MainRoute
