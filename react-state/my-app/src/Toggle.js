import './Toggle.css'
import { useState } from 'react';

export default function Toggle(props) {
  const [isClicked, setIsClicked] = useState(false);
  console.log('useState', isClicked)

  function handleClick(){

    console.log('beforeSetter', isClicked)
    setIsClicked(!isClicked)
    console.log('afterSetter', isClicked)
  }
  return (
    <button className={isClicked ? 'white' : props.color} onClick={handleClick}>
      {props.text}
    </button>
  );
}
