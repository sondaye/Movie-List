import Movie from "./components/Movie";
import {useState, useEffect} from "react";
/** @jsxImportSource @emotion/react */
import { Global, jsx, css } from '@emotion/react';
import Popular from "./routes/Popular";
import TopRated from "./routes/Top_rated";
import NowPlying from "./routes/Now_playing";
import Upcoming from "./routes/Upcoming";
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
      <Route path="/popular">
        <Popular />
      </Route>
      <Route path="/top_rated">
        <TopRated />
      </Route>
      <Route path="/now_playing">
        <NowPlying />
      </Route>
      <Route path="/">
        <Upcoming />
      </Route>
    </Switch>
  </Router>;
}

export default App;
