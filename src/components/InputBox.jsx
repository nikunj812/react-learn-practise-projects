import React from 'react'

const InputBox = ({
  price,
  selectWeightUnit,
  weightUnits = [],
  onPriceChange,
  onWeightUnitChange
}) => {
  return (
    <div className="flex justify-center items-center  w-[800px] h-[200px] bg-white">
        <input 
          type="number" 
          className="border border-solid w-[300px] h-[50px] p-3" 
          value={price}
          onChange={(e) => onPriceChange && onPriceChange(e.target.value)}
         />
        <select 
          className="border border-solid w-[150px] h-[50px]" 
          value={selectWeightUnit}
          onChange={(e) => onWeightUnitChange && onWeightUnitChange(e.target.value)}
          >
          {weightUnits.map((weightUnit, key) => {
             return (
              <option key={key} value={weightUnit.value}>
                {weightUnit.label}
              </option>
            );
          })}
        </select>
    </div>
  )
}

export default InputBox