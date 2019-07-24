import React, { useState } from 'react';
import Bracelet from '../Bracelet/Bracelet';
import Stones from '../Stones/Stones';
import { stones as allStones, sizes } from '../config';
import SizeButtons from '../SizeButtons/SizeButtons';
import './App.scss';

import { createStones, toggleSelected, selectAllOfType, deselectAll} from './utils';

const defaultStoneList = createStones([], sizes.large.numberStones);

const App = () => {
  const [stones, setStones] = useState(defaultStoneList);
  const [radius, setRadius] = useState(sizes.large.radius);

  const handler = (e) => {
    const size = sizes[e.target.value]
    setStones(createStones(stones, size.numberStones))
    setRadius(size.radius)
  }

  const setSelectedStones = (newStone) => setStones(stones.map(stone =>
    stone.selected ? newStone : stone
  ))

  return (
    <div className="pageContainer">
      <div>
        <SizeButtons handler={handler} />
        <Bracelet
          selectStone={(stones, selectIndex) => setStones(toggleSelected(stones, selectIndex))}
          selectAllOfType={chosenStone => setStones(selectAllOfType(chosenStone, stones))}
          deselectAll={() => setStones(deselectAll)}
          radius={radius}
          stones={stones}
        />
        <Stones stones={allStones} setSelectedStones={setSelectedStones} />
      </div>
    </div>
  )
}

export default App;