//import styled from 'styled-components'; 스타일드 컴포넌트 사용
import { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
/** @jsxImportSource @emotion/react */
import {jsx, css} from '@emotion/react';
import {URL, KEY} from "./Home";

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
            await fetch(`${URL}${id}?api_key=${KEY}`)
            ).json();
            console.log(json);
            setMovie(json);
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
          <div css={DivStyle}>
            <h1>{movie.title}</h1>
        </div>
      )}
      </div>
      ); 
}

export default Detail;