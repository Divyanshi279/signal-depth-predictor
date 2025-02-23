
import { useState } from 'react';

export const FeatureInput = () => {
  const [fanIn, setFanIn] = useState('');
  const [fanOut, setFanOut] = useState('');
  const [maxAllowedDepth, setMaxAllowedDepth] = useState('');
  const [clockPeriod, setClockPeriod] = useState('');
  const [gateDelay, setGateDelay] = useState('');

  return (
    <div className="glass-card p-6 rounded-lg animate-fade-in">
      <h3 className="text-lg font-semibold mb-4">Signal Features</h3>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Fan-in
          </label>
          <input
            type="number"
            value={fanIn}
            onChange={(e) => setFanIn(e.target.value)}
            className="w-full p-2 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-200"
            placeholder="Enter fan-in count"
          />
          <p className="text-xs text-gray-500 mt-1">
            Higher fan-in may increase combinational depth
          </p>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Fan-out
          </label>
          <input
            type="number"
            value={fanOut}
            onChange={(e) => setFanOut(e.target.value)}
            className="w-full p-2 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-200"
            placeholder="Enter fan-out count"
          />
          <p className="text-xs text-gray-500 mt-1">
            Consider load balancing for high fan-out signals
          </p>
        </div>

        <div className="border-t pt-4 mt-4">
          <h4 className="text-sm font-semibold text-gray-900 mb-3">Timing Constraints</h4>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Maximum Allowed Depth
              </label>
              <input
                type="number"
                value={maxAllowedDepth}
                onChange={(e) => setMaxAllowedDepth(e.target.value)}
                placeholder="e.g., 10"
                className="w-full p-2 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-200"
              />
              <p className="text-xs text-gray-500 mt-1">
                Lower values enforce stricter timing constraints
              </p>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Clock Period (ns)
              </label>
              <input
                type="number"
                value={clockPeriod}
                onChange={(e) => setClockPeriod(e.target.value)}
                placeholder="e.g., 10"
                className="w-full p-2 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-200"
                step="0.1"
              />
              <p className="text-xs text-gray-500 mt-1">
                Affects maximum allowable combinational delay
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Gate Delay (ps)
              </label>
              <input
                type="number"
                value={gateDelay}
                onChange={(e) => setGateDelay(e.target.value)}
                placeholder="e.g., 100"
                className="w-full p-2 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-200"
                step="1"
              />
              <p className="text-xs text-gray-500 mt-1">
                Typical range: 50-200ps for standard cells
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
