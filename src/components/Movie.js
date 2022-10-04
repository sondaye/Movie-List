import PropTypes from "prop-types";
import { Link } from "react-router-dom";
/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react';
import { useState } from "react";

const CardStyle = css `
  display: inline-block;
  margin: 10px;
  margin-bottom: 100px;
  width: 100%;
  max-width: 300px;
  text-align: center;
  perspective: 1000px;
  &:hover{
    transform: scale(0.9);
  }
  transition: 0.5s;
  perspective: 1000px;
`;

const CardInner = props => css`
  width: 300px;
  height: 400px;
  transition: transform 1s;
  transform-style: preserve-3d;
  cursor: pointer;
  position: relative;
  transform: ${props.flipped ? 'rotateY(180deg)' : 'none'};
`;

const CardFace = css`
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    overflow: hidden;
`;

const CardFront = css`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const CardBack = css`
    background: red;
    transform: rotateY(180deg);
`;

const CardHeader = css`
    position: reative;
    &:after{
        content: '';
        display: block;
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        z-index: -1;
    }
`;

const ListStyle = css`
  list-style:none;
  color: white;
  text-align: left;
`;

const ImgStyle = css`
  width: 280px;
`;




function Movie({id, coverImg, title, genres, overview, release}) {
  const [flipped, setFlipped] = useState(false);
  const handleFlip = () => {
    setFlipped((current) => !current);
  }

    return (
      <div className="card" css={CardStyle}>
        <div className="card_inner" css={CardInner({flipped})} onClick={handleFlip}>
          <div className="card_front">
            <img src={"https://image.tmdb.org/t/p/w200" + coverImg} alt={title} css={[ImgStyle, CardFace, CardFront]}/>
          </div>
          <div className="card_back" css={[CardFace, CardBack]}>
            <div className="card-content">
              <div className="card-header" css={CardHeader}>
                <h2>
                  <Link to={`/movie/${id}`}>{title}</Link>
                </h2>
              </div>
              <div className="card-body">
                <h3>{release}</h3>
                <p>{overview}</p>
                {/*<ul css={ListStyle}>
                  {genres.map((g) => (
                    <li key={g}>{g}</li>
                  ))}
                  </ul>*/}
                <Link to={`/movie/${id}`}><button>상세보기</button></Link>
              </div>
            </div>
          </div>
        </div>
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