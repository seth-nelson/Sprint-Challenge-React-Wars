import React from 'react';
import styled from 'styled-components';


//Styling

const BioCardStyling = styled.div`
    width: 20%;
    margin: 0 auto;
    color: yellow;
    background-color: black;
    border-radius: 20px;
    border: 2.5px solid yellow;
    opacity: 75%;
`;

const TitleStyling = styled.h1`
    color: white;
    text-shadow: 1px 1px red;
`;

//end of styling

const CharacterBio = props => {
    return (
        <BioCardStyling>
            <div className='character-bio'>
                <TitleStyling>{props.name}</TitleStyling>
                <h3>{props.gender}</h3>
                <h4>Eye color: {props.eye_color}</h4>
                <h4>Birth year: {props.birth_year}</h4>
            </div>
        </BioCardStyling>
    );
};

export default CharacterBio;