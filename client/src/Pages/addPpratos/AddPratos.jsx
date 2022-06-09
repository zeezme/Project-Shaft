import React from 'react';
import('./addPratos.css');

export default function AddPratos() {
  return (
  <>
    <div className="addPratosContainer">
      Adicionar Prato
      <form className='addPratosForm'>
      <label for="fprato">Prato </label>
        <input id='fprato' name='fprato'></input> <br/>
        
        <br/><label for="fvalor">Valor </label>
        <input type='number' placeholder='$' id='fvalor' name='fvalor'></input>
        
      </form>

      <button className='submitButton'>Adicionar</button>
    </div>
  </>
  )
}
