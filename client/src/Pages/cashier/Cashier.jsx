import React from 'react';
import { useState, useEffect } from 'react';
import "./cashier.css"
import { FloatingBtn } from '../../modules/floating_button/FloatingBtn';


export default function Cashier() {
  const [open, setOpen] = useState("false");

  const [data, setData] = useState([]);

  const fetchURL = 'http://192.168.0.8:3000/users';

  useEffect(() => {
    (async function() {
      const interval = setInterval(async () => {
        const x = await fetch(fetchURL, {
          mode: 'cors'
        }).then(res => res.json());
        setData(x);
      }, 1000);
      return () => {
        clearInterval(interval);
      };
    })();
  }, []);


  return <>
  <div className="cashierContainer">
  <div className="buttons">
        <div className="cashierButton">Clientes no restaurante</div>
      </div>
   <div className="cashierNode">
        {data.map(dataa =>
          <div className="cashierInside" key={dataa.id}>
            <div>
              Nome: {dataa.name}
            </div>
            <div>
              CPF: {dataa.role}
            </div>
            <div>
              N°: {dataa.id}
            </div>
            
          </div>
        )}
      </div>
  </div>
  <div className="cashierRemoveButtonContainer">
    <form action="http://192.168.0.8:3000/deluser" className={"cashierRemoveButton"+(open && "Active")} method="post">
      <div className="cashierRemoveButtonTitle">CHECKOUT</div>
      <div className="cashierRemoveButtonInnerContainer">
      <h3>CPF</h3>
      <input id='fid' name='fid'  type='number'/>
      </div>
     
                
        <button type="submit" className="cashierRemoveButtonSubmit">checkout</button>
   
      </form> 

    </div>
    
    <div className="floatingBtnMultiple">
    <FloatingBtn title="+" to="/clientinput" />
    <button onClick={()=>{setOpen(!open)}} className="cashierRemoveButton" >-</button> 
    <FloatingBtn title="voltar" to="/"  />

    
  </div>

  </>
}
