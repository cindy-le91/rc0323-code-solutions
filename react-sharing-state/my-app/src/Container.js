import React from 'react';
import { useState } from 'react';

/**
 * A container of items.
 * One item is displayed at a time, with buttons to flip through them:
 * - Next and Prev scroll forward and backward one item
 * - An array of buttons scroll to a specific item
 * TODO: The buttons don't work!
 */
export default function Container({ items }) {
  // create state for current index
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((currentIndex - 1 + items.length) % items.length);
  };

  const handleNextClick = () => {
    setCurrentIndex((currentIndex + 1) % items.length);
  };

  const handleSelect = (index) => {
    setCurrentIndex(index);
  };


  return (
    <div>
      <div>{items[currentIndex]}</div>
      <div>
        <CustomButton text="Prev" clickFunction={handlePrevClick} />
        <Indicators currentIndex={currentIndex} onSelect={handleSelect} count={items.length} />
        <CustomButton text="Next" clickFunction={handleNextClick} />
      </div>
    </div>
  );
}

/**
 * A component that wraps a DOM button.
 * Props:
 *   text: The button's text
 *
 * TODO: Make the background color a prop, default white.
 * TODO: When clicked, the parent needs to be notified.
 */
function CustomButton({ isActive, text, clickFunction }) {
  const buttonStyle = isActive ? { backgroundColor: 'lightblue' } : { backgroundColor: 'white' };

  return <button onClick={clickFunction} style={buttonStyle}>{text}</button>;
}

/**
 * An array of indicators (buttons).
 * Props:
 *   count: The number of indicators to display
 *
 * TODO: When an indicator is selected, the active item in the Container
 *       should switch to the index of the selected indicator.
 *       To avoid confusion, use `onSelect` for the event prop name.
 * TODO: Highlight the active indicator lightblue.
 */
function Indicators({ currentIndex, count, onSelect }) {
  const buttons = [];
  for (let i = 0; i < count; i++) {
    buttons.push(
      <CustomButton isActive={currentIndex === i} key={i} text={i} clickFunction={() => onSelect(i)} />
    );
  }
  return <div>{buttons}</div>;
}
