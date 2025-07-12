'use client';
import MobileLayout from '@src/components/layouts/MobileLayout';
import React from 'react';

const WeddingPage: React.FC = () => {
    return (
        <MobileLayout>
            <main className="bg-gradient-to-b from-neutral-50 via-white to-stone-50 min-h-screen">
                {/* Hero Section */}
                <section className="text-center py-24 bg-gradient-to-br from-stone-50 via-neutral-50 to-amber-50/30 relative overflow-hidden">
                    {/* Elegant background overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-transparent to-amber-50/20"></div>
                    
                    {/* Decorative elements */}
                    <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-32 h-0.5 bg-gradient-to-r from-transparent via-amber-200 to-transparent"></div>
                    <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-32 h-0.5 bg-gradient-to-r from-transparent via-amber-200 to-transparent"></div>
                    
                    <div className="relative z-10 px-6">
                        <div className="mb-12">
                            {/* Elegant monogram style */}
                            <div className="mb-6">
                                <div className="text-xs tracking-widest text-amber-600 uppercase font-light mb-4">Together Forever</div>
                                <h1 className="text-5xl md:text-6xl font-serif font-light mb-3 text-stone-800 tracking-wider leading-tight">
                                    Sarah
                                </h1>
                                <div className="flex items-center justify-center mb-3">
                                    <div className="w-16 h-px bg-amber-300"></div>
                                    <span className="mx-4 text-2xl text-amber-500 font-light">&</span>
                                    <div className="w-16 h-px bg-amber-300"></div>
                                </div>
                                <h1 className="text-5xl md:text-6xl font-serif font-light text-stone-800 tracking-wider">
                                    John
                                </h1>
                            </div>
                        </div>
                        <p className="text-xl text-stone-600 mb-10 font-light italic tracking-wide">
                            request the pleasure of your company
                        </p>
                        <div className="text-lg text-stone-700 space-y-3">
                            <p className="font-light text-2xl tracking-wide text-amber-700">June 15th, 2025</p>
                            <p className="text-stone-600 font-light tracking-wide">Sunset Gardens, California</p>
                        </div>
                        
                        {/* Elegant Countdown Timer */}
                        <div className="mt-16 bg-white/80 backdrop-blur-md rounded-3xl p-8 max-w-lg mx-auto shadow-xl border border-amber-100/50">
                            <p className="text-xs text-amber-600 mb-6 uppercase tracking-[0.2em] font-light">Until our special day</p>
                            <div className="grid grid-cols-4 gap-6 text-center">
                                <div className="group">
                                    <div className="text-3xl font-light text-stone-700 mb-1 group-hover:text-amber-600 transition-colors">328</div>
                                    <div className="text-xs text-stone-500 uppercase tracking-wider font-light">Days</div>
                                </div>
                                <div className="group">
                                    <div className="text-3xl font-light text-stone-700 mb-1 group-hover:text-amber-600 transition-colors">16</div>
                                    <div className="text-xs text-stone-500 uppercase tracking-wider font-light">Hours</div>
                                </div>
                                <div className="group">
                                    <div className="text-3xl font-light text-stone-700 mb-1 group-hover:text-amber-600 transition-colors">31</div>
                                    <div className="text-xs text-stone-500 uppercase tracking-wider font-light">Minutes</div>
                                </div>
                                <div className="group">
                                    <div className="text-3xl font-light text-stone-700 mb-1 group-hover:text-amber-600 transition-colors">36</div>
                                    <div className="text-xs text-stone-500 uppercase tracking-wider font-light">Seconds</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Meet the Couple Section */}
                <section className="py-20 px-6 bg-white">
                    <div className="text-center mb-16">
                        <div className="text-xs tracking-[0.2em] text-amber-600 uppercase font-light mb-4">About us</div>
                        <h2 className="text-4xl font-serif font-light mb-6 text-stone-800 tracking-wide">Our Story Begins</h2>
                        <div className="w-20 h-px bg-amber-300 mx-auto mb-6"></div>
                        <p className="text-lg text-stone-600 font-light tracking-wide max-w-md mx-auto leading-relaxed">
                            Two hearts, one beautiful journey ahead
                        </p>
                    </div>
                    
                    <div className="space-y-16 max-w-4xl mx-auto">
                        {/* Groom */}
                        <div className="text-center group">
                            <div className="relative mb-8">
                                <div className="w-40 h-40 bg-gradient-to-br from-stone-100 to-amber-50 rounded-full mx-auto flex items-center justify-center shadow-lg border border-amber-100/30 group-hover:shadow-xl transition-all duration-300">
                                    <span className="text-4xl">👨</span>
                                </div>
                                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white rounded-full border-2 border-amber-200"></div>
                            </div>
                            <h3 className="text-3xl font-serif font-light mb-2 text-stone-800 tracking-wide">John Anderson</h3>
                            <div className="w-12 h-px bg-amber-300 mx-auto mb-6"></div>
                            <p className="text-stone-600 leading-relaxed max-w-lg mx-auto font-light tracking-wide">
                                A gentle soul with a passion for photography and adventure. 
                                John believes in capturing life's precious moments and creating 
                                memories that last forever.
                            </p>
                        </div>
                        
                        {/* Elegant Heart Divider */}
                        <div className="text-center">
                            <div className="flex items-center justify-center space-x-4">
                                <div className="w-16 h-px bg-amber-200"></div>
                                <div className="text-2xl text-amber-400">♡</div>
                                <div className="w-16 h-px bg-amber-200"></div>
                            </div>
                        </div>
                        
                        {/* Bride */}
                        <div className="text-center group">
                            <div className="relative mb-8">
                                <div className="w-40 h-40 bg-gradient-to-br from-stone-100 to-amber-50 rounded-full mx-auto flex items-center justify-center shadow-lg border border-amber-100/30 group-hover:shadow-xl transition-all duration-300">
                                    <span className="text-4xl">👩</span>
                                </div>
                                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white rounded-full border-2 border-amber-200"></div>
                            </div>
                            <h3 className="text-3xl font-serif font-light mb-2 text-stone-800 tracking-wide">Sarah Williams</h3>
                            <div className="w-12 h-px bg-amber-300 mx-auto mb-6"></div>
                            <p className="text-stone-600 leading-relaxed max-w-lg mx-auto font-light tracking-wide">
                                An artist at heart with a love for nature and poetry. 
                                Sarah finds beauty in the simple things and believes 
                                that love is the greatest masterpiece of all.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Wedding Events Section */}
                <section className="py-20 px-6 bg-gradient-to-b from-stone-50/50 to-white">
                    <div className="text-center mb-16">
                        <div className="text-xs tracking-[0.2em] text-amber-600 uppercase font-light mb-4">Celebration</div>
                        <h2 className="text-4xl font-serif font-light mb-6 text-stone-800 tracking-wide">Wedding Timeline</h2>
                        <div className="w-20 h-px bg-amber-300 mx-auto"></div>
                    </div>
                    
                    <div className="space-y-8 max-w-4xl mx-auto">
                        <div className="bg-white rounded-3xl p-10 shadow-xl border border-stone-100/50 hover:shadow-2xl transition-all duration-300">
                            <div className="flex items-start mb-6">
                                <div className="w-16 h-16 bg-gradient-to-br from-stone-50 to-stone-100 rounded-full flex items-center justify-center mr-6 border border-stone-200/30">
                                    <span className="text-stone-600 text-xl">🥂</span>
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-serif text-2xl font-light text-stone-800 mb-2 tracking-wide">Evening Celebration</h3>
                                    <p className="text-stone-600 font-light text-lg tracking-wide">7:00 PM - 12:00 AM</p>
                                </div>
                            </div>
                            <p className="text-stone-600 mb-3 font-light tracking-wide">Monday 15th June, 2025</p>
                            <p className="text-stone-700 leading-relaxed font-light tracking-wide">
                                Garden Pavilion - Same location as ceremony. 
                                An evening of fine dining, heartfelt toasts, and dancing under the stars 
                                as we celebrate the beginning of our forever.
                            </p>
                        </div>
    
                    </div>
                </section>

                {/* Our Love Story Section */}
                <section className="py-20 px-6 bg-white">
                    <div className="text-center mb-16">
                        <div className="text-xs tracking-[0.2em] text-amber-600 uppercase font-light mb-4">Journey</div>
                        <h2 className="text-4xl font-serif font-light mb-6 text-stone-800 tracking-wide">How We Found Each Other</h2>
                        <div className="w-20 h-px bg-amber-300 mx-auto mb-6"></div>
                        <p className="text-stone-600 font-light tracking-wide max-w-md mx-auto leading-relaxed">
                            Every love story is beautiful, but ours is our favorite
                        </p>
                    </div>
                    
                    <div className="space-y-12 max-w-3xl mx-auto">
                        <div className="flex items-start space-x-6 group">
                            <div className="w-20 h-20 bg-gradient-to-br from-amber-50 to-amber-100 rounded-full flex items-center justify-center flex-shrink-0 border border-amber-200/30 group-hover:shadow-lg transition-all duration-300">
                                <span className="text-amber-600 text-xl">✨</span>
                            </div>
                            <div className="flex-1">
                                <h3 className="font-serif text-2xl font-light text-stone-800 mb-3 tracking-wide">The First Hello</h3>
                                <p className="text-sm text-amber-600 font-light mb-4 tracking-wider uppercase">December 25, 2020</p>
                                <p className="text-stone-700 leading-relaxed font-light tracking-wide">
                                    On a snowy Christmas morning at the local coffee shop, our eyes met over steaming cups of cocoa. 
                                    What started as a simple "excuse me" became hours of conversation that felt like minutes. 
                                    Sometimes the universe has perfect timing.
                                </p>
                            </div>
                        </div>
                        
                        <div className="flex items-start space-x-6 group">
                            <div className="w-20 h-20 bg-gradient-to-br from-stone-50 to-stone-100 rounded-full flex items-center justify-center flex-shrink-0 border border-stone-200/30 group-hover:shadow-lg transition-all duration-300">
                                <span className="text-stone-600 text-xl">🌹</span>
                            </div>
                            <div className="flex-1">
                                <h3 className="font-serif text-2xl font-light text-stone-800 mb-3 tracking-wide">Our First Adventure</h3>
                                <p className="text-sm text-stone-600 font-light mb-4 tracking-wider uppercase">December 28, 2020</p>
                                <p className="text-stone-700 leading-relaxed font-light tracking-wide">
                                    Three days later, we found ourselves walking through the winter gardens, sharing stories 
                                    and dreams under the moonlight. It was then we knew this was something special, 
                                    something worth nurturing and protecting.
                                </p>
                            </div>
                        </div>
                        
                        <div className="flex items-start space-x-6 group">
                            <div className="w-20 h-20 bg-gradient-to-br from-amber-50 to-yellow-50 rounded-full flex items-center justify-center flex-shrink-0 border border-amber-200/30 group-hover:shadow-lg transition-all duration-300">
                                <span className="text-amber-600 text-xl">💍</span>
                            </div>
                            <div className="flex-1">
                                <h3 className="font-serif text-2xl font-light text-stone-800 mb-3 tracking-wide">Forever Begins</h3>
                                <p className="text-sm text-amber-600 font-light mb-4 tracking-wider uppercase">January 1, 2021</p>
                                <p className="text-stone-700 leading-relaxed font-light tracking-wide">
                                    As the new year dawned, we made a promise to walk through life together. 
                                    Hand in hand, heart to heart, we embarked on this beautiful journey 
                                    that leads us to this very moment - our wedding day.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Contact Section */}
                <section className="py-20 px-6 bg-white">
                    <div className="text-center mb-16">
                        <div className="text-xs tracking-[0.2em] text-amber-600 uppercase font-light mb-4">Contact</div>
                        <h2 className="text-4xl font-serif font-light mb-6 text-stone-800 tracking-wide">Questions?</h2>
                        <div className="w-20 h-px bg-amber-300 mx-auto"></div>
                    </div>
                    
                    <div className="max-w-2xl mx-auto">
                        <p className="text-center text-stone-600 mb-12 leading-relaxed font-light tracking-wide">
                            We're here to help with any questions you may have about our special day.
                        </p>
                        <div className="space-y-6">
                            <div className="bg-white rounded-3xl p-8 shadow-xl border border-stone-100/50 text-center hover:shadow-2xl transition-all duration-300">
                                <div className="w-16 h-16 bg-gradient-to-br from-amber-50 to-amber-100 rounded-full flex items-center justify-center mx-auto mb-4 border border-amber-200/30">
                                    <span className="text-amber-600 text-xl">📧</span>
                                </div>
                                <p className="text-stone-700 font-light tracking-wide">sarah.john.wedding@email.com</p>
                            </div>
                            <div className="bg-white rounded-3xl p-8 shadow-xl border border-stone-100/50 text-center hover:shadow-2xl transition-all duration-300">
                                <div className="w-16 h-16 bg-gradient-to-br from-stone-50 to-stone-100 rounded-full flex items-center justify-center mx-auto mb-4 border border-stone-200/30">
                                    <span className="text-stone-600 text-xl">📱</span>
                                </div>
                                <p className="text-stone-700 font-light tracking-wide">(555) 123-4567</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Elegant Footer */}
                <section className="py-16 bg-gradient-to-r from-stone-100 to-amber-50/50">
                    <div className="text-center">
                        <div className="mb-6">
                            <h3 className="text-3xl font-serif font-light text-stone-800 mb-3 tracking-wide">
                                Sarah <span className="text-amber-500 mx-2">&</span> John
                            </h3>
                            <div className="w-16 h-px bg-amber-300 mx-auto mb-4"></div>
                        </div>
                        <p className="text-stone-600 text-sm font-light tracking-wider">
                            With love and anticipation, we await your presence ♡
                        </p>
                        <div className="mt-6 text-xs text-stone-500 font-light tracking-widest uppercase">
                            June 15th, 2025
                        </div>
                    </div>
                </section>
            </main>
        </MobileLayout>
    );
}

export default WeddingPage;