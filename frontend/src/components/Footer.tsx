import React from 'react';

/*
  Footer Component
  Provides professional footer with links and branding
  Includes responsive layout for different screen sizes
*/
const Footer: React.FC = () => {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Dashboard', href: '#dashboard' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <footer
      className="glass-card mt-xl"
      style={{
        backgroundColor: 'var(--bg-card)',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)'
      }}
    >
      <div className="container py-xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-lg">
          {/* Left Section - App Info */}
          <div>
            <h3 className="text-lg font-bold mb-md" style={{ color: 'var(--text-primary)' }}>
              Weather Risk Dashboard
            </h3>
            <p className="text-secondary text-sm">
              Advanced analytics platform for monitoring extreme weather risks
              across multiple cities. Real-time data visualization and risk assessment.
            </p>
          </div>

          {/* Middle Section - Quick Links */}
          <div>
            <h4 className="text-md font-semibold mb-md" style={{ color: 'var(--text-primary)' }}>
              Quick Links
            </h4>
            <div className="flex flex-col space-y-2">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-secondary hover:text-primary transition-colors text-sm"
                  style={{ textDecoration: 'none' }}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Right Section - Branding */}
          <div>
            <h4 className="text-md font-semibold mb-md" style={{ color: 'var(--text-primary)' }}>
              Built For
            </h4>
            <p className="text-secondary text-sm mb-sm">
              Innovior Internship Challenge
            </p>
            <p className="text-muted text-xs">
              Modern web technologies for real-world impact
            </p>
          </div>
        </div>

        {/* Bottom Copyright Line */}
        <div
          className="mt-lg pt-lg text-center text-muted text-sm"
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            color: 'var(--text-muted)'
          }}
        >
          © {new Date().getFullYear()} Weather Risk Dashboard. Built with React & TypeScript.
        </div>
      </div>
    </footer>
  );
};

export default Footer;