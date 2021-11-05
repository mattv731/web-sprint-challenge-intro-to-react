import React from 'react';
import styled from 'styled-components';

const StyleCharacter = styled.div`
    background-color: #f8f8f8; 
    width: 27vw;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`
const StyledDiv = styled.div`
    padding: 20px;
`
const StyledSpan = styled.span`
    background-color: red;
    color: #f8f8f8;
    font-size:2rem;
    padding: 2px 10px;
    border-radius: 4px;
`

const Character = props => {

    return (
        <StyledDiv>
            <StyleCharacter>
            { props.data.name !== 'Darth Vader' ? <h4><StyledSpan>WANTED</StyledSpan><br />Reward 10,000 Empirial Credits</h4> : <h2>Lord</h2>}
            <h4>Name: {props.data.name}</h4>
            <ul>gender: {props.data.gender}</ul>
            <ul>mass: {props.data.mass}</ul>
            <ul>height: {props.data.height}</ul>
            <ul>color: {props.data.skin_color}</ul>
        </StyleCharacter>
        </StyledDiv>
    )
}
export default Character;