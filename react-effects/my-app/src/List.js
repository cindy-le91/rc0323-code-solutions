/* eslint-disable no-unused-vars -- REMOVE ME */
import { useEffect, useState } from 'react';
import readItems from './read';

export default function List() {
  const [isLoading, setIsLoading] = useState(true);
  const [items, setItems] = useState([]);
  const [error, setError] = useState();

  // Your code here:
  //  - When the component mounts:

  //    - Read the items using `readItems` and update state so the list displays
  useEffect( () => {
    async function fetchData(){
      try{
        const data = await readItems();
        setIsLoading(false);
        setItems(data)
      } catch(error){
        console.log(error)
        setError(error)
      }
    }

      fetchData();
  }, [])
  //    - Handle errors from `readItems`

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error! {error.message}</div>;
  }

  return (
    <ul>
      {items.map((item) => <li key={item.id}>{item.id}: {item.name}</li>)}
    </ul>
  );
}
