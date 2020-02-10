import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CharacterBio from './CharacterBio.js';

export default function CharacterCard() {
    const [characters, setCharacters] = useState([]);
        useEffect(() => {
                axios
                .get(`https://swapi.co/api/people/`)
                .then(response => {
                    const characters = response.data.results
                    setCharacters(characters)
                    console.log(response.data.results);
                })
                .catch(error => {
                    console.log('The force is weak with this one', error);
                })
    }, []);

    return (
        // CardContainer style below
        <div className='character-card-container'>
            {characters.map(character => {

                return (
                    <CharacterBio 
                        key={character.new}
                        name={character.name}
                        height={character.height}
                        eye_color={character.eye_color}
                        birth_year={character.birth_year}
                        gender={character.gender}
                    />
                );
            })}
        </div>
        // CardContainer style above
    );
}