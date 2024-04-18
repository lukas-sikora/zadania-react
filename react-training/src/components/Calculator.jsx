import { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "add_digit":
      return { ...state, input: `${state.input}${action.digit}` };
    case "choose_operation":
      return {
        ...state,
        operation: action.operation,
        total: state.input !== "" ? parseFloat(state.input) : state.total,
        input: "",
      };
    case "clear":
      return { input: "", total: 0, operation: null };
    case "evaluate":
      if (state.operation !== null && state.input !== "") {
        return {
          ...state,
          input: "",
          total: calculateResult(state.total, state.input, state.operation),
          operation: null,
        };
      }
      return state;
    default:
      return state;
  }
};

const calculateResult = (total, input, operation) => {
  const inputNumber = parseFloat(input);

  switch (operation) {
    case "+":
      return total + inputNumber;
    case "-":
      return total - inputNumber;
    case "*":
      return total * inputNumber;
    case "/":
      return total / inputNumber;
    default:
      return total;
  }
};

const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const operationSymbolsArray = ["+", "-", "*", "/"];

const Calculator = () => {
  const [state, dispatch] = useReducer(reducer, {
    input: "",
    total: 0,
    operation: null,
  });

  return (
    <>
      <div>Wprowadź dane: {state.input || state.total}</div>
      <div>
        {numberArray.map((digit) => (
          <button
            key={digit}
            onClick={() => dispatch({ type: "add_digit", digit })}
          >
            {digit}
          </button>
        ))}
        {operationSymbolsArray.map((operation) => (
          <button
            key={operation}
            onClick={() => dispatch({ type: "choose_operation", operation })}
          >
            {operation}
          </button>
        ))}
        <button onClick={() => dispatch({ type: "evaluate" })}>=</button>
        <button onClick={() => dispatch({ type: "clear" })}>C</button>
      </div>
    </>
  );
};

export default Calculator;
