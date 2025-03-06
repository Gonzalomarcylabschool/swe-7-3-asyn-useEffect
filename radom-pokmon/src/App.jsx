import { useState , useEffect} from 'react'
import fetchData from './utils/fetchData'
import './App.css'

const baseURL = 'https://pokeapi.co/api/v2/pokemon/'

 
async function App() {
  const [pokemon, setPokemon] = useState(1)
  const [error, setError] = useState('')

  const randomPokemon = Math.floor(Math.random() * 898) + 1
  const apiUrl = `${baseURL}${randomPokemon}`

  const fetchPokemon = async () => {
    const [data, setData] = await fetchData(apiUrl)
    return data
  }

  console.log(await fetchPokemon())
  // useEffect(() => {
  //   const doFetch = async () => {
  //     const [data, error] = await fetchData(apiUrl)
  //     if (data) setPokemon(data.sprites.front_default)
  //     if (error) setError(error);
  //   }
  //   doFetch();
  // }, [])
  
  const handleClick = async () => {
    const [data, err] = await fetchData(apiUrl)
    // console.log(data)
    if (data) setPokemon(data.sprites.front_default)
    if (err) setError(err);
  }


  return (
   <>
      <button onClick={handleClick}>Get Random pokemon</button>
      <img src={pokemon} alt="" />
    </>
  )
}

export default App
