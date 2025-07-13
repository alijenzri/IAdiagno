import React, { useState } from 'react';
import HeroPage from './components/HeroPage';
import OrganSelection from './components/OrganSelection';
import DiagnosticForm from './components/DiagnosticForm';

function App() {
  const [currentPage, setCurrentPage] = useState('hero');
  const [selectedOrgan, setSelectedOrgan] = useState(null);

  const handleGetStarted = () => {
    setCurrentPage('organs');
  };

  const handleOrganSelect = (organ) => {
    setSelectedOrgan(organ);
    setCurrentPage('form');
  };

  const handleBackToHero = () => {
    setCurrentPage('hero');
    setSelectedOrgan(null);
  };

  const handleBackToOrgans = () => {
    setCurrentPage('organs');
    setSelectedOrgan(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900">
      {currentPage === 'hero' && (
        <HeroPage onGetStarted={handleGetStarted} />
      )}
      {currentPage === 'organs' && (
        <OrganSelection 
          onOrganSelect={handleOrganSelect}
          onBack={handleBackToHero}
        />
      )}
      {currentPage === 'form' && selectedOrgan && (
        <DiagnosticForm 
          organ={selectedOrgan}
          onBack={handleBackToOrgans}
        />
      )}
    </div>
  );
}

export default App;