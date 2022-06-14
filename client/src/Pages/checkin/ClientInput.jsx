import {Link} from "react-router-dom";
import React from 'react';
import('./clientInput.css');

export default function AddPratos() {
 
  return (
  <>
    <div className="addPratosContainer">
      Entrada cliente
      <form action="http://192.168.0.8:3000/adduser" className='addPratosForm' method="post">
        <label for="fprato">Nome <input id='fprato' name='fprato' type='text'></input> </label>
        <br/>
        <br/>  
        <label for="fvalor">CPF <input type='number' id='fvalor' name='fvalor'></input></label>  
        <br/>
        <br/>
        <button type="submit" className="submitButton">Adicionar</button>
        <button className='exitButton' type="reset">
          <Link className="exitButton" to="/">
            Voltar
          </Link>
        </button>
     
      </form>

      

    </div>
  </>
  )
}
