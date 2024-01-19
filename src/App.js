import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';

function App() {

  const [mostrarEcuador, setMostrarEcuador] = useState(false);

  const mostrarPalabra = () => {
    setMostrarEcuador(true);
  };

  const firstColor=(y)=>{
    y.stopPropagation();
    alert('Amarillo')
  }
  const secondColor=(b)=>{
    b.stopPropagation();
    alert('Azul')
  }
  const thirthColor=(r)=>{
    r.stopPropagation();
    alert('Rojo')
  }

  return (
    <div className='yellow' id='yellow' onClick={firstColor}>
      {mostrarEcuador && (
        <div>
          <p>Ecuador</p>
        </div>
      )}
      <div className='blue' id='blue' onClick={secondColor}>
        <p>Ecuador</p>
        <div className='red' id='red' onClick={thirthColor}>
          <p>Ecuador</p>
        </div>
      </div>
    </div>
  );
}

export default App;
