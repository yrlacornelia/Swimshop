import React from "react";

interface Props {
    label?: string;
    value?: number | string ,
    min?: number,
    max?:number;
     error?: boolean;
     errorMessage?: string;
     type: string;
    // onChange: (value: number) => void;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  }

const Input = ({ label,min, max, value, error, errorMessage, onChange, type }:Props) => {
  
    return ( 
    <div className="flex flex-col w-80" >
        <label className="py-2 gap-1 flex flex-col ">
       {label}
        <input size={30}
          required
    className="flex flex-col w-full p-2"
          type={type}
          min={min}
          max={max}
          value={value}
          
          // onChange={(e) => onChange(parseInt(e.target.value))}
          onChange={onChange}
        />
          {error && <p className="text-red-600">{errorMessage}</p>}
      </label>
      
    </div> );
}
 
export default Input;

