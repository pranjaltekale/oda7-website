import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { Modal } from '../common/Modal';
import { DemoStepCards } from './DemoStepCards';
import {
  ChevronLeft,
  ChevronRight,
  RotateCcw,
  Sparkles,
  Play,
  Pause,
  ArrowRight,
} from 'lucide-react';

export const InteractiveDemoModal = ({ isOpen, onClose }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedRole, setSelectedRole] = useState('sales'); // 'sales' | 'manager' | 'admin'
  const totalSteps = 5;

  // Trigger confetti on step 4 & 5
  useEffect(() => {
    if ((currentStep === 4 || currentStep === 5) && isOpen) {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
      });
    }
  }, [currentStep, isOpen]);

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    } else {
      setCurrentStep(1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleReset = () => {
    setCurrentStep(1);
  };

  const stepTitles = [
    'Choose Experience Role',
    'Interactive Role Workspace',
    'Live Call & Speech AI Rebuttal',
    'Deal Closed & Instant Commission',
    'Revenue Outcome & System Loop',
  ];

  return (
    <Modal isOpen={isOpen} onClose={onClose} maxWidth="960px">
      <div style={{ padding: '32px' }}>
        
        {/* Modal Top Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px', paddingRight: '40px' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
              <span className="badge badge-primary">Interactive Oda7 Simulator</span>
              <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>
                Step {currentStep} of {totalSteps}
              </span>
            </div>
            <h2 style={{ fontSize: '1.4rem', fontWeight: '800', color: '#ffffff' }}>
              {stepTitles[currentStep - 1]}
            </h2>
          </div>

          <button
            onClick={handleReset}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              color: '#94a3b8',
              fontSize: '0.75rem',
              fontWeight: '500',
            }}
          >
            <RotateCcw size={13} />
            <span>Reset Demo</span>
          </button>
        </div>

        {/* Step Progress Dots */}
        <div style={{ display: 'flex', gap: '8px', marginBottom: '24px' }}>
          {[...Array(totalSteps)].map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentStep(idx + 1)}
              style={{
                flex: '1',
                height: '6px',
                borderRadius: '3px',
                background: idx + 1 === currentStep
                  ? 'var(--accent-primary-light)'
                  : idx + 1 < currentStep
                  ? 'rgba(59, 130, 246, 0.4)'
                  : 'rgba(255,255,255,0.1)',
                transition: 'all 0.2s ease',
              }}
              aria-label={`Jump to step ${idx + 1}`}
            />
          ))}
        </div>

        {/* Dynamic Step View */}
        <div style={{ minHeight: '300px', marginBottom: '24px' }}>
          <DemoStepCards
            step={currentStep}
            selectedRole={selectedRole}
            onSelectRole={(role) => {
              setSelectedRole(role);
              setCurrentStep(2);
            }}
            onNextStep={handleNext}
          />
        </div>

        {/* Bottom Control Bar */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '16px', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
          <button
            onClick={handlePrev}
            disabled={currentStep === 1}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              padding: '10px 18px',
              borderRadius: '8px',
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.1)',
              color: currentStep === 1 ? '#475569' : '#fff',
              fontSize: '0.875rem',
              fontWeight: '600',
              cursor: currentStep === 1 ? 'not-allowed' : 'pointer',
            }}
          >
            <ChevronLeft size={16} />
            <span>Previous</span>
          </button>

          <button
            onClick={handleNext}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              padding: '10px 24px',
              borderRadius: '8px',
              background: 'var(--grad-primary)',
              border: '1px solid rgba(255,255,255,0.2)',
              color: '#fff',
              fontSize: '0.875rem',
              fontWeight: '700',
              boxShadow: '0 0 20px rgba(37, 99, 235, 0.4)',
            }}
          >
            <span>
              {currentStep === 1
                ? 'Continue with Selected Role'
                : currentStep === 2
                ? 'Launch Live Call Simulation'
                : currentStep === 3
                ? 'Simulate Live Objection & Rebuttal'
                : currentStep === 4
                ? 'View Final Revenue Outcome'
                : 'Restart Tour'}
            </span>
            <ChevronRight size={16} />
          </button>
        </div>

      </div>
    </Modal>
  );
};
