import React from 'react';
import { Link } from 'react-router-dom';

import './floatingBtn.css';

export function FloatingBtn(props) {
  return (
    <Link className="floatingBtnContainer" to={props.to}>
      {props.title}
    </Link>
  );
}

export function FloatingBtnFunctional(props) {
  return (
    <div className="floatingBtnContainer" onClick={props.onClickFunction}>
      {props.title}
    </div>
  );
}
