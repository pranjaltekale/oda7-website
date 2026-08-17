import React from 'react';
import { Button } from '../common/Button';
import { Badge } from '../common/Badge';
import { Sparkles, PlayCircle, ArrowRight, ShieldCheck, Zap, Clock } from 'lucide-react';

export const FinalCtaSection = ({ onOpenDemo }) => {
  return (
    <section className="section-wrapper" style={{ position: 'relative', overflow: 'hidden' }}>
      
      {/* Background ambient lighting */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '800px',
          height: '400px',
          background: 'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(37, 99, 235, 0.22), rgba(6, 182, 212, 0.08) 60%, transparent 80%)',
          filter: 'blur(60px)',
          pointerEvents: 'none',
        }}
      />

      <div className="container">
        
        <div
          style={{
            background: 'linear-gradient(135deg, rgba(14, 23, 42, 0.95) 0%, rgba(7, 10, 18, 0.98) 100%)',
            border: '1px solid rgba(59, 130, 246, 0.4)',
            borderRadius: '24px',
            padding: '64px 32px',
            textAlign: 'center',
            boxShadow: '0 25px 60px rgba(0, 0, 0, 0.8), 0 0 60px -10px rgba(37, 99, 235, 0.3)',
            position: 'relative',
            zIndex: 2,
          }}
        >
          <div style={{ display: 'inline-flex', marginBottom: '20px' }}>
            <Badge variant="primary" icon="Sparkles" pulse={true}>
              ODA7 • Connected Business Workspace
            </Badge>
          </div>

          <h2
            style={{
              fontSize: 'clamp(2.2rem, 4.5vw, 3.5rem)',
              fontWeight: '800',
              color: '#ffffff',
              lineHeight: 1.12,
              marginBottom: '20px',
              maxWidth: '820px',
              marginLeft: 'auto',
              marginRight: 'auto',
              letterSpacing: '-0.03em',
            }}
          >
            Run your sales floor from{' '}
            <span className="text-gradient-accent">one intelligent workspace.</span>
          </h2>

          <p
            style={{
              fontSize: 'clamp(1rem, 1.8vw, 1.2rem)',
              color: '#94a3b8',
              lineHeight: 1.6,
              maxWidth: '660px',
              marginLeft: 'auto',
              marginRight: 'auto',
              marginBottom: '36px',
            }}
          >
            Unify calling, AI real-time speech coaching, floor queue command, CRM, and automated compensation in one synchronous workspace with ODA7.
          </p>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '16px',
              marginBottom: '28px',
            }}
          >
            <Button
              to="/contact"
              variant="primary"
              size="lg"
              iconRight="ArrowRight"
            >
              Start free
            </Button>

            <Button
              onClick={onOpenDemo}
              variant="secondary"
              size="lg"
              iconLeft="PlayCircle"
            >
              See ODA7 in action
            </Button>
          </div>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '24px',
              color: '#64748b',
              fontSize: '0.8125rem',
            }}
          >
            <span>✓ Explore the interactive product workflow</span>
            <span>•</span>
            <span>✓ No credit card required</span>
            <span>•</span>
            <span>✓ Scope implementation directly with ODA7</span>
          </div>
        </div>

      </div>
    </section>
  );
};
