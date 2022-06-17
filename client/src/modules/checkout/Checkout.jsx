import React from 'react';

export function Checkout(props) {
  return (
    <div className="cashierRemoveButtonContainer">
      <form
        action="http://192.168.0.8:3000/deluser"
        className={'cashierRemoveButton' + (props.btnState && 'Active')}
        method="post"
      >
        <div className="cashierRemoveButtonTitle">CHECKOUT</div>
        <div className="cashierRemoveButtonInnerContainer">
          <h3>N° da comanda</h3>
          <input id="fid" name="fid" type="number" /></div>

        <button type="submit" className="cashierRemoveButtonSubmit">
          checkout
        </button>
      </form>
    </div>
  );
}
