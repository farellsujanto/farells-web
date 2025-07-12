import { FC, ReactNode, useEffect, useState } from 'react';
import StripBox from '../decorations/StripBox';

interface MobileLayoutProps {
    children: ReactNode;
}

const MobileLayout: FC<MobileLayoutProps> = ({ children }) => {
    const [scrollY, setScrollY] = useState(0);

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
                            transform: `translateY(${scrollY * 0.5 - 1000}px)`, 
                            height: 'calc(600vh + 1000px)' 
                        }}
                    >
                        {Array.from({ length: 150 }, (_, i) => (
                            <StripBox key={`left-${i}`} text={`${i + 1}`} />
                        ))}
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
                        {Array.from({ length: 150 }, (_, i) => (
                            <StripBox key={`right-${i}`} text={`${i + 1}`} />
                        ))}
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
