import React from 'react';
import Character from './Character';

const Characters = (props) => {

    return (
        <div>
            { props.data.map( (item, idx) => (
            < Character data={item} id={idx}/> )) }
        </div>
    )
}
export default Characters;