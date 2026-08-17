import React from 'react';
import { Badge } from '../common/Badge';

export const PageHeader = ({
  badge,
  badgeIcon,
  title,
  highlight,
  description,
  children,
}) => {
  return (
    <section
      style={{
        paddingTop: 'calc(var(--nav-height) + 60px)',
        paddingBottom: '60px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        {badge && (
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '16px' }}>
            <Badge variant="primary" icon={badgeIcon} pulse={true}>
              {badge}
            </Badge>
          </div>
        )}

        <h1
          style={{
            fontSize: 'clamp(2.25rem, 5vw, 3.75rem)',
            fontWeight: '800',
            color: '#ffffff',
            lineHeight: 1.1,
            marginBottom: '20px',
            maxWidth: '900px',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          {title}{' '}
          {highlight && (
            <span className="text-gradient-accent">{highlight}</span>
          )}
        </h1>

        {description && (
          <p
            style={{
              fontSize: 'clamp(1rem, 2vw, 1.25rem)',
              color: '#94a3b8',
              lineHeight: 1.6,
              maxWidth: '720px',
              marginLeft: 'auto',
              marginRight: 'auto',
              marginBottom: children ? '32px' : '0',
            }}
          >
            {description}
          </p>
        )}

        {children}
      </div>
    </section>
  );
};
