import { useUnit } from "effector-react";
import { $count1 } from "../model";

export default function Home() {
  const [count] = useUnit([$count1]);
  return (
    <div>
      <h1>Count: {count}</h1>
    </div>
  );
}
