import React from 'react';

const NeuralNetwork: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1920 1080"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <radialGradient id="nodeGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.2" />
          </radialGradient>
          <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#60A5FA" stopOpacity="0.6" />
            <stop offset="50%" stopColor="#A78BFA" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.6" />
          </linearGradient>
        </defs>

        {/* Neural Network Connections */}
        <g className="animate-pulse">
          {/* Layer 1 to Layer 2 */}
          <line x1="200" y1="200" x2="400" y2="150" stroke="url(#connectionGradient)" strokeWidth="2" opacity="0.5" />
          <line x1="200" y1="300" x2="400" y2="150" stroke="url(#connectionGradient)" strokeWidth="2" opacity="0.3" />
          <line x1="200" y1="400" x2="400" y2="250" stroke="url(#connectionGradient)" strokeWidth="2" opacity="0.4" />
          <line x1="200" y1="500" x2="400" y2="350" stroke="url(#connectionGradient)" strokeWidth="2" opacity="0.5" />
          
          {/* Layer 2 to Layer 3 */}
          <line x1="400" y1="150" x2="600" y2="200" stroke="url(#connectionGradient)" strokeWidth="2" opacity="0.4" />
          <line x1="400" y1="250" x2="600" y2="300" stroke="url(#connectionGradient)" strokeWidth="2" opacity="0.6" />
          <line x1="400" y1="350" x2="600" y2="400" stroke="url(#connectionGradient)" strokeWidth="2" opacity="0.3" />
          
          {/* Additional connections */}
          <line x1="800" y1="300" x2="1000" y2="250" stroke="url(#connectionGradient)" strokeWidth="2" opacity="0.5" />
          <line x1="1200" y1="200" x2="1400" y2="300" stroke="url(#connectionGradient)" strokeWidth="2" opacity="0.4" />
        </g>

        {/* Neural Network Nodes */}
        <g>
          {/* Layer 1 */}
          <circle cx="200" cy="200" r="8" fill="url(#nodeGradient)" className="animate-pulse" />
          <circle cx="200" cy="300" r="8" fill="url(#nodeGradient)" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
          <circle cx="200" cy="400" r="8" fill="url(#nodeGradient)" className="animate-pulse" style={{ animationDelay: '1s' }} />
          <circle cx="200" cy="500" r="8" fill="url(#nodeGradient)" className="animate-pulse" style={{ animationDelay: '1.5s' }} />
          
          {/* Layer 2 */}
          <circle cx="400" cy="150" r="10" fill="url(#nodeGradient)" className="animate-pulse" style={{ animationDelay: '0.2s' }} />
          <circle cx="400" cy="250" r="10" fill="url(#nodeGradient)" className="animate-pulse" style={{ animationDelay: '0.7s' }} />
          <circle cx="400" cy="350" r="10" fill="url(#nodeGradient)" className="animate-pulse" style={{ animationDelay: '1.2s' }} />
          
          {/* Layer 3 */}
          <circle cx="600" cy="200" r="12" fill="url(#nodeGradient)" className="animate-pulse" style={{ animationDelay: '0.3s' }} />
          <circle cx="600" cy="300" r="12" fill="url(#nodeGradient)" className="animate-pulse" style={{ animationDelay: '0.8s' }} />
          <circle cx="600" cy="400" r="12" fill="url(#nodeGradient)" className="animate-pulse" style={{ animationDelay: '1.3s' }} />
          
          {/* Additional nodes */}
          <circle cx="800" cy="300" r="10" fill="url(#nodeGradient)" className="animate-pulse" style={{ animationDelay: '0.4s' }} />
          <circle cx="1000" cy="250" r="10" fill="url(#nodeGradient)" className="animate-pulse" style={{ animationDelay: '0.9s' }} />
          <circle cx="1200" cy="200" r="8" fill="url(#nodeGradient)" className="animate-pulse" style={{ animationDelay: '1.4s' }} />
          <circle cx="1400" cy="300" r="8" fill="url(#nodeGradient)" className="animate-pulse" style={{ animationDelay: '0.6s' }} />
        </g>

        {/* Data Flow Particles */}
        <g>
          {[...Array(12)].map((_, i) => (
            <circle
              key={i}
              r="3"
              fill="#F59E0B"
              opacity="0.8"
              className="animate-data-flow"
              style={{
                animationDelay: `${i * 0.3}s`,
                animationDuration: '4s',
              }}
            >
              <animateMotion
                dur="4s"
                repeatCount="indefinite"
                begin={`${i * 0.3}s`}
              >
                <path d={`M${100 + i * 120},${300 + Math.sin(i) * 100} Q${600 + i * 50},${200 + Math.cos(i) * 150} ${1200 + i * 30},${250 + Math.sin(i * 2) * 80}`} />
              </animateMotion>
            </circle>
          ))}
        </g>
      </svg>
    </div>
  );
};

export default NeuralNetwork;