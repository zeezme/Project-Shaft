import React from 'react';
import { useState, useEffect } from 'react';
import './kitchen.css';
import {
  FloatingBtn,
  FloatingBtnFunctional
} from '../../modules/floating_button/FloatingBtn';

export default function Nodes() {
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

  return (
    <div className="container">
      <div className="buttons">
        <div className="button">COZINHA</div>
      </div>
      <div className="node">
        {data.map(dataa =>
          <div className="inside" key={dataa.id}>
            <div>
              Nome: {dataa.name}
            </div>
            <div>
              CPF: {dataa.role}
            </div>
            <div>
              N°: {dataa.id}
            </div>
            <div className="pedido">
              <ul>
                <li>Sem pedidos</li>
              </ul>
            </div>
          </div>
        )}
      </div>
      <div className="floatingBtnMultiple">
        <FloatingBtn title="voltar" to="/" />
      </div>
    </div>
  );
}
