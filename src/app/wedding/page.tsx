'use client';
import MobileLayout from '@src/components/layouts/MobileLayout';
import React from 'react';

const WeddingPage: React.FC = () => {
    return (
        <MobileLayout>
            <main className="p-6 space-y-8">
                {/* Hero Section */}
                <section className="text-center py-12">
                    <h1 className="text-4xl font-bold mb-4 text-gray-800">Sarah & John</h1>
                    <p className="text-xl text-gray-600 mb-6">
                        We're getting married!
                    </p>
                    <div className="text-lg text-gray-700">
                        <p>June 15th, 2025</p>
                        <p>Sunset Gardens, California</p>
                    </div>
                </section>

                {/* Our Story Section */}
                <section className="py-8">
                    <h2 className="text-2xl font-bold mb-4 text-gray-800">Our Story</h2>
                    <div className="space-y-4 text-gray-700">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                            nostrud exercitation ullamco laboris.
                        </p>
                        <p>
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
                            eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                            sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                        <p>
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium 
                            doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore 
                            veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                        </p>
                    </div>
                </section>

                {/* Wedding Details Section */}
                <section className="py-8">
                    <h2 className="text-2xl font-bold mb-4 text-gray-800">Wedding Details</h2>
                    <div className="space-y-6">
                        <div className="bg-gray-50 p-4 rounded-lg">
                            <h3 className="font-semibold text-lg mb-2">Ceremony</h3>
                            <p className="text-gray-700">3:00 PM - Sunset Gardens Chapel</p>
                            <p className="text-gray-600">123 Garden Lane, California</p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg">
                            <h3 className="font-semibold text-lg mb-2">Reception</h3>
                            <p className="text-gray-700">6:00 PM - Garden Pavilion</p>
                            <p className="text-gray-600">Same location as ceremony</p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg">
                            <h3 className="font-semibold text-lg mb-2">Dress Code</h3>
                            <p className="text-gray-700">Semi-formal / Cocktail attire</p>
                            <p className="text-gray-600">Colors: Sage green and cream preferred</p>
                        </div>
                    </div>
                </section>

                {/* RSVP Section */}
                <section className="py-8">
                    <h2 className="text-2xl font-bold mb-4 text-gray-800">RSVP</h2>
                    <div className="bg-blue-50 p-6 rounded-lg">
                        <p className="text-gray-700 mb-4">
                            Please confirm your attendance by May 1st, 2025
                        </p>
                        <button className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-colors">
                            RSVP Now
                        </button>
                    </div>
                </section>

                {/* Registry Section */}
                <section className="py-8">
                    <h2 className="text-2xl font-bold mb-4 text-gray-800">Gift Registry</h2>
                    <div className="space-y-4">
                        <p className="text-gray-700">
                            Your presence is the greatest gift, but if you'd like to give something, 
                            we've registered at the following stores:
                        </p>
                        <div className="space-y-2">
                            <a href="#" className="block bg-gray-50 p-3 rounded hover:bg-gray-100 transition-colors">
                                🏠 Crate & Barrel
                            </a>
                            <a href="#" className="block bg-gray-50 p-3 rounded hover:bg-gray-100 transition-colors">
                                🛏️ Bed Bath & Beyond
                            </a>
                            <a href="#" className="block bg-gray-50 p-3 rounded hover:bg-gray-100 transition-colors">
                                🏡 Williams Sonoma
                            </a>
                        </div>
                    </div>
                </section>

                {/* Travel Info Section */}
                <section className="py-8">
                    <h2 className="text-2xl font-bold mb-4 text-gray-800">Travel & Accommodations</h2>
                    <div className="space-y-4">
                        <div className="bg-gray-50 p-4 rounded-lg">
                            <h3 className="font-semibold text-lg mb-2">Recommended Hotels</h3>
                            <ul className="space-y-2 text-gray-700">
                                <li>• Garden Inn Hotel - 2 miles from venue</li>
                                <li>• Sunset Suites - 3 miles from venue</li>
                                <li>• California Lodge - 5 miles from venue</li>
                            </ul>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg">
                            <h3 className="font-semibold text-lg mb-2">Transportation</h3>
                            <p className="text-gray-700">
                                Shuttle service will be provided from Garden Inn Hotel to the venue. 
                                Departure times: 2:30 PM and 5:30 PM
                            </p>
                        </div>
                    </div>
                </section>

                {/* Contact Section */}
                <section className="py-8 pb-16">
                    <h2 className="text-2xl font-bold mb-4 text-gray-800">Questions?</h2>
                    <div className="space-y-4">
                        <p className="text-gray-700">
                            If you have any questions, please don't hesitate to reach out:
                        </p>
                        <div className="space-y-2">
                            <p className="text-gray-700">📧 sarah.john.wedding@email.com</p>
                            <p className="text-gray-700">📱 (555) 123-4567</p>
                        </div>
                    </div>
                </section>
            </main>
        </MobileLayout>
    );
}

export default WeddingPage;