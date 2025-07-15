'use client';

import { useState } from 'react';
import AdUnit from '@/components/AdUnit';

export default function Home() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Here you would typically send the email to your backend
    console.log('Email submitted:', email);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      {/* Header Ad */}
      <div className="w-full py-4 bg-gray-900/50 backdrop-blur-sm">
        <AdUnit 
          adSlot="1234567890" 
          adFormat="horizontal"
          className="mx-auto"
        />
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Logo/Title Section */}
          <div className="mb-12">
            <h1 className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              HACKING.TOOLS
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-green-400 to-blue-500 mx-auto mb-6"></div>
            <p className="text-xl md:text-2xl text-gray-300 mb-4">
              Digital Security Resources Coming Soon
            </p>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Your premier destination for ethical hacking tools, cybersecurity resources, and comprehensive digital security education.
            </p>
          </div>

          {/* Content Rectangle Ad */}
          <div className="mb-12 flex justify-center">
            <AdUnit 
              adSlot="2345678901" 
              adFormat="rectangle"
            />
          </div>

          {/* Features Section */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm border border-gray-700">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font-semibold mb-3 text-green-400">Security Tools</h3>
              <p className="text-gray-300">
                Comprehensive collection of ethical hacking tools and security utilities for professionals and researchers.
              </p>
            </div>
            
            <div className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm border border-gray-700">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-xl font-semibold mb-3 text-blue-400">Learning Resources</h3>
              <p className="text-gray-300">
                Expert-curated tutorials, guides, and educational content for cybersecurity professionals of all levels.
              </p>
            </div>
            
            <div className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm border border-gray-700">
              <div className="text-4xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold mb-3 text-purple-400">Penetration Testing</h3>
              <p className="text-gray-300">
                Advanced penetration testing frameworks and vulnerability assessment tools for security audits.
              </p>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="bg-gray-800/30 p-8 rounded-2xl backdrop-blur-sm border border-gray-700 mb-12">
            <h2 className="text-3xl font-bold mb-4 text-white">Get Notified When We Launch</h2>
            <p className="text-gray-300 mb-6">
              Be the first to access our premium collection of security tools and resources.
            </p>
            
            {!isSubmitted ? (
              <form onSubmit={handleEmailSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                  required
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-gradient-to-r from-green-500 to-blue-600 text-white font-semibold rounded-lg hover:from-green-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105"
                >
                  Notify Me
                </button>
              </form>
            ) : (
              <div className="text-green-400 text-lg">
                ✓ Thank you! We&apos;ll notify you when we launch.
              </div>
            )}
          </div>

          {/* Bottom Ad */}
          <div className="mb-8">
            <AdUnit 
              adSlot="3456789012" 
              adFormat="horizontal"
              className="mx-auto"
            />
          </div>

          {/* Footer */}
          <footer className="text-center text-gray-400">
            <p>&copy; 2024 Hacking.Tools. All rights reserved.</p>
            <p className="mt-2">
              <a href="#" className="hover:text-green-400 transition-colors">Privacy Policy</a>
              {' | '}
              <a href="#" className="hover:text-green-400 transition-colors">Terms of Service</a>
              {' | '}
              <a href="#" className="hover:text-green-400 transition-colors">Contact</a>
            </p>
          </footer>
        </div>
      </div>

      {/* Mobile Sticky Footer Ad */}
      <div className="fixed bottom-0 left-0 right-0 bg-gray-900/95 backdrop-blur-sm border-t border-gray-700 py-2 md:hidden">
        <AdUnit 
          adSlot="4567890123" 
          adFormat="mobile-banner"
          className="mx-auto"
        />
      </div>
    </div>
  );
}
