import { useEffect, useState } from 'react';
import { useTimeout } from './hooks/use-settimeout';

function App() {
  const [callback, setCallback] = useState(() => () => console.log('callback1'));
  useTimeout(callback, 1000);
  useEffect(() => {
    setTimeout(() => setCallback(() => () => console.log('callback2')), 700);
  }, []);
  return null;
}

export default App;
