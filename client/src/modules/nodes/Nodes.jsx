import React from 'react';
import { useState, useEffect } from 'react';
import './nodes.css';
import { Link } from 'react-router-dom';

export default function Nodes() {
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
        <button className="button">
          <Link className="teste" to="/kitchen">
            COZINHA
          </Link>
        </button>

      </div>
    </div>
  );
}
