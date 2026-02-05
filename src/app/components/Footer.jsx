import React from 'react';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="bg-neutral-900 text-white mt-20">
            <div className="max-w-6xl mx-auto px-6 md:px-12 py-12 grid md:grid-cols-2 gap-8">

                {/* Brand */}
                <div>
                    <h3 className="text-2xl font-serif font-bold mb-4">Lilac Therapy</h3>
                    <p className="text-neutral-300 leading-relaxed">123 Example Road<br />Minneapolis, MN</p>
                    <p><a href="mailto:email@example.com" className="text-neutral-300">email@example.com</a></p>
                    <p><a href="tel:5555555555" className="text-neutral-300">(555) 555-5555</a></p>
                </div>

                <div className="grid grid-cols-2 gap-8">
                    {/* Hours */}
                    <div>
                        <h4 className="font-semibold mb-4">Hours</h4>
                        <ul className="space-y-2 text-neutral-300">
                            <li>Monday - Friday</li>
                            <li>10am - 6pm</li>
                        </ul>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h4 className="font-semibold mb-4">Find</h4>
                        <ul className="space-y-2 text-neutral-300">
                            <li><a href="/">Home</a></li>
                            <li><a href="/contact">Contact</a></li>
                            <li><a href="/blog">Blog</a></li>
                        </ul>
                    </div>
                </div>

            </div>

            {/* Bottom Footer */}
            <div className="bg-neutral-800 text-neutral-400 py-6 text-center text-sm space-y-2">
                <div className="flex flex-wrap justify-center gap-4">
                    <a href="#" className="underline">Privacy & Cookies Policy</a>
                    <a href="#">Good Faith Estimate</a>
                    <a href="#">Website Terms & Conditions</a>
                    <a href="#">Disclaimer</a>
                </div>
                <p>
                    Website Template Credits: <a href="#" className="underline">Go Bloom Creative</a>
                </p>
                <p>All Rights Reserved © 2024 Your Business Name Here, LLC.</p>
            </div>
        </footer>

    );
};

export default Footer;
