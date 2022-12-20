import React from "react";
import Button from "@mui/material/Button"
import { useState } from 'react';
import ButtonGroup from "@mui/material/ButtonGroup";
import { red } from '@mui/material/colors';

export default function CountButtons() {

  const [count , setCount] = useState(1);
  const handleIncrement = () => {
    setCount(count + 1 );
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };
  const displayCounter = count > 0;

  return ( 
      <ButtonGroup size="small" aria-label="small outlined button group">
        <Button onClick={handleIncrement}>+</Button>
        {displayCounter && <Button disabled>{count}</Button>}
        {displayCounter && <Button onClick={handleDecrement}>-</Button>}
      </ButtonGroup>
  );
}

