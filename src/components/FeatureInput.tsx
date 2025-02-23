
import { useState } from 'react';

export const FeatureInput = () => {
  const [fanIn, setFanIn] = useState('');
  const [fanOut, setFanOut] = useState('');

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
          />
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
          />
        </div>
      </div>
    </div>
  );
};
