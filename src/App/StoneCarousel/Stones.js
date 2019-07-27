/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */

import React, { useLayoutEffect } from 'react';
import './Stones.scss';
import ReactDOM from 'react-dom';
import { images } from '../../config';
import 'owl.carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const { jQuery } = window;

const Stones = (props) => {
  useLayoutEffect(() => {
    jQuery('.owl-carousel').owlCarousel({
      loop: true,
      margin: 10,
      responsiveClass: true,
      nav: false,
      dots: true,
      responsive: {
        600: {
          items: 4
        },
        1000: {
          items: 5
        },
        1200: {
          items: 6
        }
      }
    });
  });
  return (
    <div className="owl-carousel owl-theme">
      {
        props.stones.map(stone => (
          <div className="item" key={stone.id}>
            <p className="stone-title">{stone.name}</p>
            <img className="stoneId" src={images[stone.id]} alt={stone.text} onClick={() => { props.setSelectedStones(stone); }} />
          </div>
        ))
      }
    </div>
  );
};

const carouselContainer = document.querySelector('.carouselContainer');
carouselContainer.innerHTML = '';

export default props => ReactDOM.createPortal(
  <Stones {...props} />,
  carouselContainer

);
