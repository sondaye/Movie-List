import {useEffect, useState} from "react";
import Movie from "../components/Movie";
/** @jsxImportSource @emotion/react */
import { jsx, css} from '@emotion/react';

const DivStyle = css`
  padding: 0;
  text-align: center;
  margin-top: 200px;
  margin-bottom:200px;
`;


function Home(){
  const KEY = "ae316f6f3f4ed0188bb67dbf3c41a5f5"
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
      <div>
        {movies.map((movie) => (
          <Movie
            key={movie.id}
            id={movie.id}
            coverImg={movie.poster_path}
            title={movie.title} 
            genres={movie.genre_ids} 
          />
        ))}
    </div>
  )}
  </div>
  ); 
}

export default Home;
export const KEY = "ae316f6f3f4ed0188bb67dbf3c41a5f5"
export const URL = "https://api.themoviedb.org/3/movie/"