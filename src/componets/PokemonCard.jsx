import React from 'react';
import psyduck from './../assets/Psyduck-black.png';
import './PokemonCard.css';

const PokemonCard = ({id, name, types, stats, sprites}) => {
    return (
        <div className='pokemon-card'>
            <div className="img">
                {sprites ?
                <img src={sprites.front_default} alt="" className='img' /> :
                <img src={psyduck} alt="" className='img' />
                }
            </div>

            <div className='pokemon-data'>
                {id ? <p className='poke-id'>{id}</p> : 
                <>
                    <p> No Pokemon Found </p>
                    <h2>404</h2>
                </>}
                {name && <p className='poke-name'>{name}</p>}
            </div>

            {types && <ul className='pokemon-types'>
                {types.map((type, id) => (
                    <li key={id} className='poke-type'>
                        <p>Type: {type.type.name}</p>   
                    </li>
                ))}
            </ul>}

            {stats && <ul className='pokemon-stats'>
                {stats.map((stat, id) => (
                    <li key={id} className='poke-stats'>
                        <p>{stat.stat.name}: {stat.base_stat}</p>
                    </li>
                ))}
            </ul>}
        </div>
    )
}

export default PokemonCard;