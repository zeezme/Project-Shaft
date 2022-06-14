import React from 'react';
import { Link } from 'react-router-dom';

import './floatingBtn.css';

export function FloatingBtn(props) {
  return (
    <Link className="floatingBtnContainer" to="/">
      {props.title}
    </Link>
  );
}
