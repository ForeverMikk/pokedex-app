import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState: {
        pokemonList: []
    },
    reducers: {
        fetchPokemon(pokemon) {
            return async(dispatch) => {

                async function fetchHandler () {
                    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
        
                    const data = response.data;

                    console.log(data)
                }

                try {
                    await fetchHandler();
                } catch (error) {
                    console.log(error)
                }

            }
        }
    }
})


export const pokemonActions = pokemonSlice.actions;

export default pokemonSlice;

