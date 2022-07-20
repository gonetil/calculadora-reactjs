import './App.css';
import Boton from './componentes/Boton';
import Pantalla from './componentes/Pantalla';
import BotonClear from './componentes/BotonClear';
import Logo from './componentes/Logo';
import { useState } from 'react';
import { evaluate, isNumeric } from 'mathjs';


function App() {
  const [input, setInput] = useState(0);
  const [lastInput, setLastInput] = useState(null);
  
  const isValidInput=(lastInput, newInput) => {
    let isValid = ((!lastInput) || !(isNaN(lastInput) && isNaN(newInput))); 
     return isValid;  
   }
  
  const agregarInput = (val) => { 
    
    if (isValidInput(lastInput,val)) {
      setLastInput(val);
      setInput (
                ((input == '0') && (! isNaN(val))) 
                  ? val 
                  : input + '' + val
                );
      }
    };
  const clearInput = () => { setInput(0) };

  const row = (values) => { 
          return values.map((val) => <Boton handleClick={agregarInput}>{val}</Boton>)};
  return (
    <div className='App' >
        <Logo css='freecodecamp-logo' alt='Logo de freecodecamp' />
        <div className='contenedor-calculadora' >
          <Pantalla valor={input}/>
          <div className='fila'> { row([1,2,3,'+'])} </div>
          <div className='fila'> { row([4,5,6,'-'])} </div>
          <div className='fila'> { row([7,8,9,'*'])} </div>
          <div className='fila'>
            <Boton handleClick={() => setInput(evaluate(input)) }>=</Boton>
            { row([0,'.','/'])}
          </div>
          <div className='fila'>
            <BotonClear handleClick = {clearInput}>
              Clear
            </BotonClear>
          </div>
        </div>

    </div>
  );
}

export default App;
