import { useState, useEffect } from "react";
import axios from "axios";

const url = "https://icanhazdadjoke.com/search";

const SearchJokes = () => {

  const [term, setTerm] = useState("");
  const [dadJokes, setDadJokes] = useState();
  
  const handleKeyUp = (event) => {
    if (event.keyCode === 13) {
      if (term === "") return;
      searchJoke(term);
    }
  }

  const searchJoke = async(term) => {
    await axios.get(`${url}?term=${term}`, {
      headers: {
        Accept: "application/json"
      }
    })
    .then((res) => {
      setDadJokes(res.data);
    })
    .catch((err) => console.error(err));
  }

  return (
    <div>
      <input 
        type="text"
        value={term}
        onChange={e => setTerm(e.target.value)}
        placeholder="Enter to submit"
        onKeyUp={handleKeyUp}
      />

      <span style={{marginLeft: "8px"}}>{dadJokes?.total_jokes && "Jokes found: "} {dadJokes?.total_jokes}</span>
      {
        dadJokes?.results.length === 0 ? <p>No results!</p> : (
          dadJokes?.results.map((joke) => (
            <p key={joke.id}>{joke.joke}</p>
          ))
        ) 
      }

    </div>
  )
}

export default SearchJokes;