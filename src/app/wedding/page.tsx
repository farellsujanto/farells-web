'use client';
import MobileLayout from '@src/components/layouts/MobileLayout';
import React, { useState, useEffect } from 'react';

const WeddingPage: React.FC = () => {
    const [showOpening, setShowOpening] = useState(true);
    const [filmRollComplete, setFilmRollComplete] = useState(false);
    const [mainContentVisible, setMainContentVisible] = useState(false);

    useEffect(() => {
        // Film roll animation sequence
        const timer1 = setTimeout(() => {
            setFilmRollComplete(true);
        }, 3000);

        const timer2 = setTimeout(() => {
            setShowOpening(false);
            setMainContentVisible(true);
        }, 4000);

        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
        };
    }, []);

    if (showOpening) {
        return (
            <div className="fixed inset-0 bg-black z-50 overflow-hidden">
                {/* Film Roll Opening Animation */}
                <div className="relative w-full h-full">
                    {/* Film strip background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900"></div>
                    
                    {/* Film perforations */}
                    <div className="absolute left-4 top-0 bottom-0 w-8 flex flex-col justify-around">
                        {Array.from({ length: 20 }).map((_, i) => (
                            <div key={i} className="w-6 h-4 bg-black rounded-sm border border-gray-600"></div>
                        ))}
                    </div>
                    <div className="absolute right-4 top-0 bottom-0 w-8 flex flex-col justify-around">
                        {Array.from({ length: 20 }).map((_, i) => (
                            <div key={i} className="w-6 h-4 bg-black rounded-sm border border-gray-600"></div>
                        ))}
                    </div>

                    {/* Rolling film photos */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className={`film-roll-container transform transition-all duration-3000 ${filmRollComplete ? 'scale-110 opacity-0' : 'scale-100 opacity-100'}`}>
                            <div className="flex space-x-4 animate-roll">
                                {[1, 15, 30, 45, 60, 75].map((num, i) => (
                                    <div key={i} className="film-frame w-32 h-24 bg-gray-700 border-2 border-gray-500 rounded overflow-hidden">
                                        <img 
                                            src={`/strip-images/${num}.webp`} 
                                            alt={`Film frame ${i + 1}`}
                                            className="w-full h-full object-cover opacity-80"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Loading text */}
                    <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2">
                        <div className="text-white text-xl font-light tracking-widest animate-pulse">
                            Loading Memories...
                        </div>
                    </div>
                </div>

                <style jsx>{`
                    @keyframes roll {
                        0% { transform: translateX(100vw); }
                        100% { transform: translateX(-100vw); }
                    }
                    .animate-roll {
                        animation: roll 3s linear infinite;
                    }
                    .film-roll-container {
                        transition: all 1s ease-in-out;
                    }
                `}</style>
            </div>
        );
    }

    return (
        <MobileLayout>
            <main className={`bg-black min-h-screen transition-opacity duration-1000 ${mainContentVisible ? 'opacity-100' : 'opacity-0'}`}>
                {/* Hero Section - Luxury Car UI Style */}
                <section className="text-center py-24 bg-black relative overflow-hidden">
                    {/* Premium gradient background */}
                    <div className="absolute inset-0 bg-gradient-to-b from-amber-950/30 via-black to-blue-950/20"></div>
                    
                    {/* Ambient lighting effects */}
                    <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
                    
                    <div className="relative z-10 px-4 max-w-sm mx-auto">
                        {/* Wedding Logo Space */}
                        <div className="mb-8 flex justify-center">
                            <div className="w-20 h-20 bg-gradient-to-br from-amber-400/20 to-blue-400/20 backdrop-blur-sm rounded-xl border border-amber-400/30 flex items-center justify-center group hover:border-amber-400/50 transition-all duration-500">
                                <div className="w-full h-full bg-gray-900/30 rounded-lg flex items-center justify-center">
                                    <span className="text-amber-400 text-xs font-light tracking-wider">LOGO</span>
                                </div>
                            </div>
                        </div>

                        <div className="mb-12">
                            {/* Mobile-optimized typography */}
                            <div className="mb-8">
                                <div className="text-xs tracking-[0.2em] text-amber-400 uppercase font-light mb-8 opacity-90 text-center">
                                    CELEBRATING ETERNAL LOVE
                                </div>
                                <h1 className="text-4xl font-thin mb-4 text-white tracking-wide leading-tight luxury-text text-center">
                                    FARELL
                                </h1>
                                <div className="flex items-center justify-center mb-4">
                                    <div className="w-12 h-px bg-gradient-to-r from-transparent via-amber-400/80 to-transparent"></div>
                                    <span className="mx-4 text-xl text-amber-400 font-thin tracking-wide">&</span>
                                    <div className="w-12 h-px bg-gradient-to-r from-transparent via-amber-400/80 to-transparent"></div>
                                </div>
                                <h1 className="text-4xl font-thin text-white tracking-wide leading-tight luxury-text text-center">
                                    VERA
                                </h1>
                            </div>
                        </div>

                        {/* Premium invitation text */}
                        <p className="text-sm text-gray-300 mb-12 font-light tracking-wide uppercase text-center">
                            Request the Honor of Your Presence
                        </p>

                        {/* Event details in luxury car dashboard style */}
                        <div className="text-gray-200 space-y-3 mb-12 text-center">
                            <p className="text-lg font-light tracking-wide text-amber-400">SEPTEMBER 28, 2025</p>
                            <p className="text-gray-300 font-light tracking-wide text-sm">QUEEN CITY MALL, SEMARANG</p>
                        </div>
                        
                        {/* Mobile-optimized HUD-style Countdown */}
                        <div className="bg-black/60 backdrop-blur-xl rounded-2xl p-6 border-2 border-amber-400/30 shadow-2xl relative overflow-hidden">
                            {/* Inner glow effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-amber-400/5 via-transparent to-blue-400/5 rounded-2xl"></div>
                            
                            <div className="relative z-10">
                                <p className="text-xs text-amber-400 mb-6 uppercase tracking-wide font-light opacity-90 text-center">
                                    COUNTDOWN TO FOREVER
                                </p>
                                <div className="grid grid-cols-3 gap-4">
                                    <div className="group text-center">
                                        <div className="text-2xl font-thin text-white mb-2 group-hover:text-amber-400 transition-all duration-500 tracking-wide">37</div>
                                        <div className="text-xs text-gray-400 uppercase tracking-wide font-light">DAYS</div>
                                        <div className="w-full h-px bg-gradient-to-r from-transparent via-amber-400/30 to-transparent mt-2"></div>
                                    </div>
                                    <div className="group text-center">
                                        <div className="text-2xl font-thin text-white mb-2 group-hover:text-amber-400 transition-all duration-500 tracking-wide">16</div>
                                        <div className="text-xs text-gray-400 uppercase tracking-wide font-light">HOURS</div>
                                        <div className="w-full h-px bg-gradient-to-r from-transparent via-amber-400/30 to-transparent mt-2"></div>
                                    </div>
                                    <div className="group text-center">
                                        <div className="text-2xl font-thin text-white mb-2 group-hover:text-amber-400 transition-all duration-500 tracking-wide">31</div>
                                        <div className="text-xs text-gray-400 uppercase tracking-wide font-light">MIN</div>
                                        <div className="w-full h-px bg-gradient-to-r from-transparent via-amber-400/30 to-transparent mt-2"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <style jsx>{`
                        .luxury-text {
                            text-shadow: 0 0 30px rgba(251, 191, 36, 0.3);
                        }
                    `}</style>
                </section>

                {/* Meet the Couple Section - Mobile Luxury */}
                <section className="py-16 px-4 bg-black relative">
                    {/* Ambient lighting */}
                    <div className="absolute top-1/4 left-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl"></div>
                    <div className="absolute bottom-1/4 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl"></div>
                    
                    <div className="text-center mb-12 max-w-sm mx-auto relative z-10">
                        <div className="text-xs tracking-wide text-blue-400 uppercase font-light mb-4 opacity-90">INTRODUCING</div>
                        <h2 className="text-3xl font-thin mb-6 text-white tracking-wide luxury-text">THE COUPLE</h2>
                        <p className="text-gray-300 font-light tracking-wide leading-relaxed">
                            Two Hearts, One Destiny
                        </p>
                    </div>
                    
                    <div className="space-y-12 max-w-sm mx-auto relative z-10">
                        {/* Groom - Mobile Premium Card */}
                        <div className="group">
                            <div className="bg-black/80 backdrop-blur-xl rounded-2xl p-6 border-2 border-amber-400/20 shadow-2xl hover:border-amber-400/40 transition-all duration-700 relative overflow-hidden">
                                {/* Inner glow */}
                                <div className="absolute inset-0 bg-gradient-to-br from-amber-400/5 via-transparent to-transparent rounded-2xl"></div>
                                
                                <div className="relative z-10 text-center">
                                    <div className="mb-6">
                                        <div className="w-24 h-24 bg-gradient-to-br from-amber-400/20 to-amber-600/20 rounded-2xl mx-auto flex items-center justify-center border-2 border-amber-400/30 group-hover:border-amber-400/50 transition-all duration-700 overflow-hidden backdrop-blur-sm">
                                            <div className="w-full h-full bg-gray-900/20 flex items-center justify-center rounded-xl">
                                                <span className="text-amber-400 text-xs font-light tracking-wide">PHOTO</span>
                                            </div>
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-thin mb-3 text-white tracking-wide luxury-text">FARELL</h3>
                                    <div className="w-16 h-px bg-gradient-to-r from-transparent via-amber-400/60 to-transparent mx-auto mb-4"></div>
                                    <p className="text-gray-300 leading-relaxed font-light tracking-wide text-sm">
                                        A visionary with passion for capturing life's most precious moments. 
                                        Believes that every frame tells a story worth preserving forever.
                                    </p>
                                </div>
                            </div>
                        </div>
                        
                        {/* Mobile Luxury Divider */}
                        <div className="text-center">
                            <div className="flex items-center justify-center space-x-3">
                                <div className="w-16 h-px bg-gradient-to-r from-transparent via-amber-400/40 to-transparent"></div>
                                <div className="w-2 h-2 bg-amber-400/60 rounded-full"></div>
                                <div className="w-16 h-px bg-gradient-to-r from-transparent via-amber-400/40 to-transparent"></div>
                            </div>
                        </div>
                        
                        {/* Bride - Mobile Premium Card */}
                        <div className="group">
                            <div className="bg-black/80 backdrop-blur-xl rounded-2xl p-6 border-2 border-blue-400/20 shadow-2xl hover:border-blue-400/40 transition-all duration-700 relative overflow-hidden">
                                {/* Inner glow */}
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/5 via-transparent to-transparent rounded-2xl"></div>
                                
                                <div className="relative z-10 text-center">
                                    <div className="mb-6">
                                        <div className="w-24 h-24 bg-gradient-to-br from-blue-400/20 to-blue-600/20 rounded-2xl mx-auto flex items-center justify-center border-2 border-blue-400/30 group-hover:border-blue-400/50 transition-all duration-700 overflow-hidden backdrop-blur-sm">
                                            <div className="w-full h-full bg-gray-900/20 flex items-center justify-center rounded-xl">
                                                <span className="text-blue-400 text-xs font-light tracking-wide">PHOTO</span>
                                            </div>
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-thin mb-3 text-white tracking-wide luxury-text">VERA</h3>
                                    <div className="w-16 h-px bg-gradient-to-r from-transparent via-blue-400/60 to-transparent mx-auto mb-4"></div>
                                    <p className="text-gray-300 leading-relaxed font-light tracking-wide text-sm">
                                        An artist whose heart speaks through creativity and grace. 
                                        Finds beauty in life's simplest moments and believes love is the ultimate masterpiece.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Wedding Events Section - Mobile Luxury */}
                <section className="py-16 px-4 bg-black relative">
                    {/* Ambient lighting effects */}
                    <div className="absolute top-0 right-1/3 w-40 h-40 bg-emerald-500/10 rounded-full blur-2xl"></div>
                    
                    <div className="text-center mb-12 max-w-sm mx-auto relative z-10">
                        <div className="text-xs tracking-wide text-emerald-400 uppercase font-light mb-4 opacity-90">EVENT DETAILS</div>
                        <h2 className="text-3xl font-thin mb-6 text-white tracking-wide luxury-text">CELEBRATION</h2>
                    </div>
                    
                    <div className="max-w-sm mx-auto relative z-10">
                        {/* Venue Image Slot - Mobile Display */}
                        <div className="mb-8">
                            <div className="w-full h-40 bg-gradient-to-br from-emerald-400/10 to-emerald-600/10 backdrop-blur-xl rounded-2xl flex items-center justify-center border-2 border-emerald-400/20 overflow-hidden relative group hover:border-emerald-400/40 transition-all duration-700">
                                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/5 via-transparent to-emerald-400/5"></div>
                                <div className="w-full h-full bg-gray-900/20 flex items-center justify-center relative z-10">
                                    <span className="text-emerald-400 font-light tracking-wide">VENUE SHOWCASE</span>
                                </div>
                            </div>
                        </div>
                        
                        {/* Event Details - Mobile Dashboard Style */}
                        <div className="bg-black/80 backdrop-blur-xl rounded-2xl p-6 border-2 border-emerald-400/20 shadow-2xl hover:border-emerald-400/40 transition-all duration-700 relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/5 via-transparent to-transparent rounded-2xl"></div>
                            
                            <div className="relative z-10">
                                <div className="flex items-start mb-6">
                                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-400/30 to-emerald-600/30 rounded-xl flex items-center justify-center mr-4 border-2 border-emerald-400/40 backdrop-blur-sm">
                                        <span className="text-emerald-400 text-lg">✦</span>
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-lg font-thin text-white mb-2 tracking-wide luxury-text">EVENING RECEPTION</h3>
                                        <p className="text-emerald-400 font-light tracking-wide text-sm">19:00 - 00:00 WIB</p>
                                    </div>
                                </div>
                                
                                <div className="space-y-4 mb-6">
                                    <div>
                                        <p className="text-gray-300 mb-1 font-light tracking-wide text-sm">DATE</p>
                                        <p className="text-white text-sm font-thin tracking-wide">SUNDAY, 28TH SEPTEMBER 2025</p>
                                    </div>
                                    <div>
                                        <p className="text-gray-300 mb-1 font-light tracking-wide text-sm">VENUE</p>
                                        <p className="text-white text-sm font-thin tracking-wide">QUEEN CITY MALL</p>
                                        <p className="text-gray-400 text-sm font-light tracking-wide">SEMARANG</p>
                                    </div>
                                </div>
                                
                                <div className="w-full h-px bg-gradient-to-r from-transparent via-emerald-400/40 to-transparent mb-6"></div>
                                
                                <p className="text-gray-300 leading-relaxed font-light tracking-wide text-sm">
                                    Join us for an unforgettable evening of elegance, fine dining, and celebration 
                                    as we begin our journey together as one.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Mobile Luxury Footer */}
                <section className="py-16 bg-black border-t-2 border-amber-400/20 relative">
                    {/* Subtle ambient lighting */}
                    <div className="absolute inset-0 bg-gradient-to-t from-amber-400/5 via-transparent to-transparent"></div>
                    
                    <div className="text-center max-w-sm mx-auto relative z-10 px-4">
                        <div className="mb-6">
                            <h3 className="text-2xl font-thin text-white mb-4 tracking-wide luxury-text">
                                FARELL <span className="text-amber-400 mx-2">&</span> VERA
                            </h3>
                            <div className="w-24 h-px bg-gradient-to-r from-transparent via-amber-400/60 to-transparent mx-auto mb-6"></div>
                        </div>
                        <p className="text-gray-300 text-sm font-light tracking-wide mb-4 uppercase">
                            With Love and Anticipation ♡
                        </p>
                        <div className="text-xs text-gray-400 font-light tracking-wide uppercase">
                            SEPTEMBER 28, 2025
                        </div>
                    </div>
                </section>
            </main>
        </MobileLayout>
    );
}

export default WeddingPage;