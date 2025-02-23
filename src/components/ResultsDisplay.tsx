
export const ResultsDisplay = () => {
  const predictedDepth = 4;
  const maxAllowedDepth = 5; // This should come from FeatureInput in a real implementation
  const hasTimingViolation = predictedDepth > maxAllowedDepth;
  const optimizationSuggestions = [
    "Consider logic level parallelization",
    "Evaluate retiming opportunities",
    "Check for redundant logic paths"
  ];

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
            <p className="text-sm font-medium text-red-800 mb-3">
              Warning: The predicted combinational depth exceeds the maximum allowed depth.
              Consider architectural optimizations to reduce logic depth.
            </p>
            <div className="space-y-2">
              <p className="text-sm font-medium text-gray-900">Optimization Suggestions:</p>
              <ul className="list-disc list-inside space-y-1">
                {optimizationSuggestions.map((suggestion, index) => (
                  <li key={index} className="text-sm text-gray-700">
                    {suggestion}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
          <p className="text-sm font-medium text-blue-900 mb-2">
            Complexity Analysis
          </p>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Logic Efficiency</span>
              <span className="text-sm font-medium text-gray-900">85%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Path Optimization</span>
              <span className="text-sm font-medium text-gray-900">78%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">GNN Confidence</span>
              <span className="text-sm font-medium text-gray-900">94%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Heuristic Score</span>
              <span className="text-sm font-medium text-gray-900">88%</span>
            </div>
          </div>
        </div>

        <div className="p-4 bg-green-50 rounded-lg border border-green-100">
          <p className="text-sm font-medium text-green-900 mb-2">
            Model Insights
          </p>
          <div className="space-y-2 text-sm">
            <p className="text-gray-700">
              • Graph Analysis: Strong node connectivity suggests potential for parallel optimization
            </p>
            <p className="text-gray-700">
              • Heuristic Analysis: Fan-out distribution indicates possible logic sharing opportunities
            </p>
            <p className="text-gray-700">
              • Power Efficiency: Current path suggests moderate power consumption
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
