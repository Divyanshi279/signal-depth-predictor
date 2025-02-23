
import { Search } from 'lucide-react';

export const SignalSelector = () => {
  return (
    <div className="glass-card p-6 rounded-lg animate-fade-in">
      <div className="flex flex-col gap-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Search signals..."
            className="pl-10 w-full p-2 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-200"
          />
        </div>
        <div className="mt-4 space-y-2">
          <div className="p-2 hover:bg-gray-50 rounded-md cursor-pointer transition-colors">
            <p className="text-sm font-medium">signal_a</p>
          </div>
          <div className="p-2 hover:bg-gray-50 rounded-md cursor-pointer transition-colors">
            <p className="text-sm font-medium">signal_b</p>
          </div>
          <div className="p-2 hover:bg-gray-50 rounded-md cursor-pointer transition-colors">
            <p className="text-sm font-medium">signal_c</p>
          </div>
        </div>
      </div>
    </div>
  );
};
