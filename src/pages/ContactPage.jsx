import React, { useState } from 'react';
import { PageHeader } from '../components/layout/PageHeader';
import { Button } from '../components/common/Button';
import {
  Mail,
  PhoneCall,
  Clock,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  Building2,
  Users,
} from 'lucide-react';

export const ContactPage = ({ onOpenDemo }) => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    teamSize: '10-25',
    useCase: 'inside-sales',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      setFormSubmitted(true);
    }
  };

  return (
    <div style={{ paddingTop: '20px', paddingBottom: '100px' }}>
      
      <PageHeader
        badge="Connect with Solutions Engineering"
        badgeIcon="PhoneCall"
        title="Transform your sales floor with"
        highlight="oda7."
        description="Share your team structure and the workflows you want to connect. We’ll use that context to shape an ODA7 walkthrough."
      />

      <div className="container">
        
        <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '48px', alignItems: 'start', maxWidth: '1100px', margin: '0 auto' }}>
          
          {/* Left: Contact & Booking Form */}
          <div
            style={{
              background: 'linear-gradient(135deg, rgba(14, 23, 42, 0.9) 0%, rgba(7, 10, 18, 0.95) 100%)',
              border: '1px solid rgba(59, 130, 246, 0.35)',
              borderRadius: '20px',
              padding: '40px',
              boxShadow: '0 20px 40px rgba(0,0,0,0.6)',
            }}
          >
            {formSubmitted ? (
              <div style={{ textAlign: 'center', padding: '40px 20px' }} className="animate-fadeIn">
                <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'rgba(16, 185, 129, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px auto', color: '#34d399' }}>
                  <CheckCircle2 size={36} />
                </div>
                <h3 style={{ fontSize: '1.75rem', fontWeight: '800', color: '#fff', marginBottom: '10px' }}>
                  Thank you, {formData.name.split(' ')[0]}!
                </h3>
                <p style={{ color: '#cbd5e1', fontSize: '1rem', lineHeight: '1.6', marginBottom: '24px' }}>
                  This frontend preview has prepared your request details, but it does not send data to a backend. Contact the ODA7 team directly to continue.
                </p>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '12px' }}>
                  <Button onClick={onOpenDemo} variant="primary" iconLeft="Sparkles">
                    Try Interactive Tour While Waiting
                  </Button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                <h3 style={{ fontSize: '1.4rem', fontWeight: '800', color: '#fff', marginBottom: '4px' }}>
                  Request Live Platform Walkthrough
                </h3>
                <p style={{ color: '#94a3b8', fontSize: '0.85rem', marginBottom: '10px' }}>
                  Fill in your details to preview the request flow. No information leaves this frontend demo.
                </p>

                <div className="form-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.75rem', color: '#cbd5e1', marginBottom: '6px', fontWeight: '600' }}>
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Alex Rivera"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="input-control"
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.75rem', color: '#cbd5e1', marginBottom: '6px', fontWeight: '600' }}>
                      Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="input-control"
                    />
                  </div>
                </div>

                <div className="form-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.75rem', color: '#cbd5e1', marginBottom: '6px', fontWeight: '600' }}>
                      Company Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your company"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="input-control"
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.75rem', color: '#cbd5e1', marginBottom: '6px', fontWeight: '600' }}>
                      Sales Team Size
                    </label>
                    <select
                      value={formData.teamSize}
                      onChange={(e) => setFormData({ ...formData, teamSize: e.target.value })}
                      className="input-control"
                      style={{ background: '#0e131f' }}
                    >
                      <option value="1-5">1 - 5 Sales Reps</option>
                      <option value="6-25">6 - 25 Sales Reps</option>
                      <option value="26-100">26 - 100 Sales Reps</option>
                      <option value="100+">100+ Enterprise Reps</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', color: '#cbd5e1', marginBottom: '6px', fontWeight: '600' }}>
                    Primary Use Case
                  </label>
                  <select
                    value={formData.useCase}
                    onChange={(e) => setFormData({ ...formData, useCase: e.target.value })}
                    className="input-control"
                    style={{ background: '#0e131f' }}
                  >
                    <option value="inside-sales">High-Volume Inside Sales</option>
                    <option value="call-center">Call Center & BPO Floor Supervision</option>
                    <option value="startup">Startup Full-Stack CRM & Dialer Consolidation</option>
                    <option value="agency">Multi-Tenant Agency & SaaS Reseller</option>
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', color: '#cbd5e1', marginBottom: '6px', fontWeight: '600' }}>
                    What challenges are you looking to solve? (Optional)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="e.g. Replacing 4 tools, high rep idle time, carrier pickup ratio issues..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="input-control"
                  />
                </div>

                <Button type="submit" variant="primary" size="lg" iconRight="ArrowRight" style={{ marginTop: '8px' }}>
                  Preview demo request
                </Button>

                <div style={{ color: '#64748b', fontSize: '0.75rem', textAlign: 'center' }}>
                  Demo-only form. No data is transmitted or stored.
                </div>
              </form>
            )}
          </div>

          {/* Right: Direct contact and implementation context */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            
            <div className="card-saas">
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '10px' }}>
                <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: 'rgba(16, 185, 129, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#10b981' }}>
                  <Clock size={18} />
                </div>
                <div>
                  <div style={{ fontWeight: '700', color: '#fff', fontSize: '0.95rem' }}>Bring your workflow</div>
                  <div style={{ color: '#34d399', fontSize: '0.75rem' }}>Sales, people, operations or platform</div>
                </div>
              </div>
              <p style={{ color: '#94a3b8', fontSize: '0.8125rem', lineHeight: '1.5' }}>
                Use the walkthrough to focus on the roles, modules and operating handoffs that matter to your team.
              </p>
            </div>

            <div className="card-saas">
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '10px' }}>
                <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: 'rgba(56, 189, 248, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#38bdf8' }}>
                  <Mail size={18} />
                </div>
                <div>
                  <div style={{ fontWeight: '700', color: '#fff', fontSize: '0.95rem' }}>Direct Inquiries</div>
                  <div style={{ color: '#38bdf8', fontSize: '0.75rem' }}>enterprise@oda7.com</div>
                </div>
              </div>
              <p style={{ color: '#94a3b8', fontSize: '0.8125rem', lineHeight: '1.5' }}>
                For custom SIP trunking, RFP security questionnaires, or custom SLA inquiries.
              </p>
            </div>

            <div className="card-saas">
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '10px' }}>
                <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: 'rgba(245, 158, 11, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fbbf24' }}>
                  <ShieldCheck size={18} />
                </div>
                <div>
                  <div style={{ fontWeight: '700', color: '#fff', fontSize: '0.95rem' }}>Implementation planning</div>
                  <div style={{ color: '#fbbf24', fontSize: '0.75rem' }}>Scope before promises</div>
                </div>
              </div>
              <p style={{ color: '#94a3b8', fontSize: '0.8125rem', lineHeight: '1.5' }}>
                Confirm data migration, telephony, security and rollout requirements directly with the ODA7 team.
              </p>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
};
