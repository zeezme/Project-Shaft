import React from 'react';
import './homeModule.css';
import { Link } from 'react-router-dom';

export default function HomeModule() {
  return (
    <div className="container">
      <div className="buttons">
        <Link className="button" to="/cashier">
          CAIXA
        </Link>
        <Link className="button" to="/kitchen">
          COZINHA
        </Link>
        <Link className="button" to="/waiter">
          GARÇOM
        </Link>
      </div>
    </div>
  );
}
