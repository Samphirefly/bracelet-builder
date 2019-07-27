/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/prop-types */
import React from 'react';
import './Bracelet.scss';
import { images } from '../../config';

const selectedFilter = 'drop-shadow(0px 0px 5px #48E1FF)';

const Bracelet = ({
  stones, radius, selectStone, selectAllOfType, deselectAll
}) => (
  <div className="braceletOuterContainer">

    <div
      className="braceletInnerContainer"
      style={{ '--containerWidth': `${radius}px` }}
      onClick={() => {
        deselectAll();
      }}
    >

      <div className="braceletRingContainer">
        <div className="braceletRing" />
      </div>

      {
        stones.map((stone, i) => (
          <div
            key={stone.id}
            className="stone"

            style={{
              '--angle': `${270 + (360 / stones.length) * i}deg`,
              '--parentWidth': `${radius}px`,
              filter: stone.selected && selectedFilter
            }}
            onClick={(e) => { selectStone(stone.id); e.stopPropagation(); }}
            onDoubleClick={() => selectAllOfType(stone)}
          >
            <img src={images[stone.id]} style={{ width: '100%', height: '100%' }} alt={stone.text} />
          </div>
        ))
      }
    </div>
  </div>
);

export default Bracelet;
