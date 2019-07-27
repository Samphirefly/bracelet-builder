import React from 'react';
import './Bracelet.scss';
import { images } from '../../config';

const Bracelet = ({ stones, radius, selectStone, selectAllOfType, deselectAll }) => (
  <div className="stoneContainerContainer">

    <div className="stoneContainer" style={{ '--containerWidth': `${radius}px` }} onClick={() => {
      deselectAll()
    }}>

          <div className="braceletRingContainer">
          <div className="braceletRing"></div>
          </div>

      {
        stones.map((stone, i) => (
          <div
            key={i}
            className="stone"

            style={{
              '--angle': (270 + (360 / stones.length) * i) + "deg",
              '--parentWidth': `${radius}px`,
              filter: stone.selected ? 'drop-shadow(0px 0px 5px #48E1FF)' : 'drop-shadow(0px 0px 5px white)'
            }}
            onClick={(e) => { selectStone(stones, i); e.stopPropagation() }}
            onDoubleClick={() => {
              selectAllOfType(stone)
            }}
          >
            <img src={images[stone.id]} style={{ width: "100%", height: "100%" }} alt={stone.text} />
          </div>
        ))
      }
    </div>
  </div>
)

export default Bracelet;
