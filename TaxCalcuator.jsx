import React, { useState } from "react";

function TaxCalculator() {
  const [income, setIncome] = useState(0);
  const [tax, setTax] = useState(null);

  const calculate = () => {
    let result = 0;
    if (income <= 250000) result = 0;
    else if (income <= 500000) result = (income - 250000) * 0.05;
    else if (income <= 1000000) result = (income - 500000) * 0.2 + 12500;
    else result = (income - 1000000) * 0.3 + 112500;
    setTax(result);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Tax Calculator</h2>
      <input
        type="number"
        value={income}
        onChange={(e) => setIncome(e.target.value)}
        placeholder="Enter annual income"
        className="border p-2 rounded mb-4"
      />
      <br />
      <button onClick={calculate} className="bg-green-600 text-white px-4 py-2 rounded">Calculate</button>
      {tax !== null && (
        <p className="mt-4 text-lg">Estimated Tax: ₹{tax.toFixed(2)}</p>
      )}
    </div>
  );
}

export default TaxCalculator;
