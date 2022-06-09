import { useState, useEffect } from 'react';
import React from 'react';
import('./barraInf.css');

export default function BarraInf() {
  const [dataa, setDataa] = useState([]);
  const fetchURL = 'http://localhost:3000/pratos';

  useEffect(() => {
    (async function () {
      const interval = setInterval(async () => {
        const x = await fetch(fetchURL).then(res => res.json());
        setDataa(x);
      }, 1000);
      return () => {
        clearInterval(interval);
      };
    })();
  }, []);

  return (
    <div className="containerInf">
      {dataa.map(res => (
        <div className="nodesInf" key={res.id} >
          ADICIONAR
          <div>{res.name}</div>
        </div>
      ))}
    </div>
  );
}
