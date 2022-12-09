import { createQuery } from "@farfetched/core";
import { createEffect, createStore } from "effector";
import { status } from "patronum";
import { createCounter } from "./factory";

export const $count1 = createStore(0);
export const $count2 = createStore(0);

// Ok
console.log("[Stores sids]:", $count1.sid, $count2.sid);

const fx1 = createEffect(() => 42);
const fx2 = createEffect(() => 42);

// Ok
console.log("[Effect sids]:", fx1.sid, fx2.sid);

export const $s1 = status({ effect: fx1 });
export const $s2 = status({ effect: fx1 });
export const $s3 = status({ effect: fx1 });

// Bug
console.log("[Status sids]:", $s1.sid, $s2.sid, $s3.sid);

const q1 = createQuery<void, string>({
  handler: async () => "foo",
});

const q2 = createQuery<void, string>({
  handler: async () => "foo",
});

// Bug
console.log("[Query data sids]:", q1.$data.sid, q2.$data.sid);

const model1 = createCounter();
const model2 = createCounter();
const model3 = createCounter();

// Bug
console.log(
  "[Custom factory sids]:",
  model1.$count.sid,
  model2.$count.sid,
  model3.$count.sid
);
