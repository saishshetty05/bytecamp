import React from 'react';
import AQIMap from './components/AQIMap';
import Legend from './components/Legend';
import { MapPin } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-2">
            <MapPin className="w-6 h-6 text-blue-600" />
            <h1 className="text-3xl font-bold text-gray-900">Mumbai AQI Live Map</h1>
          </div>
          <p className="text-gray-600">Real-time Air Quality Index monitoring across Mumbai regions</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-3">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <AQIMap />
            </div>
          </div>
          <div className="lg:col-span-1">
            <Legend />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;