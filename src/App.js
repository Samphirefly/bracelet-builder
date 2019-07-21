import React, { useState } from 'react';
import Bracelet from './Bracelet/Bracelet';
import Stones from './Stones/Stones';
import { stones as allStones } from './config';
import './App.scss';

const sizes = {
  large: {
    id: 'large',
    numberStones: 24,
    radius: 500
  },
  medium: {
    id: 'medium',
    numberStones: 22,
    radius: 450
  },
  small: {
    id: 'small',
    numberStones: 20,
    radius: 400
  }
}

const createStones = (stones, numberStonesRequired) => {
  if (numberStonesRequired < stones.length) {
    return stones.slice(0, numberStonesRequired)
  } else {
    return [
      ...stones,
      ...Array(numberStonesRequired - stones.length).fill(allStones[0])
    ]
  }
}


// const BraceletSizeSelector = ({ handler }) => (
//   <div>
//     <button onClick={handler} value="small">Small</button>
//     <button onClick={handler} value="medium">Medium</button>
//     <button onClick={handler} value="large">Large</button>
//   </div>
// );

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


  const SizeButtons = () => (

    <div id="buttonContainer">
      <button btn-type="smallbtn" className="btn" onClick={handler} value="small">
        Small Bracelet <br />
        6.5"
    </button>
      <button btn-type="mediumbtn" className="btn activebtn" onClick={handler} value="medium">
        Medium Bracelet <br />
        7"
    </button>
      <button btn-type="largebtn" className="btn" onClick={handler} value="large">
        Large Bracelet <br />
        7.5"
    </button>
    </div>

  )


  return (
    <div className="pageContainer">
      <div>
        <SizeButtons />
        <Bracelet selectStone={selectStone} radius={radius} stones={stones} selectAllOfType={selectAllOfType} deselectAll={deselectAll} />
        <Stones stones={allStones} setSelectedStones={setSelectedStones} />
      </div>
    </div>
  )
}

export default App;