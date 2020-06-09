import React from 'react';
import PropTypes from 'prop-types';

export default class ClassKomponenta extends React.Component {
    render() {

        return (
            <div>
                <h2>Class komponenta</h2>
                <p>Ime: {this.props.name}</p>
                <p>Godine: {this.props.age}</p>
            </div>
        );
    }
}

// definiranje tipa elemenata zbog validacije
ClassKomponenta.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number
}

// definiranje defaultne vrijednost
ClassKomponenta.defaultProps = {
    age: 11
}