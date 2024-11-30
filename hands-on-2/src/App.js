import { useState } from 'react';
import './App.css';
import FaveJokes from './components/FaveJokes';
import SearchJokes from './components/SearchJokes';

/**
  Objective: 
  - On button click, display the corresponding components
    - default to FaveJokes component
  - For the FaveJokes component
    - If no jokes are saved, display a text that shows that no jokes are saved
    - Render list of jokes saved
    - Can generate new joke on any action triggered
    - On like, joke should be added to list
    - For the list of jokes, we can remove jokes
  - For SearchJokes component
    - Utilize the Search endpoint of the dadjokes api
    - Use an input field as the term to generate a search query, as well as display number of jokes generated
*/

function App() {

  const [activeComponent, setActiveComponent] = useState("fave");

  const handleClick = (value) => {
    setActiveComponent(value);
  }

  const renderComponent = () => {
    switch(activeComponent) {
      case "fave":
        return <FaveJokes />
      case "search":
        return <SearchJokes />
      default:
        return <FaveJokes />
    }
  }

  return (
    <main>
      <h1>Dad Jokes!</h1>
      <div className="actions">
        <button onClick={() => handleClick("fave")}>Give me a joke</button>
        <button onClick={() => handleClick("search")}>Search Joke</button>
      </div>
      <hr />
      {renderComponent()}
    </main>
  );
}

export default App;
