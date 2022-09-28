import PropTypes from "prop-types";
import {Link} from "react-router-dom";
/** @jsxImportSource @emotion/react */
import { jsx, css} from '@emotion/react';
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

const CardStyles = styled.div(props => {
  return {

  }
})

const ListStyle = css`
  list-style:none;
  color: white;
  text-align: left;
`;

const ImgStyle = css`
  width: 280px;
  border: 1px solid red;
`;

function Movie({id, coverImg, title, summary, genres}) {
  const[clicked, setClicked] = useState(false);
  const handleClick = (event) => {
    event.preventDefault();
    setClicked(current => !current);

  };

    return (
    <div css={CardStyle} onClick={handleClick}>
      <img src={coverImg} alt={title} css={ImgStyle}/>
      {/* <h2>
        <Link to={`/movie/${id}`}>{title}</Link>
      </h2>
      <p>{summary}</p>
      <ul css={ListStyle}>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul> */}
  </div>
    )
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;