async function getData() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!response.ok) {
      throw new Error('there was error');
    }

    const jsonData = await response.json();
    console.log(jsonData);
  } catch (error) {
    console.log(error);
  }
}

getData();

async function getPokemon() {
  try {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/1');
    if (!response.ok) {
      throw new Error('there was error');
    }

    const jsonData = await response.json();
    console.log(jsonData);
  } catch (error) {
    console.log(error);
  }
}

getPokemon();
