'use client';
import { FC, ReactNode, useEffect, useState } from 'react';
import StripBox from '../decorations/StripBox';

interface MobileLayoutProps {
    children: ReactNode;
}

const MobileLayout: FC<MobileLayoutProps> = ({ children }) => {
    const [scrollY, setScrollY] = useState(0);
    const [isClient, setIsClient] = useState(false);
    const [randomizedImageNumbersLeft, setRandomizedImageNumbersLeft] = useState<number[]>([]);
    const [randomizedImageNumbersRight, setRandomizedImageNumbersRight] = useState<number[]>([]);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsClient(true);
        // Generate random numbers only on client side
        setRandomizedImageNumbersLeft(Array.from({ length: 150 }, () => Math.floor(Math.random() * 85) + 1));
        setRandomizedImageNumbersRight(Array.from({ length: 150 }, () => Math.floor(Math.random() * 85) + 1));
        
        // Trigger entrance animation
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 100);
        
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="min-h-screen w-full relative overflow-hidden" style={{ backgroundColor: '#1e1e1e' }}>
            {/* Updated Mobile Layout */}
            <div className="w-full min-h-screen relative" style={{ backgroundColor: '#1e1e1e' }}>
                {/* Left Film Strip - Updated Colors */}
                <div className={`fixed left-0 top-0 h-screen w-12 backdrop-blur-xl border-r z-20 transition-all duration-1000 delay-200 ${isVisible ? 'transform translate-x-0 opacity-100' : 'transform -translate-x-full opacity-0'}`} style={{
                    background: `linear-gradient(to bottom, rgba(30, 30, 30, 0.9), rgba(30, 30, 30, 0.8), rgba(30, 30, 30, 0.9))`,
                    borderColor: 'rgba(241, 208, 170, 0.2)'
                }}>
                    <div 
                        className="flex flex-col py-2"
                        style={{ 
                            transform: `translateY(${scrollY * 0.5 - 3000}px)`, 
                            height: 'calc(600vh + 1000px)' 
                        }}
                    >
                        {isClient && randomizedImageNumbersLeft.length > 0 ? (
                            Array.from({ length: 150 }, (_, i) => {
                                const imageNumber = randomizedImageNumbersLeft[i];
                                return (
                                    <StripBox key={`left-${i}`} imageNumber={imageNumber} />
                                );
                            })
                        ) : (
                            // Fallback for SSR - show placeholder or first few images
                            Array.from({ length: 150 }, (_, i) => {
                                const imageNumber = (i % 85) + 1;
                                return (
                                    <StripBox key={`left-${i}`} imageNumber={imageNumber} />
                                );
                            })
                        )}
                    </div>
                </div>

                {/* Right Film Strip - Updated Colors */}
                <div className={`fixed right-0 top-0 h-screen w-12 backdrop-blur-xl border-l z-20 transition-all duration-1000 delay-300 ${isVisible ? 'transform translate-x-0 opacity-100' : 'transform translate-x-full opacity-0'}`} style={{
                    background: `linear-gradient(to bottom, rgba(30, 30, 30, 0.9), rgba(30, 30, 30, 0.8), rgba(30, 30, 30, 0.9))`,
                    borderColor: 'rgba(241, 208, 170, 0.2)'
                }}>
                    <div 
                        className="flex flex-col py-2"
                        style={{ 
                            transform: `translateY(${-scrollY * 0.5}px)`,
                            height: 'calc(600vh + 1000px)' 
                        }}
                    >
                        {isClient && randomizedImageNumbersRight.length > 0 ? (
                            Array.from({ length: 150 }, (_, i) => {
                                const imageNumber = randomizedImageNumbersRight[i];
                                return (
                                    <StripBox key={`right-${i}`} imageNumber={imageNumber} />
                                );
                            })
                        ) : (
                            // Fallback for SSR - show placeholder or first few images  
                            Array.from({ length: 150 }, (_, i) => {
                                const imageNumber = (i % 85) + 1;
                                return (
                                    <StripBox key={`right-${i}`} imageNumber={imageNumber} />
                                );
                            })
                        )}
                    </div>
                </div>

                {/* Main Content Area - Updated Background */}
                <div className="mx-12 min-h-screen relative z-10" style={{ backgroundColor: '#1e1e1e' }}>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default MobileLayout;
