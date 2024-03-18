import Button from '@/components/calculator/Button';
import Display from '@/components/calculator/Display';
import { useState } from 'react';
import './calculator.css'

export default function Calculator(){
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (value) => {
    if (value === '=') {
      try {
        setResult(eval(input));
      } catch (error) {
        setResult('Error');
      }
    } else if (value === 'C') {
      setInput('');
      setResult('');
    } else {
      setInput((prevInput) => prevInput + value);
    }
  };

  return (
    <div className='app-container'>
      <div className="calculator">
        <Display input={input} result={result} />
        <div className="buttons">
          <Button onClick={handleClick}>7</Button>
          <Button onClick={handleClick}>8</Button>
          <Button onClick={handleClick}>9</Button>
          <Button onClick={handleClick}>/</Button>
          <Button onClick={handleClick}>4</Button>
          <Button onClick={handleClick}>5</Button>
          <Button onClick={handleClick}>6</Button>
          <Button onClick={handleClick}>*</Button>
          <Button onClick={handleClick}>1</Button>
          <Button onClick={handleClick}>2</Button>
          <Button onClick={handleClick}>3</Button>
          <Button onClick={handleClick}>-</Button>
          <Button onClick={handleClick}>0</Button>
          <Button onClick={handleClick}>.</Button>
          <Button onClick={handleClick}>+</Button>
          <Button onClick={handleClick}>=</Button>
          <Button onClick={handleClick}>C</Button>
        </div>
      </div>
    </div>
  
  );
};

