import React from 'react';
import { useState, useEffect } from 'react';
import "./cashier.css"
import { FloatingBtn } from '../../modules/floating_button/FloatingBtn';
import { Checkout } from '../../modules/checkout/Checkout';
import { ClientInput } from '../checkin/ClientInput';


export default function Cashier() {
  const [open, setOpen] = useState("false");
  const [openPlus, setOpenPlus] = useState("false");

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
    <Checkout btnState={open}></Checkout>
    <ClientInput btnState={openPlus}></ClientInput>

    <div className="floatingBtnMultiple">
    <button onClick={()=>{open ? setOpenPlus(!openPlus) : setOpen(!open); setOpenPlus(!openPlus)}
      
    } className="cashierAddButton" >+</button> 

    <button onClick={()=>{openPlus ? setOpen(!open) : setOpenPlus(!openPlus); setOpen(!open) }} className="cashierRemoveButton" >-</button> 
    <FloatingBtn title="voltar" to="/"  />

    
  </div>

  </>
}