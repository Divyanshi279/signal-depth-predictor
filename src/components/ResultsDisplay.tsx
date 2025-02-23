
export const ResultsDisplay = () => {
  return (
    <div className="glass-card p-6 rounded-lg animate-fade-in">
      <h3 className="text-lg font-semibold mb-4">Prediction Results</h3>
      <div className="space-y-4">
        <div className="p-4 bg-gray-50 rounded-lg">
          <p className="text-sm font-medium text-gray-700">
            Predicted Combinational Depth
          </p>
          <p className="text-3xl font-bold mt-2">4</p>
        </div>
        <div className="p-4 bg-gray-50 rounded-lg">
          <p className="text-sm font-medium text-gray-700">
            Confidence Score
          </p>
          <p className="text-3xl font-bold mt-2">92%</p>
        </div>
      </div>
    </div>
  );
};
