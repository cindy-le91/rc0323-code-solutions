import './Button.css'
import { useState } from 'react';

export default function Button(props) {
  const [count, setCount] = useState(1);
  const [color, setColor] = useState('hot-button');

  function handleClick() {
    setCount(count + 1)

    if (count === 3) {
      setColor('hot-button cold')
    }
    if (count === 6) {
      setColor('hot-button cool')
    }
    if (count === 9) {
      setColor('hot-button tepid')
    }
    if (count === 12) {
      setColor('hot-button warm')
    }
    if (count === 15) {
      setColor('hot-button hot')
    }
    if (count === 18) {
      setColor('hot-button nuclear')
    }
  }
  return (
    <button className={color} onClick={handleClick}>
      {props.text}
    </button>
  );
}
