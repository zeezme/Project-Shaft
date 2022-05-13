import React from 'react';
import { useState, useEffect } from 'react';
import './nodes.css';

export default function Nodes() {
  const [data, setData] = useState([]);
  const [pratos, setPratos] = useState([]);

  const fetchURL = 'http://localhost:3000/users';

  useEffect(() => {
    (async function () {
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
    (async function () {
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
      </div>
      <div className="node">
        {data.map(dataa => (
          <div className="inside" key={dataa.id}>
            Nome: {dataa.name} {dataa.id}
            <div>Pedido: {dataa.role}</div>
            <div className="pedido">
              <ul>
                <li>Polenta frita</li>
                <li>Moscow Mule</li>
                <li>Bauru</li>
                <li>Hamb. queijo</li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
