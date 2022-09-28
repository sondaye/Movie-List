//import styled from 'styled-components'; 스타일드 컴포넌트 사용
import { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
/** @jsxImportSource @emotion/react */
import {jsx, css} from '@emotion/react';

const DivStyle = css`
    background-color: hotpink;
    font-size: 24px;
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
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
            ).json();
            console.log(json);
            setMovie(json.data.movie);
            setLoading(false);
    };
    useEffect(() => {
        getMovie();
    }, []);
    return (
        <div>
          {loading ? (
            <h1>Loading...</h1> 
          ) : ( 
          <div>
            <img src={movie.medium_cover_image} alt={movie.title} />
            <h1>{movie.title_long}</h1>
            <ul>
                {movie.genres.map((g) => (
                    <li key={g}>{g}</li>
                ))}
            </ul>
            <p>{movie.description_full}</p>
            <div css={DivStyle}>Hover to change color.</div>
        </div>
      )}
      </div>
      ); 
}

export default Detail;