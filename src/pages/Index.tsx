
import { FileUpload } from "@/components/FileUpload";
import { SignalSelector } from "@/components/SignalSelector";
import { FeatureInput } from "@/components/FeatureInput";
import { ResultsDisplay } from "@/components/ResultsDisplay";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 animate-fade-up">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Signal Depth Predictor
          </h1>
          <p className="text-lg text-gray-600">
            Predict combinational logic depth without synthesis
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="space-y-8">
            <FileUpload />
            <SignalSelector />
          </div>
          <div>
            <FeatureInput />
          </div>
          <div>
            <ResultsDisplay />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
