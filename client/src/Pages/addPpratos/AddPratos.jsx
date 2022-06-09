import {Link, useNavigate} from "react-router-dom";
import React from 'react';
import('./addPratos.css');

export default function AddPratos() {
  const navigate = useNavigate()

  const handleClick = e => {
    e.preventDefault()
    // navigate(-1);
    navigate("/kitchen")
  }
  return (
  <>
    <div className="addPratosContainer">
      Adicionar Prato
      <form action="http://192.168.0.8:3000/adduser" className='addPratosForm' method="post">
        <label for="fprato">Nome <input id='fprato' name='fprato' type='text'></input> </label>
        <br/>
        <br/>  
        <label for="fvalor">CPF <input type='number' id='fvalor' name='fvalor'></input></label>  
        <br/>
        <br/>
        <button onSubmit={handleClick} type="submit" className="submitButton" >Adicionar</button>
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
