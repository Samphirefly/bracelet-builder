import { stones as allStones } from './config';


export const createStones = (stones, numberStonesRequired) => {
    if (numberStonesRequired < stones.length) {
      return stones.slice(0, numberStonesRequired)
    } else {
      return [
        ...stones,
        ...Array(numberStonesRequired - stones.length).fill(allStones[0])
      ]
    }
  }