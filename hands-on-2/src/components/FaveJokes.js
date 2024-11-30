import { useEffect, useReducer, useState } from "react";
import axios from "axios";
import { ACTIONS, initialState, reducer } from "../store";

const url = "https://icanhazdadjoke.com/";

const FaveJokes = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [dadJoke, setDadJoke] = useState();

  const getDadJokes = () => {
    axios.get(url, {
      headers: {
        Accept: "application/json"
      }
    })
    .then((res) => {
      setDadJoke(res.data.joke);
    })
    .catch((err) => console.error(err));
  }

  const addJoke = () => {
    dispatch({
      type: ACTIONS.ADD_JOKE,
      payload: {
        dadJoke,
        id: Math.random()
      }
    });
    setTimeout(() => getDadJokes(), 10);
  }

  const removeJoke = (id) => {
    dispatch({ 
      type: ACTIONS.REMOVE_JOKE, 
      payload: id
    });
  }

  useEffect(() => {
    getDadJokes();
  }, []);

  return (
    <div>
      <h3>{dadJoke}</h3>
      <div className="actions">
        <button onClick={() => {
          addJoke();
        }}>Like! :)</button>
        <button onClick={() => getDadJokes()}>Dislike. :/</button>
      </div>

      {
        Object.keys(state.jokes).length === 0 ? <p>Fave Jokes list is empty.</p> : (
          <ul>
            <strong>Fave Jokes</strong>
            {
              state.jokes.map((joke => (
                <li key={joke.id}>
                  {joke.dadJoke}
                  <span className="remove" onClick={() => removeJoke(joke.id)}>Remove</span>
                </li>
              )))
            }
          </ul>
        )
      }
    </div>
  );
}

export default FaveJokes;