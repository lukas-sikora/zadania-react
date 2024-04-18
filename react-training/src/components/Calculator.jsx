const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const operationSymbolsArray = ["+", "-", "*", "/"];

const Calculator = () => {
  return (
    <>
      <div>
        Wprowadź dane: <span>1231</span>
      </div>
      <div>
        {numberArray.map((digit) => (
          <button key={digit} onClick={() => {}}>
            {digit}
          </button>
        ))}
        {operationSymbolsArray.map((operation) => (
          <button key={operation} onClick={() => {}}>
            {operation}
          </button>
        ))}
        <button onClick={() => {}}>=</button>
        <button onClick={() => {}}>C</button>
      </div>
    </>
  );
};

export default Calculator;
