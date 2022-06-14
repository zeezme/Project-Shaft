import React from 'react';
import './homeModule.css';
import { Link } from 'react-router-dom';

export default function HomeModule() {
  return (
    <div className="container">
      <div className="buttons">
        <button
          className="button"
          onClick={() => {
            fetch(`http://localhost:3000/adduser`);
          }}
        >
          CAIXA
        </button>

        <Link className="button" to="/kitchen">
          COZINHA
        </Link>
      </div>
    </div>
  );
}
