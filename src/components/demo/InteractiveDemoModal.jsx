'use client';

import React, { useState } from 'react';
import { Modal } from '../common/Modal';
import { DemoStepCards, demoRoleData } from './DemoStepCards';
import {
  ChevronLeft,
  ChevronRight,
  RotateCcw,
  Sparkles,
  PhoneCall,
  Headphones,
  Users,
  ShieldCheck,
  X,
  ArrowRight,
} from 'lucide-react';

export const InteractiveDemoModal = ({ isOpen, onClose }) => {
  const [selectedRole, setSelectedRole] = useState('sales'); // 'sales' | 'manager' | 'admin' | 'superadmin'
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 4;

  const handleRoleChange = (roleId) => {
    setSelectedRole(roleId);
    setCurrentStep(1);
  };

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    } else {
      // If completed 4 steps, cycle to next role or restart
      const roleKeys = Object.keys(demoRoleData);
      const nextRoleIdx = (roleKeys.indexOf(selectedRole) + 1) % roleKeys.length;
      setSelectedRole(roleKeys[nextRoleIdx]);
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

  const roleOptions = [
    { id: 'sales', label: 'Sales Rep', icon: PhoneCall },
    { id: 'manager', label: 'Manager', icon: Headphones },
    { id: 'admin', label: 'Admin', icon: Users },
    { id: 'superadmin', label: 'Super Admin', icon: ShieldCheck },
  ];

  return (
    <Modal isOpen={isOpen} onClose={onClose} maxWidth="920px">
      <div className="demo-modal-inner" style={{ padding: 'clamp(20px, 3.5vw, 32px)' }}>
        
        {/* Modal Top Header: Role Selector + Exit Demo */}
        <div className="demo-modal-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', flexWrap: 'wrap', gap: '14px' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
              <span className="badge badge-primary">Interactive ODA7 Demo</span>
              <span style={{ fontSize: '0.75rem', color: 'var(--oda-text-muted)', fontFamily: 'var(--font-mono)' }}>
                {currentStep} / {totalSteps}
              </span>
            </div>
            <h2 style={{ fontSize: '1.25rem', fontWeight: '850', color: 'var(--oda-text-primary)', margin: 0 }}>
              Guided Product Tour
            </h2>
          </div>

          {/* Quick Exit / Reset Buttons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <button
              onClick={handleReset}
              className="btn-tactile"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '5px',
                color: 'var(--oda-text-muted)',
                fontSize: '0.75rem',
                fontWeight: '600',
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                padding: '6px 8px',
              }}
            >
              <RotateCcw size={13} />
              <span>Reset</span>
            </button>

            <button
              onClick={onClose}
              className="btn-tactile"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '5px',
                color: 'var(--oda-text-secondary)',
                fontSize: '0.75rem',
                fontWeight: '700',
                background: 'var(--oda-surface)',
                border: '1px solid var(--oda-border)',
                borderRadius: '6px',
                padding: '6px 12px',
                cursor: 'pointer',
              }}
            >
              <span>Exit Demo</span>
            </button>
          </div>
        </div>

        {/* 1. Role Chooser Strip */}
        <div style={{ marginBottom: '20px' }}>
          <div style={{ fontSize: '0.72rem', color: 'var(--oda-text-muted)', fontWeight: '700', textTransform: 'uppercase', marginBottom: '8px', letterSpacing: '0.05em' }}>
            1. Select Operating Role:
          </div>
          <div className="demo-role-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '8px' }}>
            {roleOptions.map((role) => {
              const IconComp = role.icon;
              const isSelected = selectedRole === role.id;
              return (
                <button
                  key={role.id}
                  onClick={() => handleRoleChange(role.id)}
                  className="tab-pill-interactive"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    padding: '10px 14px',
                    borderRadius: '10px',
                    background: isSelected ? 'var(--oda-primary)' : 'var(--oda-surface)',
                    border: isSelected ? '1px solid var(--oda-primary-light)' : '1px solid var(--oda-border)',
                    color: isSelected ? '#ffffff' : 'var(--oda-text-primary)',
                    fontWeight: '700',
                    fontSize: '0.8125rem',
                    boxShadow: isSelected ? '0 4px 14px rgba(37, 99, 235, 0.28)' : 'none',
                  }}
                >
                  <IconComp size={15} />
                  <span>{role.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Step Progress Dots (4 steps) */}
        <div className="demo-modal-progress" style={{ display: 'flex', gap: '6px', marginBottom: '20px' }}>
          {[1, 2, 3, 4].map((stepNum) => (
            <button
              key={stepNum}
              onClick={() => setCurrentStep(stepNum)}
              style={{
                flex: '1',
                height: '5px',
                borderRadius: '3px',
                background: stepNum === currentStep
                  ? 'var(--oda-primary)'
                  : stepNum < currentStep
                  ? 'var(--oda-primary-soft)'
                  : 'var(--oda-border)',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
              aria-label={`Jump to step ${stepNum}`}
            />
          ))}
        </div>

        {/* Dynamic Role Step View (30–60s bite-sized experience) */}
        <div className="demo-modal-stage" style={{ minHeight: '260px', marginBottom: '20px' }}>
          <DemoStepCards
            role={selectedRole}
            step={currentStep}
          />
        </div>

        {/* Bottom Navigation Control Bar */}
        <div className="demo-modal-controls" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '16px', borderTop: '1px solid var(--oda-border)', flexWrap: 'wrap', gap: '10px' }}>
          <button
            onClick={handlePrev}
            disabled={currentStep === 1}
            className="btn-tactile"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '8px 16px',
              borderRadius: '8px',
              background: 'var(--oda-surface)',
              border: '1px solid var(--oda-border)',
              color: currentStep === 1 ? 'var(--oda-text-muted)' : 'var(--oda-text-primary)',
              fontSize: '0.8125rem',
              fontWeight: '600',
              cursor: currentStep === 1 ? 'not-allowed' : 'pointer',
              opacity: currentStep === 1 ? 0.5 : 1,
            }}
          >
            <ChevronLeft size={15} />
            <span>Back</span>
          </button>

          <div style={{ fontSize: '0.75rem', color: 'var(--oda-text-muted)', fontFamily: 'var(--font-mono)' }}>
            Step {currentStep} of {totalSteps} • {demoRoleData[selectedRole]?.roleName} Workflow
          </div>

          <button
            onClick={handleNext}
            className="btn-tactile"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '9px 20px',
              borderRadius: '8px',
              background: 'var(--oda-primary)',
              border: 'none',
              color: '#fff',
              fontSize: '0.8125rem',
              fontWeight: '750',
              cursor: 'pointer',
              boxShadow: '0 4px 14px rgba(37, 99, 235, 0.35)',
            }}
          >
            <span>
              {currentStep === totalSteps ? 'Explore Next Role' : 'Next Step'}
            </span>
            <ChevronRight size={15} className="arrow-slide" />
          </button>
        </div>

      </div>
    </Modal>
  );
};
