import React from "react";
//import "./Input.css";

export function Input({ inputItemValue, handleChangeValue }) {
  return (
    <div className="Input">
      <label>Barra de pesquisa</label>
      <input type="text" value={inputItemValue} onChange={handleChangeValue} />
    </div>
  );
}
