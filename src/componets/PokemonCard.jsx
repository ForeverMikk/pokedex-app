import React from 'react';
import psyduck from './../assets/Psyduck-black.png';





const PokemonCard = () => {
    return (
        <div className='pokemon-card'>
            <div className="img">
                <img src={psyduck} alt="" className='img'/>
            </div>

            <div className='pokemon-data'>
                <p data-poke-id></p>
            </div>

            <ul className='pokemon-stats'>
                <li data-poke-stats></li>
            </ul>
        </div>
    )
}

export default PokemonCard;