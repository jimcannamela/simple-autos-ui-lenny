import React from 'react';
import Auto from './Components/Automobile';

function AutoList({inventory}) {
  return (
    <>
      <ul>
          { inventory.map((auto) => <Auto auto = {auto}/>) }
      </ul>
    </>
  );
}
export default AutoList;