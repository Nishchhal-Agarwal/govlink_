import React from "react";

function SchemeFinder() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Scheme Finder</h2>
      <p className="text-gray-600">This will use your age, income, gender, job to suggest schemes.</p>
      {/* Logic with Firebase/AI goes here */}
    </div>
  );
}

export default SchemeFinder;
