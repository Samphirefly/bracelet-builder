
import React from 'react';
import './Stones.scss'
import { images } from '../config';
import ReactDOM from 'react-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../Faded.scss';

const settings = {
  className: "center",
  infinite: true,
  centerPadding: "60px",
  slidesToShow: 8,
  swipeToSlide: true,
  
};
const Stones = props => {
  return (
      <div>      
      <Slider {...settings}>
        {
          [
            ...props.stones,
            ...props.stones
          ].map(stone => (
            <div key={stone.id}>
              <div className="stone-container">
                <p className="stone-title">{stone.name}</p>
              </div>
              <img className="stoneId" src={images[stone.id]} alt={stone.text} onClick={() => { props.setSelectedStones(stone) }} />
            </div>
          ))
        }
      </Slider>
      </div>
  )
}

const carouselContainer = document.querySelector('.carouselContainer')
carouselContainer.innerHTML = ""

export default props => ReactDOM.createPortal(
  <Stones {...props} />,
  carouselContainer

);