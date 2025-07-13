import React from 'react';
import { Brain, Shield, Zap, ArrowRight, BookOpen } from 'lucide-react';
import NeuralNetwork from './NeuralNetwork';

const HeroPage = ({ onGetStarted }) => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-purple-500/10 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-amber-500/10 rounded-full blur-xl animate-pulse delay-500"></div>
      </div>

      {/* Neural Network Background */}
      <NeuralNetwork />

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 py-12">
        {/* Header */}
        <header className="flex justify-between items-center mb-16">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Brain className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-white">MedAI</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-blue-200 hover:text-white transition-colors">Technology</a>
            <a href="#" className="text-blue-200 hover:text-white transition-colors">Research</a>
            <a href="#" className="text-blue-200 hover:text-white transition-colors">About</a>
          </nav>
        </header>

        {/* Hero Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                Early Detection
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                  {" "}Saves Lives
                </span>
              </h1>
              <p className="text-xl text-blue-100 leading-relaxed">
                Our advanced AI technology analyzes medical data with unprecedented accuracy, 
                enabling early cancer detection across multiple organ systems. Trust in science, 
                hope in innovation.
              </p>
            </div>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <Shield className="w-4 h-4 text-green-400" />
                <span className="text-sm text-white">99.2% Accuracy</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <Zap className="w-4 h-4 text-amber-400" />
                <span className="text-sm text-white">Instant Results</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <Brain className="w-4 h-4 text-blue-400" />
                <span className="text-sm text-white">AI-Powered</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={onGetStarted}
                className="group bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl flex items-center justify-center space-x-2"
              >
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="group border-2 border-white/30 hover:border-white/50 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-white/10 flex items-center justify-center space-x-2">
                <BookOpen className="w-5 h-5" />
                <span>Learn More</span>
              </button>
            </div>
          </div>

          {/* Visual Elements */}
          <div className="relative lg:block hidden">
            <div className="relative w-full h-96">
              {/* Central AI Core */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-full backdrop-blur-sm border border-white/20 flex items-center justify-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center animate-pulse">
                  <Brain className="w-8 h-8 text-white" />
                </div>
              </div>

              {/* Floating Organ Cards */}
              <div className="absolute top-8 right-8 w-20 h-20 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 flex items-center justify-center animate-float">
                <span className="text-xs text-white font-medium">Breast</span>
              </div>
              <div className="absolute bottom-8 left-8 w-20 h-20 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 flex items-center justify-center animate-float-delayed">
                <span className="text-xs text-white font-medium">Brain</span>
              </div>
              <div className="absolute top-20 left-4 w-20 h-20 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 flex items-center justify-center animate-float-slow">
                <span className="text-xs text-white font-medium">Liver</span>
              </div>
              <div className="absolute bottom-20 right-4 w-20 h-20 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 flex items-center justify-center animate-float-delayed">
                <span className="text-xs text-white font-medium">Pancreas</span>
              </div>

              {/* Data Particles */}
              <div className="absolute inset-0">
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-2 h-2 bg-amber-400 rounded-full animate-data-flow opacity-60"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      animationDelay: `${i * 0.5}s`,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-24 grid md:grid-cols-3 gap-8">
          <div className="text-center space-y-2">
            <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              50K+
            </div>
            <div className="text-blue-200">Successful Diagnoses</div>
          </div>
          <div className="text-center space-y-2">
            <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-amber-500">
              5
            </div>
            <div className="text-blue-200">Organ Systems</div>
          </div>
          <div className="text-center space-y-2">
            <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-blue-500">
              99.2%
            </div>
            <div className="text-blue-200">Accuracy Rate</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroPage;