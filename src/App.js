import React, { useReducer } from "react";
import "./calculator.css";
// import "./increment.css";
import "./container.css";
import DigitButton from "./DigitButton";
import OperationButton from "./OperationButton";
import Navbar from "./Components/Navbar";
// import AddSubtract from "./Components/AddSubtract";
// import ColorPallette from "./Components/ColorPallette";
import {useState} from 'react';
// import BackgroundChanger from "./Components/BackgroundChanger";
import '../node_modules/font-awesome/css/font-awesome.min.css'; 

export const ACTIONS = { //object containing the type to determine what to do with the data
  ADD_DIGIT: "add-digit",
  CHOOSE_OPERATION: "choose-operation",
  CLEAR: "clear",
  DELETE_DIGIT: "delete-digit",
  EVALUATE: "evaluate",
};

function reducer(state, { type, payload }) { //reducer function taking the state and an object with props: type and payload. 
  switch (type) { //switch statement to loop through the types 
    case ACTIONS.ADD_DIGIT: 
      if (state.overwrite) { //overwrite is set to true after two operands were evaluated 
        return { //every return returns the state
        ...state, 
        currentOperand: payload.digit,
        overwrite: false,
        }
      }
      if (payload.digit === "0" && state.currentOperand === "0") { //in the case of one 0 followed by another (00) is not a number
        return state;
      }
      if (payload.digit === "." && state.currentOperand.includes(".")) { // in the case of two decimal points being chosen one after another
        return state;
      }
      return {
        ...state,
        currentOperand: `${state.currentOperand || ""}${payload.digit}`, //if no current operand, return nothing and the new digit, if already a current operand, return both. 
      };
    case ACTIONS.CLEAR: //clear the state
      return {};
    case ACTIONS.CHOOSE_OPERATION:
      if (state.currentOperand == null && state.previousOperand == null) { //if there are no operands to perform an operation on, return the state
        return state;
      }

      if (state.currentOperand == null ) { //cannot evaluate with just one operand, return state but keep the operation
        return {
          ...state,
          operation: payload.operation,
        }
      }

      if (state.previousOperand == null) { //if there is no previous operand, the current becomes the previous and the operation is saved
        return {
          ...state,
          operation: payload.operation,
          previousOperand: state.currentOperand,
          currentOperand: null,
        }
      }

      return { //if none of the case above, evaluate and set current operand to null to promt user to enter new one or discontinue
        ...state,
        previousOperand: evaluate(state),
        operation: payload.operation,
        currentOperand: null,
      }
    case ACTIONS.EVALUATE:
      if (state.operation == null || state.currentOperand == null || state.previousOperand == null) { //if either one is null, cannot evaluate, return state
        return state;
      }

      return {  //otherwise, evaluate and set all states to null whilst adding a new prop (overwrite) which tells the calculator that any digit added after an evaluation 
                //is a new operand and not an addition to the evaluation
        ...state,
        overwrite: true,
        previousOperand: null,
        operation: null,
        currentOperand: evaluate(state),
      }
    case ACTIONS.DELETE_DIGIT:
      if (state.overwrite) { //if an evaluation was just performed meaning overwrite is true, set it to false and clear the output
        return {
        ...state,
        overwrite: false,
        currentOperand: null,
        }
      }
      if (state.currentOperand == null) { //if there is no current operand (nothing to delete), return state
        return state;
      }
      if (state.currentOperand.length === 1) { //if there is just one digit, delete will essentially set the current operand to null (1-1 = 0)
        return {
          ...state,
          currentOperand: null,
        }
      }
      return { //if more than one digit, remove last digit
        ...state,
        currentOperand: state.currentOperand.slice(0,-1),
      }
    default:
      return state;
  }
}

function evaluate( {currentOperand, previousOperand, operation} ) {
  const prev = parseFloat(previousOperand) //parses a string, important since that's were dealing with and cannot perform algebraic operations on non-numbers (correctly)
  const current = parseFloat(currentOperand)
  if (isNaN(prev) || isNaN(current)) return "" //if either the previous or current operands are non-numbers, return ""
  let computation = ""
  switch(operation) { //perform computations and set variable accordingly
    case "+":
      computation = prev + current
      break
    case "-":
      computation = prev - current
      break
    case "*":
      computation = prev * current
      break
    case "/":
      computation = prev / current
      break
    default: 
      break
  }

  return computation.toString(); // once again, we're dealing with strings so we must convert back to string
}

const INTEGER_FORMATTER = new Intl.NumberFormat("en-us", { // integer formatter syntax
  maximumFractionDigits: 0,
})

function formatOperand(operand) {
  if (operand == null) return // if operand is null, return nothing
  const [integer, decimal] = operand.split('.') // split the operand between the decimal point to determine the integer and decimal
  if (decimal == null) return INTEGER_FORMATTER.format(integer); //  if no decimal, simply format just the integer
  return `${INTEGER_FORMATTER.format(integer)}.${decimal}` // if there is a decimal, format the integer still, add the decimal point and then the decimal
}

function App() {
  const [color, setColor] = useState({"--changingColor": 'white',});
  // const [click, setClicked] = useState(false);

  const [{ currentOperand, previousOperand, operation }, dispatch] = useReducer(
    reducer,
    {}
  );

  return (
    <>
      {/* <div className="circle"></div> */}
      <Navbar setColor={setColor} />
      <div style={color} className="container">
        <div className="calculator-grid">
          <div style={color} className="output">
            <div className="previous-operand"> 
              {formatOperand(previousOperand)} {operation} 
            </div>
            <div style={color} className="current-operand">{formatOperand(currentOperand)}</div>
          </div>
          <button
            style={color}
            className="span-two"
            onClick={() => dispatch({ type: ACTIONS.CLEAR })}
          >
            AC
          </button>
          <button 
            style={color} onClick={() => dispatch({ type:ACTIONS.DELETE_DIGIT})}>DEL</button>
          <OperationButton color={color} operation="/" dispatch={dispatch} />
          <DigitButton color={color} digit="1" dispatch={dispatch} />
          <DigitButton color={color} digit="2" dispatch={dispatch} />
          <DigitButton color={color} digit="3" dispatch={dispatch} />
          <OperationButton color={color} operation="*" dispatch={dispatch} />
          <DigitButton color={color} digit="4" dispatch={dispatch} />
          <DigitButton color={color} digit="5" dispatch={dispatch} />
          <DigitButton color={color} digit="6" dispatch={dispatch} />
          <OperationButton color={color} operation="+" dispatch={dispatch} />
          <DigitButton color={color} digit="7" dispatch={dispatch} />
          <DigitButton color={color} digit="8" dispatch={dispatch} />
          <DigitButton color={color} digit="9" dispatch={dispatch} />
          <OperationButton color={color} operation="-" dispatch={dispatch} />
          <DigitButton color={color} digit="." dispatch={dispatch} />
          <DigitButton color={color} digit="0" dispatch={dispatch} />
          <button style={color} className="span-two" onClick={() => dispatch ({ type: ACTIONS.EVALUATE})}>=</button>
        </div>
      </div>
      {/* <AddSubtract /> */}
      </>
  );
}

export default App;
