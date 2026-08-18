import '../src/styles/index.css';
import '../src/styles/dashboard.css';
import { ThemeProvider } from '../src/context/ThemeContext';

export const viewport = {
  width: 'device-width',
  initialScale: 1.0,
  maximumScale: 5.0,
  themeColor: '#070a12',
};

export const metadata = {
  metadataBase: new URL('https://oda7.com'),
  title: 'ODA7 — One workspace for sales, people and performance',
  description: 'Connect sales execution, people operations, compensation and business intelligence in one role-aware workspace.',
  openGraph: {
    type: 'website',
    url: '/',
    title: 'ODA7 — One workspace for sales, people and performance',
    description: 'Connect sales execution, people operations, compensation and business intelligence in one role-aware workspace.',
    images: ['/oda7-team-story.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ODA7 — One workspace for sales, people and performance',
    description: 'Sales, people, operations and intelligence in one connected workspace.',
    images: ['/oda7-team-story.jpg'],
  },
  icons: { icon: '/favicon.svg' },
};

const themeScript = `(function(){try{var s=localStorage.getItem('oda7-theme');var t=s==='light'||s==='dark'?s:(window.matchMedia&&window.matchMedia('(prefers-color-scheme: light)').matches?'light':'dark');var r=document.documentElement;r.setAttribute('data-theme',t);if(t==='light'){r.classList.add('theme-light');r.classList.remove('theme-dark');r.style.colorScheme='light';}else{r.classList.add('theme-dark');r.classList.remove('theme-light');r.style.colorScheme='dark';}}catch(e){}})();`;

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body>
        <script
          id="oda7-theme-init"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: themeScript }}
        />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
