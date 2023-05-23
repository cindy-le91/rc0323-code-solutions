import logo from './logo.svg';
import './App.css';
import Button from './Button.js'
import './Button.css'

function App() {
  function handleCustomClick(text){
    window.alert(text);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div>
          <Button color="first" text='Hello' onCustomClick={handleCustomClick}/>
          <Button color="second" text='Sunshine' onCustomClick={handleCustomClick} />
          <Button color="third" text='Potatoes' onCustomClick={handleCustomClick} />
        </div>
      </header>
    </div>
  );
}

export default App;
