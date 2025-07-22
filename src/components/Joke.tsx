import { useState } from 'react'
import "./Joke.css"

function Joke() {
    const [phrase, setPhrase] = useState("")
    const [error, setError] = useState("")

    const fetchApi = () => {
        fetch("https://sv443.net/jokeapi/v2/joke/Programming?type=single")
        .then((res) => res.json())
        .then((data) => {
            setError("")
            if(data.error){
                setError("API Error!")
            } else{
                setPhrase(data.joke)
            }
        })
    }

  return (
    <div>
        <button onClick={() => fetchApi()}>Click to Generate a Joke</button>
        <p>{error ? error : phrase}</p>
    </div>
  )
}

export default Joke