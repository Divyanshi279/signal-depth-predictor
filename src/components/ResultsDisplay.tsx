
export const ResultsDisplay = () => {
  const predictedDepth = 4;
  const maxAllowedDepth = 5; // This should come from FeatureInput in a real implementation
  const hasTimingViolation = predictedDepth > maxAllowedDepth;

  return (
    <div className="glass-card p-6 rounded-lg animate-fade-in">
      <h3 className="text-lg font-semibold mb-4">Prediction Results</h3>
      <div className="space-y-4">
        <div className="p-4 bg-gray-50 rounded-lg">
          <p className="text-sm font-medium text-gray-700">
            Predicted Combinational Depth
          </p>
          <div className="flex items-center gap-2">
            <p className={`text-3xl font-bold mt-2 ${hasTimingViolation ? 'text-red-600' : 'text-gray-900'}`}>
              {predictedDepth}
            </p>
            {hasTimingViolation && (
              <span className="text-xs font-medium text-red-600 bg-red-50 px-2 py-1 rounded">
                Timing Violation
              </span>
            )}
          </div>
        </div>
        <div className="p-4 bg-gray-50 rounded-lg">
          <p className="text-sm font-medium text-gray-700">
            Confidence Score
          </p>
          <p className="text-3xl font-bold mt-2">92%</p>
        </div>
        
        {hasTimingViolation && (
          <div className="p-4 bg-red-50 rounded-lg border border-red-100">
            <p className="text-sm font-medium text-red-800">
              Warning: The predicted combinational depth exceeds the maximum allowed depth.
              Consider architectural optimizations to reduce logic depth.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
