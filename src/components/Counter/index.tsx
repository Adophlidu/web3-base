import { FC, useState } from 'react';

type Props = {
  initialValue?: number;
};

const Counter: FC<Props> = ({ initialValue = 0 }) => {
  const [count, setCount] = useState(initialValue);

  return (
    <div>
      <button className="decrement" onClick={() => setCount(v => v - 1)}>
        decrement
      </button>
      <strong className="number">{count}</strong>
      <button className="increment" onClick={() => setCount(v => v + 1)}>
        increment
      </button>
    </div>
  );
};

export default Counter;
