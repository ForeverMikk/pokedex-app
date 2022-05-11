import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import React, { useEffect } from 'react';
import PokemonCard from './PokemonCard';

const Home = () => {
    
    const searchPokemon = async(event) => {
        event.preventDefault();
        const { value } = event.target.pokemon;
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${value.toLowerCase()}`);

        const data = response.data;
        
        return data
    }

    useEffect(() => {


      
    }, [])

    return(
        <>
            <form action="" onSubmit={(event) => searchPokemon(event)}>
                <input type="text" name="pokemon" id=""  />
                <button type='submit'> <FontAwesomeIcon icon={faSearch} /> </button>
            </form>

            <PokemonCard />


        </>
    )
}


export default Home;