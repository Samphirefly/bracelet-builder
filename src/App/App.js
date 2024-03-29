import React, { useState } from 'react';
import Bracelet from './Bracelet/Bracelet';
import Stones from './StoneCarousel/Stones';
import { stones as allStones, sizes } from '../config';
import SizeButtons from './SizeButtons/SizeButtons';
import './App.scss';

import {
  createStones, toggleSelected, selectAllOfType, deselectAll, replaceSelectedStone
} from './utils';

const defaultStoneList = createStones([], sizes.large.numberStones);

const App = () => {
  const [stones, setStones] = useState(defaultStoneList);
  const [radius, setRadius] = useState(sizes.large.radius);

  return (
    <>
      <h3 className="braceletMakerInstructions" id="braceletMakerInstructions">Design your own bracelet. Click to swap stones.</h3>
      <div className="pageContainer">
        <div>
          <SizeButtons handler={(e) => {
            const size = sizes[e.target.value];
            setStones(createStones(stones, size.numberStones));
            setRadius(size.radius);
          }}
          />
          <Bracelet
            selectStone={selectIndex => setStones(toggleSelected(stones, selectIndex))}
            selectAllOfType={chosenStone => setStones(selectAllOfType(chosenStone, stones))}
            deselectAll={() => setStones(deselectAll)}
            radius={radius}
            maxRadius={sizes.large.radius}
            stones={stones}
          />
          <Stones
            stones={allStones}
            setSelectedStones={newStone => setStones(replaceSelectedStone(stones, newStone))}
          />
        </div>
      </div>
    </>
  );
};

export default App;
