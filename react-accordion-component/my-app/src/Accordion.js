import Dropdown from './Dropdown';
import { useState } from 'react';

export default function Accordion({topics}){
  const [activeId, setActiveId] = useState(0);


  function handleDropdownClick(id) {
    if (id === activeId) {
      setActiveId(0)
    } else {
      setActiveId(id)
    }
  }
  return (
    <div>
          {topics.map((topic) => (
        <Dropdown
        isActive={activeId === topic.id}
          onClick={() => handleDropdownClick(topic.id)}
        key={topic.id} header={topic.title}
        content={topic.content} />
      ))}
    </div>
  )
}
