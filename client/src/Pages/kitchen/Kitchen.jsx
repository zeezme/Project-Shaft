import React from 'react';
import { useState, useEffect } from 'react';
import './kitchen.css';
import { Link } from 'react-router-dom';

export default function Nodes() {
  const [data, setData] = useState([]);
  const [pratos, setPratos] = useState([]);

  const fetchURL = 'http://localhost:3000/users';

  useEffect(() => {
    (async function() {
      const interval = setInterval(async () => {
        const x = await fetch(fetchURL).then(res => res.json());
        setData(x);
      }, 1000);
      return () => {
        clearInterval(interval);
      };
    })();
  }, []);

  useEffect(() => {
    (async function() {
      const interval = setInterval(async () => {
        const x = await fetch('http://localhost:3000/pratos').then(res =>
          res.json()
        );
        setPratos(x);
      }, 1000);
      return () => {
        clearInterval(interval);
      };
    })();
  }, []);

  return (
    <div className="container">
      <div className="buttons">
        <button
          className="button"
          onClick={() => {
            fetch(`http://localhost:3000/adduser`);
          }}
          disabled
        >
          ADD CLIENTE
        </button>
        <button
          className="button"
          onClick={() => {
            fetch(`http://localhost:3000/deluser`);
          }}
        >
          DELL ALL
        </button>

        <Link className="button" to="/addpratos">
          ADD CLIENTE
        </Link>
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
                <li>Exemplo</li>
                <li>Exemplo</li>
                <li>Exemplo</li>
                <li>Exemplo</li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
