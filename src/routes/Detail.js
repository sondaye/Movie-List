//import styled from 'styled-components'; 스타일드 컴포넌트 사용
import { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
/** @jsxImportSource @emotion/react */
import {jsx, css} from '@emotion/react';
import {URL} from "./Popular";
import { useHistory } from "react-router-dom";

const DivStyle = css`
    font-size: 24px;
    color: white;
    border-radius: 4px;
    padding: 32px;
    text-align: center;
    &:hover{
        color: white;
    }
`;

function Detail(){
    const [loading, setLoading] = useState(true);
    const {id} = useParams();
    const [movie, setMovie] = useState([]);
    const getMovie= async () => {
        const json = await(
            await fetch(`${URL}${id}?api_key=`+process.env.REACT_APP_API_KEY)
            ).json();
            console.log(json);
            setMovie(json);
            setLoading(false);
    };
    useEffect(() => {
        getMovie();
    }, []);

    const history = useHistory();

    return (
        <div>
          {loading ? (
            <h1>Loading...</h1> 
          ) : ( 
          <div css={DivStyle}>
            <button onClick={ () => history.goBack()}>뒤로 가기</button>
            <h1>{movie.original_title}</h1>
            <h1>{movie.title}</h1>
            <h1>{movie.tagline}</h1>
            <img src={"https://image.tmdb.org/t/p/original"+movie.backdrop_path} alt={movie.title} />
            <h3>{movie.release_date}</h3>
            <h3>{movie.runtime}분</h3>
            <h3>평점: {movie.vote_average}</h3>
            <h3>{movie.overview}</h3>
            <ul>
                {movie.genres.map(genre => <li key={genre.id}>{genre.name}</li>)}
            </ul>
            <h3>{movie.production_countries.length > 0 ? <h1>{movie.production_countries[0].name}</h1> : <h1>존재 안 함</h1>}</h3>


        </div>
      )}
      </div>
      ); 
}

export default Detail;