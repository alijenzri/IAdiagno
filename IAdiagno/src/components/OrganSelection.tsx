import React from 'react';
import { ArrowLeft, Brain, Heart, Zap, Activity, Eye } from 'lucide-react';
import { Organ } from '../App';

interface OrganSelectionProps {
  onOrganSelect: (organ: Organ) => void;
  onBack: () => void;
}

const organData = {
  breast: {
    name: 'Breast',
    icon: Heart,
    color: 'from-pink-500 to-rose-600',
    description: 'Advanced mammography and tissue analysis',
    accuracy: '99.1%',
  },
  pancreas: {
    name: 'Pancreas',
    icon: Activity,
    color: 'from-green-500 to-emerald-600',
    description: 'Comprehensive pancreatic function assessment',
    accuracy: '98.7%',
  },
  brain: {
    name: 'Brain',
    icon: Brain,
    color: 'from-blue-500 to-indigo-600',
    description: 'MRI and neurological pattern recognition',
    accuracy: '99.4%',
  },
  liver: {
    name: 'Liver',
    icon: Zap,
    color: 'from-amber-500 to-orange-600',
    description: 'Hepatic imaging and biomarker analysis',
    accuracy: '98.9%',
  },
  ovary: {
    name: 'Ovary',
    icon: Eye,
    color: 'from-purple-500 to-violet-600',
    description: 'Ovarian screening and tumor detection',
    accuracy: '99.0%',
  },
};

const OrganSelection: React.FC<OrganSelectionProps> = ({ onOrganSelect, onBack }) => {
  return (
    <div className="min-h-screen p-6">
      {/* Header */}
      <div className="container mx-auto">
        <div className="flex items-center justify-between mb-12">
          <button
            onClick={onBack}
            className="flex items-center space-x-2 text-blue-200 hover:text-white transition-colors group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Home</span>
          </button>
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white">MedAI</span>
          </div>
        </div>

        {/* Page Title */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Select Organ for
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              {" "}Diagnosis
            </span>
          </h1>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            Choose the organ system you'd like to analyze. Our AI models are specifically trained 
            for each organ type to provide the most accurate diagnostic results.
          </p>
        </div>

        {/* Organ Selection Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {(Object.keys(organData) as Organ[]).map((organ) => {
            const data = organData[organ];
            const Icon = data.icon;
            
            return (
              <div
                key={organ}
                onClick={() => onOrganSelect(organ)}
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-500 cursor-pointer transform hover:scale-105 hover:shadow-2xl"
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${data.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-all duration-500`} />
                
                {/* Content */}
                <div className="relative z-10 space-y-6">
                  {/* Icon and Name */}
                  <div className="space-y-4">
                    <div className={`w-16 h-16 bg-gradient-to-br ${data.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-500 transition-all duration-300">
                      {data.name}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-blue-200 leading-relaxed">
                    {data.description}
                  </p>

                  {/* Accuracy Badge */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 bg-green-500/20 rounded-full px-3 py-1">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                      <span className="text-sm text-green-300 font-medium">{data.accuracy} Accuracy</span>
                    </div>
                    <div className="w-8 h-8 border-2 border-white/20 rounded-full flex items-center justify-center group-hover:border-white/40 group-hover:bg-white/10 transition-all duration-300">
                      <ArrowLeft className="w-4 h-4 text-white rotate-180 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>

                {/* Hover Border Effect */}
                <div className={`absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-gradient-to-r group-hover:${data.color} opacity-0 group-hover:opacity-50 transition-all duration-300`} />
              </div>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 max-w-2xl mx-auto">
            <h3 className="text-lg font-semibold text-white mb-3">What happens next?</h3>
            <p className="text-blue-200">
              After selecting an organ, you'll be presented with a specialized form to input 
              relevant medical data. Our AI will analyze this information and provide detailed 
              diagnostic insights within seconds.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrganSelection;