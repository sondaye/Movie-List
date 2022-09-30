import Movie from "./components/Movie";
import {useState, useEffect} from "react";
/** @jsxImportSource @emotion/react */
import { Global, jsx, css } from '@emotion/react';
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

export const GlobalStyle = css`
  body{
    padding: 0;
    margin: 0;
    background-color:black;
  }
`;

function App() {
  return <Router>
    <Global styles={GlobalStyle} />
    <Switch>
      <Route path="/movie/:id">
        <Detail />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  </Router>;
}

export default App;
