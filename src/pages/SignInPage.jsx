import React from 'react';
import { LogIn } from 'lucide-react';
import { PageHeader } from '../components/layout/PageHeader';
import { Button } from '../components/common/Button';

export const SignInPage = ({ onOpenDemo }) => (
  <div style={{ paddingTop: '20px', paddingBottom: '110px' }}>
    <PageHeader
      badge="ODA7 workspace access"
      badgeIcon="ShieldCheck"
      title="Continue to your"
      highlight="ODA7 workspace."
      description="The marketing preview and the live ODA7 application are separate experiences. Continue to the secure application to sign in."
    />
    <div className="container-narrow page-reveal" style={{ textAlign: 'center' }}>
      <div className="card-saas" style={{ maxWidth: '620px', margin: '0 auto', padding: '42px' }}>
        <LogIn size={28} color="#38bdf8" style={{ margin: '0 auto 18px' }} />
        <h2 style={{ color: '#fff', fontSize: '1.35rem', marginBottom: '10px' }}>Open the ODA7 application</h2>
        <p style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: 1.65, marginBottom: '24px' }}>You’ll leave this product story and continue at oda7.com.</p>
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '12px' }}>
          <Button href="https://oda7.com/sign-in" variant="primary" iconRight="ArrowRight">Continue to sign in</Button>
          <Button onClick={onOpenDemo} variant="secondary" iconLeft="PlayCircle">Try the product demo</Button>
        </div>
      </div>
    </div>
  </div>
);
