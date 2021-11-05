import React from 'react';
import Character from './Character';
import styled from 'styled-components'

const Characters = (props) => {

const StyledCharacters = styled.div`
display: flex;
flex-wrap: wrap;
padding: 30px;
`

    return (
        <StyledCharacters>
            { props.data.map( (item, idx) => (
            < Character data={item} id={idx}/> )) }
        </StyledCharacters>
    )
}
export default Characters;