import React, { useState } from 'react';

export default function Calculator() {
  const [displayValue, setDisplayValue] = useState('0');
  const [previousValue, setPreviousValue] = useState<string | null>(null);
  const [operation, setOperation] = useState<string | null>(null);

  const handleNumberClick = (number: string) => {
    setDisplayValue((prev) => (prev === '0' ? number : prev + number));
  };

  const handleOperationClick = (op: string) => {
    if (displayValue !== null) {
        setPreviousValue(displayValue);
    }
    setDisplayValue('0');
    setOperation(op);
  };

  const handleEqualsClick = () => {
    if (previousValue === null || operation === null || displayValue === null) return;

    const prev = parseFloat(previousValue);
    const current = parseFloat(displayValue);
    let result: number;

    switch (operation) {
      case '+':
        result = prev + current;
        break;
      case '-':
        result = prev - current;
        break;
      case '*':
        result = prev * current;
        break;
      case '/':
        result = prev / current;
        break;
      default:
        return;
    }

    setDisplayValue(String(result));
    setPreviousValue(null);
    setOperation(null);
  };


    const handleClearClick = () => {
        setDisplayValue('0');
        setPreviousValue(null);
        setOperation(null);
    };


    const handleDecimalClick = () => {
        if (!displayValue.includes('.')) {
            setDisplayValue(prev => prev + '.');
        }
    };

    const handleToggleSign = () => {
        setDisplayValue(prev => {
            if (prev === '0') return prev;
            if (prev.startsWith('-')) {
              return prev.slice(1);
            }
            return '-' + prev;
        })
    }


  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-xl shadow-xl border border-gray-200">
      <div className="flex justify-end mb-4">
            <div className="text-2xl font-semibold text-gray-800 p-2 border border-gray-300 rounded-md min-w-[100px] text-right">
                 {displayValue}
            </div>
        </div>
        <div className="grid grid-cols-4 gap-2">
          <button
            onClick={() => handleClearClick()}
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-3 px-4 rounded-md"
          >
            C
          </button>
          <button
              onClick={() => handleToggleSign()}
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-3 px-4 rounded-md"
          >
              +/-
          </button>
            <button
                onClick={() => handleNumberClick('%')}
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-3 px-4 rounded-md"
            >
                %
            </button>
          <button
            onClick={() => handleOperationClick('/')}
            className="bg-orange-400 hover:bg-orange-500 text-white font-bold py-3 px-4 rounded-md"
          >
            /
          </button>
          <button
            onClick={() => handleNumberClick('7')}
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-3 px-4 rounded-md"
          >
            7
          </button>
          <button
            onClick={() => handleNumberClick('8')}
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-3 px-4 rounded-md"
          >
            8
          </button>
          <button
            onClick={() => handleNumberClick('9')}
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-3 px-4 rounded-md"
          >
            9
          </button>
          <button
            onClick={() => handleOperationClick('*')}
            className="bg-orange-400 hover:bg-orange-500 text-white font-bold py-3 px-4 rounded-md"
          >
            *
          </button>
          <button
            onClick={() => handleNumberClick('4')}
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-3 px-4 rounded-md"
          >
            4
          </button>
          <button
            onClick={() => handleNumberClick('5')}
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-3 px-4 rounded-md"
          >
            5
          </button>
          <button
            onClick={() => handleNumberClick('6')}
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-3 px-4 rounded-md"
          >
            6
          </button>
          <button
            onClick={() => handleOperationClick('-')}
            className="bg-orange-400 hover:bg-orange-500 text-white font-bold py-3 px-4 rounded-md"
          >
            -
          </button>
          <button
            onClick={() => handleNumberClick('1')}
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-3 px-4 rounded-md"
          >
            1
          </button>
          <button
            onClick={() => handleNumberClick('2')}
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-3 px-4 rounded-md"
          >
            2
          </button>
          <button
            onClick={() => handleNumberClick('3')}
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-3 px-4 rounded-md"
          >
            3
          </button>
          <button
            onClick={() => handleOperationClick('+')}
            className="bg-orange-400 hover:bg-orange-500 text-white font-bold py-3 px-4 rounded-md"
          >
            +
          </button>
            <button
                onClick={() => handleNumberClick('0')}
                className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-3 px-4 rounded-md col-span-2"
            >
                0
            </button>
            <button
                onClick={() => handleDecimalClick()}
                className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-3 px-4 rounded-md"
            >
                .
            </button>
          <button
            onClick={handleEqualsClick}
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-4 rounded-md"
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
}
