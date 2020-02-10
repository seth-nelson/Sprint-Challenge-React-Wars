import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CharacterBio from './CharacterBio.js';
import styled from 'styled-components';

//styling
const ContainerStyling = styled.div`
    padding: 20px;
`;
//end of styling

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
                    <ContainerStyling className='card-container'>
                        <CharacterBio 
                            name={character.name}
                            gender={character.gender}
                            eye_color={character.eye_color}
                            birth_year={character.birth_year}
                        />
                    </ContainerStyling>
                );
            })}
        </div>
        // CardContainer style above
    );
}