import React, { useState } from 'react';
import './Calculater.css';

function Calculator() {
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [result, setResult] = useState('');

  const calculate = (operator) => {
    const num1 = parseInt(number1);
    const num2 = parseInt(number2);
    let calculatedResult;

    switch (operator) {
      case '+':
        calculatedResult = num1 + num2;
        break;
      case '-':
        calculatedResult = num1 - num2;
        break;
      case '*':
        calculatedResult = num1 * num2;
        break;
      case '/':
        calculatedResult = num1 / num2;
        break;
      default:
        calculatedResult = 'Invalid operator';
    }

    setResult(`Result: ${calculatedResult}`);
  };

  const clearValues = () => {
    setNumber1('');
    setNumber2('');
    setResult('');
  };

  return (
    <div className="container">
      <h2>Calculator</h2>
      <form>
        <div className="form-group">
          <label htmlFor="number1">Number 1:</label>
          <input
            type="text"
            id="number1"
            className="form-control"
            value={number1}
            onChange={(e) => setNumber1(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="number2">Number 2:</label>
          <input
            type="text"
            id="number2"
            className="form-control"
            value={number2}
            onChange={(e) => setNumber2(e.target.value)}
          />
        </div>
        <div className="row">
          <div className="col-md-6">
            <button type="button" className=" btn-primary" onClick={() => calculate('+')}>Addition (+)</button>            <button type="button" className=" btn-primary" onClick={() => calculate('-')}>Subtraction (-)</button>
          </div>
          <div className="col-md-6">
            <button type="button" className=" btn-primary mr-1" onClick={() => calculate('*')}>Multiplication (*)</button>  
            <button type="button" className=" btn-primary" onClick={() => calculate('/')}>Division (/)</button>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12"> <br/>
            <button type="button" className=" btn-danger" onClick={clearValues}>Clear</button>
          </div>
        </div>
      </form>
      <div id="result" ><b>{result}</b></div>
    </div>
  );
}

export default Calculator;
