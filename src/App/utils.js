import { stones as allStones } from '../config';


export const createStones = (stones, numberStonesRequired) => {
  if (numberStonesRequired < stones.length) {
    return stones.slice(0, numberStonesRequired);
  }
  return [
    ...stones,
    ...Array(numberStonesRequired - stones.length).fill(allStones[0])
  ];
};

export const toggleSelected = (stones, selectedId) => stones.map(
  stone => (stone.id === selectedId
    ? { ...stone, selected: !stone.selected }
    : stone
  ),
);

export const selectAllOfType = (stones, chosenStone) => stones.map(
  stone => (stone.id === chosenStone.id
    ? { ...stone, selected: true }
    : { ...stone, selected: false }
  )
);

export const deselectAll = stones => stones.map(
  stone => ({ ...stone, selected: false })
);

export const replaceSelectedStone = (stones, newStone) => stones.map(
  stone => (stone.selected ? newStone : stone)
);
