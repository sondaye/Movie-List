import PropTypes from "prop-types";
import { Link } from "react-router-dom";
/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react';
import styled from '@emotion/styled';
import { useState } from "react";

const CardStyle = css `
  display: inline-block;
  margin: 10px;
  margin-bottom: 100px;
  width: 100%;
  max-width: 300px;
  text-align: center;
  &:hover{
    transform: scale(0.9);
  }
  transition: 0.5s;
`;

const ListStyle = css`
  list-style:none;
  color: white;
  text-align: left;
`;

const ImgStyle = css`
  width: 280px;
  border: 1px solid red;
`;

const CardInner = css`
  width: 100%;
  height: 100%;
  transition: transfrom 1s;
  transfrom-style: preserve-3d;
  cursor: pointer;
  position: relative;
`;

const CardInnerFlipped = css`transform: rotateY(180deg)`;



function Movie({id, coverImg, title, genres}) {
  const[clicked, setClicked] = useState(false);
  const handleClick = (event) => {
    event.preventDefault();
    setClicked(current => !current);

  };

    return (
      <div css={CardStyle}>
        <div id="card_inner" css={CardInner}>
          <div>
            <img src={"https://image.tmdb.org/t/p/w200" + coverImg} alt={title} css={ImgStyle}/>
          </div>
          <div>
            <ul css={ListStyle}>
              {genres.map((g) => (
                <li key={g}>{g}</li>
              ))}
            </ul>
          </div>
        </div>
      <h2>
        <Link to={`/movie/${id}`}>{title}</Link>
        </h2>
      </div>
    )
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default Movie;