import { useState } from 'react';
import './App.css';

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
  return (
    <main style={{
      padding: "24px"
    }}>
      <h1>Dad Jokes!</h1>
      <div style={{
        display: "flex",
        gap: "8px"
      }}>
        <button>Give me a joke</button>
        <button>Search Joke</button>
      </div>
    </main>
  );
}

export default App;
