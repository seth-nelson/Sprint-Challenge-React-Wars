import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CharacterBio from './CharacterBio.js';

export default function CharacterCard() {
    const [character, setCharacter] = useState([]);
        useEffect(() => {
                axios
                .get(`https://swapi.co/api/people/`)
                .then(response => {
                    const character = response.data
                    setCharacter(character)
                    console.log('characters', response.data);
                })
                .catch(error => console.log('The force is weak with this one', error));
    }, []);

    return (
        // CardContainer style below
        <div classname='character-card-container'>
            <CharacterBio character={character} />
        </div>
        // CardContainer style above
    );
}