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
            {/* Force mobile view on all devices - Full width */}
            <div className="w-full min-h-screen bg-gray-950 relative">
                {/* Left Film Strip - Scrolls DOWN when page scrolls DOWN */}
                <div className="fixed left-0 top-0 h-screen w-20 bg-gradient-to-r from-gray-800 to-gray-700 border-r-2 border-gray-600 z-20">
                    <div 
                        className="flex flex-col py-2"
                        style={{ 
                            transform: `translateY(${scrollY * 0.8 - 2000}px)`, // Larger negative offset
                            height: 'calc(800vh + 2000px)' // Much larger height
                        }}
                    >
                        {Array.from({ length: 200 }, (_, i) => (
                            <StripBox key={`left-${i}`} text={`L${i + 1}`} />
                        ))}
                    </div>
                </div>

                {/* Right Film Strip - Scrolls UP when page scrolls DOWN */}
                <div className="fixed right-0 top-0 h-screen w-20 bg-gradient-to-l from-gray-800 to-gray-700 border-l-2 border-gray-600 z-20">
                    <div 
                        className="flex flex-col py-2"
                        style={{ 
                            transform: `translateY(${-scrollY * 0.8}px)`,
                            height: 'calc(800vh + 2000px)' // Much larger height
                        }}
                    >
                        {Array.from({ length: 200 }, (_, i) => (
                            <StripBox key={`right-${i}`} text={`R${i + 1}`} />
                        ))}
                    </div>
                </div>

                {/* Main Content Area */}
                <div className="mx-20 min-h-screen bg-white shadow-lg relative z-10">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default MobileLayout;
