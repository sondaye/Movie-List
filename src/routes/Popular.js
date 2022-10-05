import { NavLink } from "react-router-dom";
import {useEffect, useState} from "react";
import Movie from "../components/Movie";
/** @jsxImportSource @emotion/react */
import { jsx, css} from '@emotion/react';
import styled from '@emotion/styled';

const DivStyle = css`
  padding: 0;
  margin: 0;
  text-align: center;
  margin-top: 200px;
  margin-bottom:200px;
`;

const CardStyle = css`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
`;

const MenuBarStyle = css`
  display: table;
  color: white;
  font-size: 20px;
  list-style: none;
  margin: 0 auto;
  padding: 0;
  padding-bottom: 5rem;
`;

const StyledNavLink = styled(NavLink)`
  color: white;
  text-align: center;
  text-decoration: none;
  padding-left: 3rem;
  &.selected{
    color:red;
    text-decoration: none;
  }
`;

function Popular(){
  const KEY = process.env.REACT_APP_API_KEY
  const URL = "https://api.themoviedb.org/3/movie/"
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async() => {
    const json = await (
        await fetch(
      `${URL}popular?api_key=${KEY}`
      )
    ).json();
    setMovies(json.results);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);
  console.log(movies);
  return (
    <div css={DivStyle}>
      {loading ? (
        <h1>Loading...</h1> 
        ) : ( 
      <div className="container">
        <ul css={MenuBarStyle}>
          <StyledNavLink activeClassName="selected" to="/top_rated">Top Rated</StyledNavLink>
          <StyledNavLink activeClassName="selected" to="/popular">Popular</StyledNavLink>
          <StyledNavLink activeClassName="selected" to="/now_playing">Now Playing</StyledNavLink>
          <StyledNavLink activeClassName="selected" to="/upcoming">Upcoming</StyledNavLink>
        </ul>
        <div css={CardStyle}>
          {movies.map((movie) => (
            <Movie
              key={movie.id}
              id={movie.id}
              coverImg={movie.poster_path}
              title={movie.title} 
              genres={movie.genre_ids} 
              overview={movie.overview}
              release={movie.release_date}
            />
          ))}
        </div>
      </div>
      )}
  </div>
  ); 
}

export default Popular;
export const URL = "https://api.themoviedb.org/3/movie/"