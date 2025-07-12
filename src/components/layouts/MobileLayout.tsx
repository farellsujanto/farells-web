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

    useEffect(() => {
        setIsClient(true);
        // Generate random numbers only on client side
        setRandomizedImageNumbersLeft(Array.from({ length: 150 }, () => Math.floor(Math.random() * 85) + 1));
        setRandomizedImageNumbersRight(Array.from({ length: 150 }, () => Math.floor(Math.random() * 85) + 1));
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="min-h-screen w-full bg-gray-950 relative overflow-hidden">
            {/* Minimalist mobile view */}
            <div className="w-full min-h-screen bg-gray-950 relative">
                {/* Left Film Strip - More subtle */}
                <div className="fixed left-0 top-0 h-screen w-16 bg-gray-900/50 backdrop-blur-sm border-r border-gray-800/30 z-20">
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

                {/* Right Film Strip - More subtle */}
                <div className="fixed right-0 top-0 h-screen w-16 bg-gray-900/50 backdrop-blur-sm border-l border-gray-800/30 z-20">
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

                {/* Main Content Area */}
                <div className="mx-16 min-h-screen bg-gray-950 relative z-10">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default MobileLayout;
