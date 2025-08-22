/* eslint-disable react/no-unescaped-entities */
'use client';
import MobileLayout from '@src/components/layouts/MobileLayout';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const WeddingPage: React.FC = () => {
    const [showOpening, setShowOpening] = useState(true);
    const [filmRollComplete, setFilmRollComplete] = useState(false);
    const [mainContentVisible, setMainContentVisible] = useState(false);
    const [fadeOut, setFadeOut] = useState(false);
    const [slideUp, setSlideUp] = useState(false);

    useEffect(() => {
        // Enhanced animation sequence
        const timer1 = setTimeout(() => {
            setFilmRollComplete(true);
        }, 2500);

        const timer2 = setTimeout(() => {
            setFadeOut(true);
        }, 3500);

        const timer3 = setTimeout(() => {
            setSlideUp(true);
        }, 4000);

        const timer4 = setTimeout(() => {
            setShowOpening(false);
            setMainContentVisible(true);
        }, 4500);

        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
            clearTimeout(timer3);
            clearTimeout(timer4);
        };
    }, []);

    if (showOpening) {
        return (
            <div className={`fixed inset-0 z-50 overflow-hidden transition-all duration-1000 ${fadeOut ? 'opacity-0' : 'opacity-100'} ${slideUp ? 'transform -translate-y-full' : ''}`} style={{ backgroundColor: '#1e1e1e' }}>
                {/* Opening Image with Enhanced Fade Animation */}
                <div className="relative w-full h-full">
                    {/* Background Image */}
                    <div className={`absolute inset-0 transition-all duration-1000 ${filmRollComplete ? 'scale-105' : 'scale-100'}`}>
                        <Image
                            src="/opening.webp"
                            alt="Wedding Opening"
                            fill
                            className="object-cover transition-all duration-1000"
                            style={{ 
                                filter: `brightness(${filmRollComplete ? '0.6' : '0.8'}) blur(${fadeOut ? '3px' : '0px'})` 
                            }}
                            priority
                            quality={90}
                        />
                    </div>
                    
                    {/* Overlay for better text readability */}
                    <div className={`absolute inset-0 transition-all duration-1000 ${filmRollComplete ? 'opacity-70' : 'opacity-40'}`} style={{ backgroundColor: 'rgba(30, 30, 30, 0.4)' }}></div>

                    {/* Content overlay with enhanced animations */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <div className={`transform transition-all duration-2000 ease-out ${filmRollComplete ? 'scale-110 opacity-0 translate-y-8' : 'scale-100 opacity-100 translate-y-0'}`}>
                            <div className="text-center">
                                <h1 className={`text-5xl font-thin mb-4 tracking-wide transition-all duration-1500 ${filmRollComplete ? 'transform translate-y-4' : ''}`} style={{ color: '#f4f4e8' }}>
                                    FARELL & VERA
                                </h1>
                                <div className={`w-32 h-px mx-auto mb-6 transition-all duration-1000 ${filmRollComplete ? 'w-48 opacity-30' : 'opacity-100'}`} style={{ backgroundColor: '#f1d0aa' }}></div>
                                <p className={`text-lg font-light tracking-widest transition-all duration-1500 delay-300 ${filmRollComplete ? 'opacity-0 transform translate-y-4' : 'opacity-100'}`} style={{ color: '#f1d0aa' }}>
                                    SEPTEMBER 28, 2025
                                </p>
                            </div>
                        </div>
                        
                        {/* New elegant text that appears during transition */}
                        <div className={`absolute inset-0 flex items-center justify-center transition-all duration-1500 delay-500 ${filmRollComplete ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'}`}>
                            <div className="text-center">
                                <div className={`text-2xl font-thin tracking-[0.3em] mb-4 transition-all duration-1000 ${fadeOut ? 'transform scale-95 opacity-50' : ''}`} style={{ color: '#f4f4e8' }}>
                                    CELEBRATING LOVE
                                </div>
                                <div className={`w-24 h-px mx-auto transition-all duration-1000 ${fadeOut ? 'w-48' : ''}`} style={{ backgroundColor: '#f1d0aa' }}></div>
                            </div>
                        </div>
                    </div>

                    {/* Enhanced Loading text */}
                    <div className={`absolute bottom-20 left-1/2 transform -translate-x-1/2 transition-all duration-1000 ${fadeOut ? 'opacity-0 translate-y-4' : 'opacity-100'}`}>
                        <div className="text-xl font-light tracking-widest animate-pulse" style={{ color: '#f4f4e8' }}>
                            {filmRollComplete ? 'Preparing...' : 'Loading Memories...'}
                        </div>
                        
                        {/* Progress indicator */}
                        <div className="w-32 h-px mx-auto mt-4 bg-gradient-to-r from-transparent via-current to-transparent opacity-30">
                            <div className={`h-full bg-current transition-all duration-3000 ease-out ${filmRollComplete ? 'w-full' : 'w-0'}`} style={{ backgroundColor: '#f1d0aa' }}></div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }

    return (
        <MobileLayout>
            <main className={`min-h-screen transition-all duration-1500 ease-out ${mainContentVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'}`} style={{ backgroundColor: '#1e1e1e' }}>
                {/* Hero Section - Updated Color Scheme */}
                <section className={`text-center py-24 relative overflow-hidden transition-all duration-2000 delay-300 ${mainContentVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-12'}`} style={{ backgroundColor: '#1e1e1e' }}>
                    {/* Premium gradient background */}
                    <div className="absolute inset-0" style={{ 
                        background: `linear-gradient(to bottom, rgba(241, 208, 170, 0.1) 0%, rgba(30, 30, 30, 1) 50%, rgba(244, 244, 232, 0.05) 100%)`
                    }}></div>
                    
                    {/* Ambient lighting effects */}
                    <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl" style={{ backgroundColor: 'rgba(241, 208, 170, 0.1)' }}></div>
                    <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-3xl" style={{ backgroundColor: 'rgba(244, 244, 232, 0.05)' }}></div>
                    
                    <div className="relative z-10 px-4 max-w-sm mx-auto">
                        {/* Wedding Logo */}
                        <div className="mb-8 flex justify-center">
                            <div className="w-20 h-20 flex items-center justify-center">
                                <Image 
                                    src="/logo.png" 
                                    alt="Wedding Logo"
                                    width={80}
                                    height={80}
                                    className="object-contain"
                                    loading="lazy"
                                />
                            </div>
                        </div>

                        <div className="mb-12">
                            {/* Mobile-optimized typography */}
                            <div className="mb-8">
                                <div className="text-xs tracking-[0.2em] uppercase font-light mb-8 opacity-90 text-center" style={{ color: '#f1d0aa' }}>
                                    CELEBRATING ETERNAL LOVE
                                </div>
                                <h1 className="text-4xl font-thin mb-4 tracking-wide leading-tight luxury-text text-center" style={{ color: '#f4f4e8' }}>
                                    FARELL
                                </h1>
                                <div className="flex items-center justify-center mb-4">
                                    <div className="w-12 h-px" style={{ background: `linear-gradient(to right, transparent, rgba(241, 208, 170, 0.8), transparent)` }}></div>
                                    <span className="mx-4 text-xl font-thin tracking-wide" style={{ color: '#f1d0aa' }}>&</span>
                                    <div className="w-12 h-px" style={{ background: `linear-gradient(to right, transparent, rgba(241, 208, 170, 0.8), transparent)` }}></div>
                                </div>
                                <h1 className="text-4xl font-thin leading-tight luxury-text text-center" style={{ color: '#f4f4e8' }}>
                                    VERA
                                </h1>
                            </div>
                        </div>

                        {/* Premium invitation text */}
                        <p className="text-sm mb-12 font-light tracking-wide uppercase text-center" style={{ color: '#f4f4e8', opacity: 0.8 }}>
                            Request the Honor of Your Presence
                        </p>

                        {/* Event details */}
                        <div className="space-y-3 mb-12 text-center">
                            <p className="text-lg font-light tracking-wide" style={{ color: '#f1d0aa' }}>SEPTEMBER 28, 2025</p>
                            <p className="font-light tracking-wide text-sm" style={{ color: '#f4f4e8', opacity: 0.9 }}>QUEEN CITY MALL, SEMARANG</p>
                        </div>
                        
                        {/* Mobile-optimized Countdown */}
                        <div className="backdrop-blur-xl rounded-2xl p-6 border-2 shadow-2xl relative overflow-hidden" style={{ 
                            backgroundColor: 'rgba(30, 30, 30, 0.8)',
                            borderColor: 'rgba(241, 208, 170, 0.3)'
                        }}>
                            {/* Inner glow effect */}
                            <div className="absolute inset-0 rounded-2xl" style={{ 
                                background: `linear-gradient(to right, rgba(241, 208, 170, 0.05), transparent, rgba(244, 244, 232, 0.05))`
                            }}></div>
                            
                            <div className="relative z-10">
                                <p className="text-xs mb-6 uppercase tracking-wide font-light opacity-90 text-center" style={{ color: '#f1d0aa' }}>
                                    COUNTDOWN TO FOREVER
                                </p>
                                <div className="grid grid-cols-3 gap-4">
                                    <div className="group text-center">
                                        <div className="text-2xl font-thin mb-2 group-hover:opacity-80 transition-all duration-500 tracking-wide" style={{ color: '#f4f4e8' }}>37</div>
                                        <div className="text-xs uppercase tracking-wide font-light" style={{ color: '#f4f4e8', opacity: 0.7 }}>DAYS</div>
                                        <div className="w-full h-px mt-2" style={{ background: `linear-gradient(to right, transparent, rgba(241, 208, 170, 0.3), transparent)` }}></div>
                                    </div>
                                    <div className="group text-center">
                                        <div className="text-2xl font-thin mb-2 group-hover:opacity-80 transition-all duration-500 tracking-wide" style={{ color: '#f4f4e8' }}>16</div>
                                        <div className="text-xs uppercase tracking-wide font-light" style={{ color: '#f4f4e8', opacity: 0.7 }}>HOURS</div>
                                        <div className="w-full h-px mt-2" style={{ background: `linear-gradient(to right, transparent, rgba(241, 208, 170, 0.3), transparent)` }}></div>
                                    </div>
                                    <div className="group text-center">
                                        <div className="text-2xl font-thin mb-2 group-hover:opacity-80 transition-all duration-500 tracking-wide" style={{ color: '#f4f4e8' }}>31</div>
                                        <div className="text-xs uppercase tracking-wide font-light" style={{ color: '#f4f4e8', opacity: 0.7 }}>MIN</div>
                                        <div className="w-full h-px mt-2" style={{ background: `linear-gradient(to right, transparent, rgba(241, 208, 170, 0.3), transparent)` }}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <style jsx>{`
                        .luxury-text {
                            text-shadow: 0 0 30px rgba(241, 208, 170, 0.3);
                        }
                    `}</style>
                </section>

                {/* Meet the Couple Section */}
                <section className={`py-16 px-4 relative transition-all duration-2000 delay-500 ${mainContentVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-12'}`} style={{ backgroundColor: '#1e1e1e' }}>
                    {/* Ambient lighting */}
                    <div className="absolute top-1/4 left-0 w-32 h-32 rounded-full blur-2xl" style={{ backgroundColor: 'rgba(244, 244, 232, 0.05)' }}></div>
                    <div className="absolute bottom-1/4 right-0 w-32 h-32 rounded-full blur-2xl" style={{ backgroundColor: 'rgba(241, 208, 170, 0.1)' }}></div>
                    
                    <div className="text-center mb-12 max-w-sm mx-auto relative z-10">
                        <div className="text-xs tracking-wide uppercase font-light mb-4 opacity-90" style={{ color: '#f1d0aa' }}>INTRODUCING</div>
                        <h2 className="text-3xl font-thin mb-6 tracking-wide luxury-text" style={{ color: '#f4f4e8' }}>THE COUPLE</h2>
                        <p className="font-light tracking-wide leading-relaxed" style={{ color: '#f4f4e8', opacity: 0.8 }}>
                            Two Hearts, One Destiny
                        </p>
                    </div>
                    
                    <div className="space-y-12 max-w-sm mx-auto relative z-10">
                        {/* Groom - Premium Card */}
                        <div className="group">
                            <div className="backdrop-blur-xl rounded-2xl p-6 border-2 shadow-2xl hover:border-opacity-60 transition-all duration-700 relative overflow-hidden" style={{
                                backgroundColor: 'rgba(30, 30, 30, 0.8)',
                                borderColor: 'rgba(241, 208, 170, 0.2)'
                            }}>
                                {/* Inner glow */}
                                <div className="absolute inset-0 rounded-2xl" style={{ 
                                    background: `linear-gradient(to bottom right, rgba(241, 208, 170, 0.05), transparent)`
                                }}></div>
                                
                                <div className="relative z-10 text-center">
                                    <div className="mb-6">
                                        <div className="w-24 h-24 rounded-2xl mx-auto flex items-center justify-center border-2 group-hover:border-opacity-70 transition-all duration-700 overflow-hidden backdrop-blur-sm" style={{
                                            background: `linear-gradient(to bottom right, rgba(241, 208, 170, 0.2), rgba(244, 244, 232, 0.1))`,
                                            borderColor: 'rgba(241, 208, 170, 0.3)'
                                        }}>
                                            <div className="w-full h-full flex items-center justify-center rounded-xl" style={{ backgroundColor: 'rgba(30, 30, 30, 0.2)' }}>
                                                <span className="text-xs font-light tracking-wide" style={{ color: '#f1d0aa' }}>PHOTO</span>
                                            </div>
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-thin mb-3 tracking-wide luxury-text" style={{ color: '#f4f4e8' }}>FARELL</h3>
                                    <div className="w-16 h-px mx-auto mb-4" style={{ background: `linear-gradient(to right, transparent, rgba(241, 208, 170, 0.6), transparent)` }}></div>
                                    <p className="leading-relaxed font-light tracking-wide text-sm" style={{ color: '#f4f4e8', opacity: 0.8 }}>
                                        A visionary with passion for capturing life's most precious moments. 
                                        Believes that every frame tells a story worth preserving forever.
                                    </p>
                                </div>
                            </div>
                        </div>
                        
                        {/* Divider */}
                        <div className="text-center">
                            <div className="flex items-center justify-center space-x-3">
                                <div className="w-16 h-px" style={{ background: `linear-gradient(to right, transparent, rgba(241, 208, 170, 0.4), transparent)` }}></div>
                                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: 'rgba(241, 208, 170, 0.6)' }}></div>
                                <div className="w-16 h-px" style={{ background: `linear-gradient(to right, transparent, rgba(241, 208, 170, 0.4), transparent)` }}></div>
                            </div>
                        </div>
                        
                        {/* Bride - Premium Card */}
                        <div className="group">
                            <div className="backdrop-blur-xl rounded-2xl p-6 border-2 shadow-2xl hover:border-opacity-60 transition-all duration-700 relative overflow-hidden" style={{
                                backgroundColor: 'rgba(30, 30, 30, 0.8)',
                                borderColor: 'rgba(244, 244, 232, 0.2)'
                            }}>
                                {/* Inner glow */}
                                <div className="absolute inset-0 rounded-2xl" style={{ 
                                    background: `linear-gradient(to bottom right, rgba(244, 244, 232, 0.05), transparent)`
                                }}></div>
                                
                                <div className="relative z-10 text-center">
                                    <div className="mb-6">
                                        <div className="w-24 h-24 rounded-2xl mx-auto flex items-center justify-center border-2 group-hover:border-opacity-70 transition-all duration-700 overflow-hidden backdrop-blur-sm" style={{
                                            background: `linear-gradient(to bottom right, rgba(244, 244, 232, 0.2), rgba(241, 208, 170, 0.1))`,
                                            borderColor: 'rgba(244, 244, 232, 0.3)'
                                        }}>
                                            <div className="w-full h-full flex items-center justify-center rounded-xl" style={{ backgroundColor: 'rgba(30, 30, 30, 0.2)' }}>
                                                <span className="text-xs font-light tracking-wide" style={{ color: '#f4f4e8' }}>PHOTO</span>
                                            </div>
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-thin mb-3 tracking-wide luxury-text" style={{ color: '#f4f4e8' }}>VERA</h3>
                                    <div className="w-16 h-px mx-auto mb-4" style={{ background: `linear-gradient(to right, transparent, rgba(244, 244, 232, 0.6), transparent)` }}></div>
                                    <p className="leading-relaxed font-light tracking-wide text-sm" style={{ color: '#f4f4e8', opacity: 0.8 }}>
                                        An artist whose heart speaks through creativity and grace. 
                                        Finds beauty in life's simplest moments and believes love is the ultimate masterpiece.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Wedding Events Section */}
                <section className={`py-16 px-4 relative transition-all duration-2000 delay-700 ${mainContentVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-12'}`} style={{ backgroundColor: '#1e1e1e' }}>
                    {/* Ambient lighting effects */}
                    <div className="absolute top-0 right-1/3 w-40 h-40 rounded-full blur-2xl" style={{ backgroundColor: 'rgba(241, 208, 170, 0.1)' }}></div>
                    
                    <div className="text-center mb-12 max-w-sm mx-auto relative z-10">
                        <div className="text-xs tracking-wide uppercase font-light mb-4 opacity-90" style={{ color: '#f1d0aa' }}>EVENT DETAILS</div>
                        <h2 className="text-3xl font-thin mb-6 tracking-wide luxury-text" style={{ color: '#f4f4e8' }}>CELEBRATION</h2>
                    </div>
                    
                    <div className="max-w-sm mx-auto relative z-10">
                        {/* Venue Image Slot */}
                        <div className="mb-8">
                            <div className="w-full h-40 backdrop-blur-xl rounded-2xl flex items-center justify-center border-2 overflow-hidden relative group hover:border-opacity-60 transition-all duration-700" style={{
                                background: `linear-gradient(to bottom right, rgba(241, 208, 170, 0.1), rgba(244, 244, 232, 0.05))`,
                                borderColor: 'rgba(241, 208, 170, 0.2)'
                            }}>
                                <div className="absolute inset-0" style={{ background: `linear-gradient(to right, rgba(241, 208, 170, 0.05), transparent, rgba(241, 208, 170, 0.05))` }}></div>
                                <div className="w-full h-full flex items-center justify-center relative z-10" style={{ backgroundColor: 'rgba(30, 30, 30, 0.2)' }}>
                                    <span className="font-light tracking-wide" style={{ color: '#f1d0aa' }}>VENUE SHOWCASE</span>
                                </div>
                            </div>
                        </div>
                        
                        {/* Event Details */}
                        <div className="backdrop-blur-xl rounded-2xl p-6 border-2 shadow-2xl hover:border-opacity-60 transition-all duration-700 relative overflow-hidden" style={{
                            backgroundColor: 'rgba(30, 30, 30, 0.8)',
                            borderColor: 'rgba(241, 208, 170, 0.2)'
                        }}>
                            <div className="absolute inset-0 rounded-2xl" style={{ background: `linear-gradient(to bottom right, rgba(241, 208, 170, 0.05), transparent)` }}></div>
                            
                            <div className="relative z-10">
                                <div className="flex items-start mb-6">
                                    <div className="w-12 h-12 rounded-xl flex items-center justify-center mr-4 border-2 backdrop-blur-sm" style={{
                                        background: `linear-gradient(to bottom right, rgba(241, 208, 170, 0.3), rgba(244, 244, 232, 0.2))`,
                                        borderColor: 'rgba(241, 208, 170, 0.4)'
                                    }}>
                                        <span className="text-lg" style={{ color: '#f1d0aa' }}>✦</span>
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-lg font-thin mb-2 tracking-wide luxury-text" style={{ color: '#f4f4e8' }}>EVENING RECEPTION</h3>
                                        <p className="font-light tracking-wide text-sm" style={{ color: '#f1d0aa' }}>19:00 - 00:00 WIB</p>
                                    </div>
                                </div>
                                
                                <div className="space-y-4 mb-6">
                                    <div>
                                        <p className="mb-1 font-light tracking-wide text-sm" style={{ color: '#f4f4e8', opacity: 0.7 }}>DATE</p>
                                        <p className="text-sm font-thin tracking-wide" style={{ color: '#f4f4e8' }}>SUNDAY, 28TH SEPTEMBER 2025</p>
                                    </div>
                                    <div>
                                        <p className="mb-1 font-light tracking-wide text-sm" style={{ color: '#f4f4e8', opacity: 0.7 }}>VENUE</p>
                                        <p className="text-sm font-thin tracking-wide" style={{ color: '#f4f4e8' }}>QUEEN CITY MALL</p>
                                        <p className="text-sm font-light tracking-wide" style={{ color: '#f4f4e8', opacity: 0.8 }}>SEMARANG</p>
                                    </div>
                                </div>
                                
                                <div className="w-full h-px mb-6" style={{ background: `linear-gradient(to right, transparent, rgba(241, 208, 170, 0.4), transparent)` }}></div>
                                
                                <p className="leading-relaxed font-light tracking-wide text-sm" style={{ color: '#f4f4e8', opacity: 0.8 }}>
                                    Join us for an unforgettable evening of elegance, fine dining, and celebration 
                                    as we begin our journey together as one.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <section className={`py-16 border-t-2 relative transition-all duration-2000 delay-900 ${mainContentVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-12'}`} style={{ 
                    backgroundColor: '#1e1e1e',
                    borderColor: 'rgba(241, 208, 170, 0.2)'
                }}>
                    {/* Subtle ambient lighting */}
                    <div className="absolute inset-0" style={{ background: `linear-gradient(to top, rgba(241, 208, 170, 0.05), transparent)` }}></div>
                    
                    <div className="text-center max-w-sm mx-auto relative z-10 px-4">
                        <div className="mb-6">
                            <h3 className="text-2xl font-thin mb-4 tracking-wide luxury-text" style={{ color: '#f4f4e8' }}>
                                FARELL <span className="mx-2" style={{ color: '#f1d0aa' }}>&</span> VERA
                            </h3>
                            <div className="w-24 h-px mx-auto mb-6" style={{ background: `linear-gradient(to right, transparent, rgba(241, 208, 170, 0.6), transparent)` }}></div>
                        </div>
                        <p className="text-sm font-light tracking-wide mb-4 uppercase" style={{ color: '#f4f4e8', opacity: 0.8 }}>
                            With Love and Anticipation ♡
                        </p>
                        <div className="text-xs font-light tracking-wide uppercase" style={{ color: '#f4f4e8', opacity: 0.6 }}>
                            SEPTEMBER 28, 2025
                        </div>
                    </div>
                </section>
            </main>
        </MobileLayout>
    );
}

export default WeddingPage;