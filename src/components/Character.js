import React from 'react';
import styled from 'styled-components';

const Character = props => {

    return (
        <div>
            <h3>{props.data.name}</h3>
        </div>
    )
}
export default Character;