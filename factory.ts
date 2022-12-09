import { createEvent, createStore, sample } from "effector";

export const createCounter = () => {
  const $count = createStore(100);
  const increment = createEvent();

  sample({
    clock: increment,
    source: $count,
    fn: (count) => count + 1,
    target: $count,
  });

  return { $count, increment };
};
