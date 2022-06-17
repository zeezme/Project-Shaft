import {Link} from "react-router-dom";
import React from 'react';
import('./clientInput.css');

export function ClientInput(props) {
 
  return (
  <>
  
    <div className={"addPratosContainer"+(props.btnState && 'Active')}>
      <div className="text">Check in</div>
      <form action="http://192.168.0.8:3000/adduser" className='addPratosForm' method="post">
      <div className="text2">Name</div>
      <input id='fname' name='fname' type='text'></input>
      <div className="text2">CPF</div>

      <input type='number' id='fcpf' name='fcpf'></input>
     
      <button type="submit" className="clientInputSubmit">Adicionar</button>

     
      </form>

      

    </div>
  </>
  )
}
