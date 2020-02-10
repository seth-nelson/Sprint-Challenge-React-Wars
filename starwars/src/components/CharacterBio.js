import React from 'react';


const CharacterBio = props => {
    return (
        <div key={props.new}>
            <div class='character-bio'>
                <h2>{props.name}</h2>
                
            </div>
        </div>
    );
};

export default CharacterBio;