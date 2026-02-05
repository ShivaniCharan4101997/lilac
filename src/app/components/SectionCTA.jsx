import React from 'react';

function SectionCta() {
    return (
        <section className="px-6 md:px-12 py-20 bg-indigo-50 text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-neutral-900">
                Get started today
            </h2>
            <p className="text-neutral-700 max-w-2xl mx-auto mb-8 leading-relaxed">
                Ready to take the first step towards a happier, healthier you? Contact me to book your first session. I look forward to starting this therapeutic journey with you.
            </p>
            <button className="bg-indigo-600 text-white py-3 px-6 rounded-lg hover:bg-indigo-700 transition">
                Get in touch
            </button>
        </section>
    );
}

export default SectionCta;
