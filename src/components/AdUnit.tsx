'use client';

import { useEffect, useRef } from 'react';

interface AdUnitProps {
  adSlot: string;
  adFormat?: 'horizontal' | 'rectangle' | 'vertical' | 'mobile-banner';
  className?: string;
  style?: React.CSSProperties;
}

const AdUnit: React.FC<AdUnitProps> = ({ 
  adSlot, 
  adFormat = 'horizontal', 
  className = '',
  style = {}
}) => {
  const adRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && adRef.current) {
      try {
        // Initialize AdSense if not already loaded
        if (!window.adsbygoogle) {
          window.adsbygoogle = [];
        }
        
        // Push ad configuration
        window.adsbygoogle.push({});
      } catch (error) {
        console.error('Error initializing ad:', error);
      }
    }
  }, []);

  const getAdDimensions = () => {
    switch (adFormat) {
      case 'horizontal':
        return {
          width: '728px',
          height: '90px',
          className: 'hidden md:block'
        };
      case 'rectangle':
        return {
          width: '336px',
          height: '280px',
          className: 'block'
        };
      case 'vertical':
        return {
          width: '160px',
          height: '600px',
          className: 'hidden lg:block'
        };
      case 'mobile-banner':
        return {
          width: '320px',
          height: '50px',
          className: 'block md:hidden'
        };
      default:
        return {
          width: '100%',
          height: '250px',
          className: 'block'
        };
    }
  };

  const dimensions = getAdDimensions();

  return (
    <div className={`ad-container ${dimensions.className} ${className}`} style={style}>
      <div 
        ref={adRef}
        className="ad-unit bg-gray-100 border border-gray-200 rounded-lg flex items-center justify-center"
        style={{
          width: dimensions.width,
          height: dimensions.height,
          maxWidth: '100%',
          margin: '0 auto'
        }}
      >
        <ins
          className="adsbygoogle"
          style={{
            display: 'block',
            width: '100%',
            height: '100%'
          }}
          data-ad-client="ca-pub-5635114711353420"
          data-ad-slot={adSlot}
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
        
        {/* Fallback placeholder */}
        <div className="ad-placeholder text-gray-500 text-sm text-center p-4">
          <div className="text-xs opacity-75">Advertisement</div>
          <div className="text-xs mt-1 opacity-50">
            {dimensions.width} x {dimensions.height}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdUnit;