import React, { useState } from 'react';
import Bracelet from './Bracelet/Bracelet';
import Stones from './Stones/Stones';
import { stones as allStones, sizes } from './config';
import SizeButtons from './SizeButtons/SizeButtons';
import './App.scss';

import { createStones } from './utils';

const defaultStoneList = createStones([], sizes.large.numberStones);

const App = () => {
  const [stones, setStones] = useState(defaultStoneList);
  const [radius, setRadius] = useState(sizes.large.radius);

  const handler = (e) => {
    const size = sizes[e.target.value]
    setStones(createStones(stones, size.numberStones))
    setRadius(size.radius)
  }

  const selectStone = (stones, selectIndex) => setStones(stones.map((stone, index) =>
    selectIndex === index ? {
      ...stone, selected: !stone.selected
    } : stone
  ))

  const setSelectedStones = (newStone) => setStones(stones.map(stone =>
    stone.selected ? newStone : stone
  ))

  const deselectAll = () => setStones(stones.map(stone => ({ ...stone, selected: false })))

  const selectAllOfType = chosenStone => {
    setStones(stones.map(stone =>
      stone.id === chosenStone.id ? { ...stone, selected: true } : { ...stone, selected: false }
    ))
  }




  return (
    <div className="pageContainer">
      <div>
        <SizeButtons handler={handler} />
        <Bracelet selectStone={selectStone} radius={radius} stones={stones} selectAllOfType={selectAllOfType} deselectAll={deselectAll} />
        <Stones stones={allStones} setSelectedStones={setSelectedStones} />
      </div>
    </div>
  )
}

export default App;