import React from 'react';
import { FloatingBtn } from '../../modules/floating_button/FloatingBtn';

export default function Waiter() {
  const string = "x001q2x002q1"
  const arr = string.split('x');
  const divider = () => {
    
  }
      
  
  return <>
    <div onClick={() => {console.log(string.split('x'))}}>The string is {arr}</div>
    <div className="floatingBtnMultiple">
      <FloatingBtn title="voltar" to="/"></FloatingBtn>
    </div>
  </>;
}
