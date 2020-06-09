import React from 'react';

export default function FunctionKomponenta(props) {
    return (
    <div>
        <h2>Function komponenta</h2>
        <p>Ime: {props.name}</p>
        <p>Godine: {props.age}</p>
    </div>
    );
}