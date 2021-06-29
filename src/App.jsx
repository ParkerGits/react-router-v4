import React from 'react'
import { BrowserRouter as Router, HashRouter, MemoryRouter, Prompt, Route, Link, Routes, useLocation, useParams, Navigate } from 'react-router-dom'
import {StaticRouter} from 'react-router-dom/server'

const LinksRoutes = () => (
  <div>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Route exact path="/" render={() => <h1>Home</h1>} />
    <Route path="/about" render={() => <h1>About</h1>} />
  </div>
);

const StaticRouterApp = () => (
  <StaticRouter location="/about" context={{}}>
    <LinksRoutes />
  </StaticRouter>
);

export default StaticRouterApp