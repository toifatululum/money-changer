import React from "react";

export default function InputanUang(props) {
  const { tukarUangOptions } = props;
  console.log(tukarUangOptions);
  return (
    <div>
      <input className="inputan-uang" type="number"></input>
      <select className="select-uang" id="">
        {tukarUangOptions.map(option => (
          <option value={option}>{option}</option>
        ))}
      </select>
    </div>
  );
}
