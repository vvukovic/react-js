import React from 'react';
import './App.css';
import ClassKomponenta from './components/ClassKomponenta';
import FunctionKomponenta from './components/FunctionKomponenta';

export default class App extends React.Component {
 
  korisnici = [
    {
      ime: 'Vedran',
      godine: 33
    },
    {
      ime: 'Pero',
      godine: 32
    },
    {
      ime: 'Marko',
      godine: 35
    }
  ];
  
  render() {

    return (
      <div className="App">
        <ClassKomponenta name="Marijan" /> {/* definiranje imena direktno bez objekta */}
        <ClassKomponenta name={this.korisnici[0].ime} age={this.korisnici[0].godine} />
        <FunctionKomponenta name={this.korisnici[1].ime} age={this.korisnici[1].godine} />
      </div>

    );
  }
}
