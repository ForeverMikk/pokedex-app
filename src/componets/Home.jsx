import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './Home.css'
import PokemonCard from './PokemonCard';
import BackToTop from './BackToTop'


const Home = () => {
    
    const [pokemonData, setPokemonData] = useState();

    const getPokemon = async(event) => {
        event.preventDefault();
        const { value } = event.target.pokemon;
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${value.toLowerCase()}`);
        // const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0`);

        const data = response.data;
        setPokemonData(data)
    }

    useEffect(() => {

    }, [])

    return(
        <div className='home'>
            <form className='form' action="" onSubmit={(event) => getPokemon(event)}>
                <input type="text" name="pokemon" id="input" className='input'/>
                <button type='submit'> <FontAwesomeIcon icon={faSearch} color='white'/> </button>
            </form>

            <PokemonCard {...pokemonData}/>

            <BackToTop />

        </div>
    )
}


export default Home;