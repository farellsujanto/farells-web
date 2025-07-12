'use client';
import MobileLayout from '@src/components/layouts/MobileLayout';
import React from 'react';

const WeddingPage: React.FC = () => {
    return (
        <MobileLayout>
            <main className="bg-gray-950 min-h-screen">
                {/* Hero Section */}
                <section className="text-center py-32 bg-gray-950 relative overflow-hidden">
                    {/* Subtle background gradient */}
                    <div className="absolute inset-0 bg-gradient-to-b from-purple-950/20 via-transparent to-blue-950/20"></div>
                    
                    <div className="relative z-10 px-6 max-w-2xl mx-auto">
                        <div className="mb-16">
                            {/* Minimalist monogram */}
                            <div className="mb-8">
                                <div className="text-xs tracking-[0.3em] text-purple-300 uppercase font-light mb-8 opacity-80">Together Forever</div>
                                <h1 className="text-6xl md:text-7xl font-light mb-4 text-white tracking-wide leading-none">
                                    Vera
                                </h1>
                                <div className="flex items-center justify-center mb-4">
                                    <div className="w-8 h-px bg-purple-400/60"></div>
                                    <span className="mx-6 text-lg text-purple-300 font-light">&</span>
                                    <div className="w-8 h-px bg-purple-400/60"></div>
                                </div>
                                <h1 className="text-6xl md:text-7xl font-light text-white tracking-wide leading-none">
                                    Farell
                                </h1>
                            </div>
                        </div>
                        <p className="text-lg text-gray-400 mb-12 font-light tracking-wide">
                            request the pleasure of your company
                        </p>
                        <div className="text-gray-300 space-y-2 mb-16">
                            <p className="text-xl font-light tracking-wide text-purple-300">September 28, 2025</p>
                            <p className="text-gray-400 font-light tracking-wide">The Suri, Queen City Mall, Semarang</p>
                        </div>
                        
                        {/* Minimalist Countdown */}
                        <div className="bg-gray-900/40 backdrop-blur-sm rounded-2xl p-8 border border-gray-800/50">
                            <p className="text-xs text-purple-300 mb-6 uppercase tracking-[0.3em] font-light opacity-80">Until our special day</p>
                            <div className="grid grid-cols-4 gap-8">
                                <div className="group">
                                    <div className="text-left text-2xl font-light text-white mb-1 group-hover:text-purple-300 transition-colors">30</div>
                                    <div className="text-left text-xs text-gray-500 uppercase tracking-wider font-light">Days</div>
                                </div>
                                <div className="group">
                                    <div className="text-center text-2xl font-light text-white mb-1 group-hover:text-purple-300 transition-colors">16</div>
                                    <div className="text-center text-xs text-gray-500 uppercase tracking-wider font-light">Hours</div>
                                </div>
                                <div className="group">
                                    <div className="text-2xl font-light text-white mb-1 group-hover:text-purple-300 transition-colors">31</div>
                                    <div className="text-xs text-gray-500 uppercase tracking-wider font-light">Minutes</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Meet the Couple Section */}
                <section className="py-24 px-6 bg-gray-950">
                    <div className="text-center mb-20 max-w-xl mx-auto">
                        <div className="text-xs tracking-[0.3em] text-blue-300 uppercase font-light mb-6 opacity-80">About us</div>
                        <h2 className="text-4xl font-light mb-8 text-white tracking-wide">Our Story</h2>
                        <p className="text-gray-400 font-light tracking-wide leading-relaxed">
                            Two souls, one journey
                        </p>
                    </div>
                    
                    <div className="space-y-20 max-w-2xl mx-auto">
                        {/* Groom */}
                        <div className="text-center group">
                            <div className="mb-8">
                                <div className="w-32 h-32 bg-gray-900/50 rounded-2xl mx-auto flex items-center justify-center border border-gray-800/50 group-hover:border-purple-400/30 transition-all duration-500 overflow-hidden">
                                    {/* Image slot for groom */}
                                    <div className="w-full h-full bg-gray-800/20 flex items-center justify-center">
                                        <span className="text-gray-600 text-xs font-light">Photo</span>
                                    </div>
                                </div>
                            </div>
                            <h3 className="text-2xl font-light mb-4 text-white tracking-wide">Farell Sujanto</h3>
                            <p className="text-gray-400 leading-relaxed max-w-md mx-auto font-light tracking-wide text-sm">
                                A gentle soul with a passion for photography and adventure. 
                                Creating memories that last forever.
                            </p>
                        </div>
                        
                        {/* Minimalist Divider */}
                        <div className="text-center">
                            <div className="w-16 h-px bg-gradient-to-r from-transparent via-purple-400/40 to-transparent mx-auto"></div>
                        </div>
                        
                        {/* Bride */}
                        <div className="text-center group">
                            <div className="mb-8">
                                <div className="w-32 h-32 bg-gray-900/50 rounded-2xl mx-auto flex items-center justify-center border border-gray-800/50 group-hover:border-purple-400/30 transition-all duration-500 overflow-hidden">
                                    {/* Image slot for bride */}
                                    <div className="w-full h-full bg-gray-800/20 flex items-center justify-center">
                                        <span className="text-gray-600 text-xs font-light">Photo</span>
                                    </div>
                                </div>
                            </div>
                            <h3 className="text-2xl font-light mb-4 text-white tracking-wide">Poa, Olivera Laurenzia Caroline</h3>
                            <p className="text-gray-400 leading-relaxed max-w-md mx-auto font-light tracking-wide text-sm">
                                An artist at heart with a love for nature and poetry. 
                                Believes that love is the greatest masterpiece of all.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Wedding Events Section */}
                <section className="py-24 px-6 bg-gray-950">
                    <div className="text-center mb-16 max-w-xl mx-auto">
                        <div className="text-xs tracking-[0.3em] text-green-300 uppercase font-light mb-6 opacity-80">Celebration</div>
                        <h2 className="text-4xl font-light mb-8 text-white tracking-wide">Timeline</h2>
                    </div>
                    
                    <div className="max-w-2xl mx-auto">
                        {/* Venue Image Slot */}
                        <div className="mb-8">
                            <div className="w-full h-48 bg-gray-900/30 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-gray-800/50 overflow-hidden">
                                <div className="w-full h-full bg-gray-800/10 flex items-center justify-center">
                                    <span className="text-gray-600 text-sm font-light">Venue Photo</span>
                                </div>
                            </div>
                        </div>
                        
                        <div className="bg-gray-900/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-800/50 hover:border-gray-700/50 transition-all duration-500">
                            <div className="flex items-start mb-6">
                                <div className="w-12 h-12 bg-gray-800/50 rounded-xl flex items-center justify-center mr-6 border border-gray-700/30">
                                    <span className="text-green-300 text-lg">🥂</span>
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-light text-white mb-2 tracking-wide">Evening Celebration</h3>
                                    <p className="text-gray-400 font-light tracking-wide">7:00 PM - 12:00 AM</p>
                                </div>
                            </div>
                            <p className="text-gray-400 mb-3 font-light tracking-wide text-sm">Sunday 28th September, 2025</p>
                            <p className="text-gray-300 leading-relaxed font-light tracking-wide text-sm">
                                The Suri, Queen City Mall, Semarang - An evening of fine dining, heartfelt toasts, and dancing under the stars.
                            </p>
                        </div>
    
                    </div>
                </section>

                {/* Our Love Story Section */}
                <section className="py-24 px-6 bg-gray-950">
                    <div className="text-center mb-16 max-w-xl mx-auto">
                        <div className="text-xs tracking-[0.3em] text-pink-300 uppercase font-light mb-6 opacity-80">Journey</div>
                        <h2 className="text-4xl font-light mb-8 text-white tracking-wide">How We Met</h2>
                        <p className="text-gray-400 font-light tracking-wide leading-relaxed text-sm">
                            Every love story is beautiful, but ours is our favorite
                        </p>
                    </div>
                    
                    <div className="space-y-12 max-w-2xl mx-auto">
                        <div className="flex items-start space-x-6 group">
                            <div className="w-12 h-12 bg-gray-900/50 rounded-xl flex items-center justify-center flex-shrink-0 border border-gray-800/50 group-hover:border-pink-300/30 transition-all duration-500">
                                <span className="text-pink-300 text-lg">✨</span>
                            </div>
                            <div className="flex-1">
                                <h3 className="text-xl font-light text-white mb-2 tracking-wide">The First Hello</h3>
                                <p className="text-xs text-pink-300 font-light mb-4 tracking-wider uppercase opacity-80">December 25, 2020</p>
                                
                                {/* Story Image Slot */}
                                <div className="w-full h-32 bg-gray-900/30 backdrop-blur-sm rounded-xl mb-4 flex items-center justify-center border border-gray-800/50 overflow-hidden">
                                    <div className="w-full h-full bg-gray-800/10 flex items-center justify-center">
                                        <span className="text-gray-600 text-xs font-light">Memory Photo</span>
                                    </div>
                                </div>
                                
                                <p className="text-gray-400 leading-relaxed font-light tracking-wide text-sm">
                                    On a snowy Christmas morning at the local coffee shop, our eyes met over steaming cups of cocoa. 
                                    What started as a simple "excuse me" became hours of conversation.
                                </p>
                            </div>
                        </div>
                        
                        <div className="flex items-start space-x-6 group">
                            <div className="w-12 h-12 bg-gray-900/50 rounded-xl flex items-center justify-center flex-shrink-0 border border-gray-800/50 group-hover:border-pink-300/30 transition-all duration-500">
                                <span className="text-pink-300 text-lg">🌹</span>
                            </div>
                            <div className="flex-1">
                                <h3 className="text-xl font-light text-white mb-2 tracking-wide">Our First Adventure</h3>
                                <p className="text-xs text-pink-300 font-light mb-4 tracking-wider uppercase opacity-80">December 28, 2020</p>
                                
                                {/* Story Image Slot */}
                                <div className="w-full h-32 bg-gray-900/30 backdrop-blur-sm rounded-xl mb-4 flex items-center justify-center border border-gray-800/50 overflow-hidden">
                                    <div className="w-full h-full bg-gray-800/10 flex items-center justify-center">
                                        <span className="text-gray-600 text-xs font-light">Memory Photo</span>
                                    </div>
                                </div>
                                
                                <p className="text-gray-400 leading-relaxed font-light tracking-wide text-sm">
                                    Three days later, we found ourselves walking through the winter gardens, sharing stories 
                                    and dreams under the moonlight.
                                </p>
                            </div>
                        </div>
                        
                        <div className="flex items-start space-x-6 group">
                            <div className="w-12 h-12 bg-gray-900/50 rounded-xl flex items-center justify-center flex-shrink-0 border border-gray-800/50 group-hover:border-pink-300/30 transition-all duration-500">
                                <span className="text-pink-300 text-lg">💍</span>
                            </div>
                            <div className="flex-1">
                                <h3 className="text-xl font-light text-white mb-2 tracking-wide">Forever Begins</h3>
                                <p className="text-xs text-pink-300 font-light mb-4 tracking-wider uppercase opacity-80">January 1, 2021</p>
                                
                                {/* Story Image Slot */}
                                <div className="w-full h-32 bg-gray-900/30 backdrop-blur-sm rounded-xl mb-4 flex items-center justify-center border border-gray-800/50 overflow-hidden">
                                    <div className="w-full h-full bg-gray-800/10 flex items-center justify-center">
                                        <span className="text-gray-600 text-xs font-light">Memory Photo</span>
                                    </div>
                                </div>
                                
                                <p className="text-gray-400 leading-relaxed font-light tracking-wide text-sm">
                                    As the new year dawned, we made a promise to walk through life together. 
                                    Hand in hand, heart to heart.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Contact Section */}
                <section className="py-24 px-6 bg-gray-950">
                    <div className="text-center mb-16 max-w-xl mx-auto">
                        <div className="text-xs tracking-[0.3em] text-blue-300 uppercase font-light mb-6 opacity-80">Contact</div>
                        <h2 className="text-4xl font-light mb-8 text-white tracking-wide">Questions?</h2>
                    </div>
                    
                    <div className="max-w-lg mx-auto">
                        <p className="text-center text-gray-400 mb-12 leading-relaxed font-light tracking-wide text-sm">
                            We're here to help with any questions you may have about our special day.
                        </p>
                        <div className="space-y-4">
                            <div className="bg-gray-900/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-800/50 text-center hover:border-gray-700/50 transition-all duration-500">
                                <div className="w-10 h-10 bg-gray-800/50 rounded-xl flex items-center justify-center mx-auto mb-3 border border-gray-700/30">
                                    <span className="text-blue-300 text-sm">📧</span>
                                </div>
                                <p className="text-gray-300 font-light tracking-wide text-sm">vera.farell.wedding@email.com</p>
                            </div>
                            <div className="bg-gray-900/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-800/50 text-center hover:border-gray-700/50 transition-all duration-500">
                                <div className="w-10 h-10 bg-gray-800/50 rounded-xl flex items-center justify-center mx-auto mb-3 border border-gray-700/30">
                                    <span className="text-blue-300 text-sm">📱</span>
                                </div>
                                <p className="text-gray-300 font-light tracking-wide text-sm">(555) 123-4567</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Minimalist Footer */}
                <section className="py-16 bg-gray-950 border-t border-gray-800/50">
                    <div className="text-center max-w-md mx-auto">
                        <div className="mb-6">
                            <h3 className="text-2xl font-light text-white mb-4 tracking-wide">
                                Vera <span className="text-purple-300 mx-2">&</span> Farell
                            </h3>
                        </div>
                        <p className="text-gray-400 text-xs font-light tracking-wider mb-4">
                            With love and anticipation ♡
                        </p>
                        <div className="text-xs text-gray-500 font-light tracking-widest uppercase">
                            September 28, 2025
                        </div>
                    </div>
                </section>
            </main>
        </MobileLayout>
    );
}

export default WeddingPage;