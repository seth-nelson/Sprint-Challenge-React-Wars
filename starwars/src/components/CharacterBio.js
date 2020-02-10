import React from 'react';


const CharacterBio = props => {
    return (
            <div className='character-bio'>
                <h2>{props.name}</h2>
                <h3>{props.gender}</h3>
                <h4>Eye color: {props.eye_color}</h4>
                <h4>Birth year: {props.birth_year}</h4>
            </div>
    );
};

export default CharacterBio;