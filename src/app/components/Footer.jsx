import React from 'react';
import Link from 'next/link';
import Divider from "@/app/ui/Divider";

const Footer = () => {
    return (
        <footer className="bg-[var(--secondary)] text-[var(--primary)]">
            <div className="max-w-6xl mx-auto px-6 md:px-12 py-12 grid md:grid-cols-2 gap-8">

                {/* Brand */}
                <div>
                    <h3 className="text-2xl font-lora tracking-wide font-bold mb-4">StillMind</h3>
                    <p className="text-neutral-300 leading-relaxed">123th Street 45 W<br />Santa Monica, CA 90401</p>
                    <p><a href="mailto:email@example.com" className="text-neutral-300">mayaReynolds12@gmail.com</a></p>
                    <p><a href="tel:5555555555" className="text-neutral-300">(555) 555-5555</a></p>
                </div>

                <div className="grid grid-cols-2 gap-8">
                    {/* Hours */}
                    <div>
                        <h4 className="text-2xl font-lora tracking-wide font-bold mb-4">Hours</h4>
                        <ul className="space-y-2 text-neutral-300">
                            <li>Monday - Friday</li>
                            <li>10am - 6pm</li>
                        </ul>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h4 className="text-2xl font-lora tracking-wide font-bold mb-4">Find</h4>
                        <ul className="space-y-2 text-neutral-300">
                            <li><a href="/">Home</a></li>
                            <li><a href="/contact">Contact</a></li>
                            <li><a href="/blog">Blog</a></li>
                        </ul>
                    </div>
                </div>

            </div>
<Divider/>
            {/* Bottom Footer */}
            <div className="bg-[var(--secondary)] text-[var(--primary)] py-8 text-center text-sm space-y-2">
                <div className="flex flex-wrap justify-center gap-4">
                    <a href="#" className="underline">Privacy & Cookies Policy</a>
                    <a href="#" className="underline">Good Faith Estimate</a>
                    <a href="#" className="underline">Website Terms & Conditions</a>
                    <a href="#" className="underline">Disclaimer</a>
                </div>
                <p>
                    Website Template Credits: <a href="#" className="underline">Go Bloom Creative</a>
                </p>
                <p className="pt-6">All Rights Reserved © 2024 Your Business Name Here, LLC.</p>
            </div>
        </footer>

    );
};

export default Footer;
