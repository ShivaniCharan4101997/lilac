import React from 'react';
import ButtonLarge from "@/app/ui/ButtonLarge";

function SectionCta() {
    return (
        <section className="px-6 md:px-12 py-20 bg-[var(--primary)] text-center">
            <h2 className="text-3xl md:text-4xl font-lora font-bold mb-6 text-[var(--accent)]">
                Get started today
            </h2>
            <p className="text-neutral-700 max-w-2xl mx-auto mb-8 leading-relaxed ">
                Ready to take the first step towards a happier, healthier you? Contact me to book your first session. I look forward to starting this therapeutic journey with you.
            </p>
            <div className="flex justify-center">
                <ButtonLarge>Get in touch</ButtonLarge>
            </div>

        </section>
    );
}

export default SectionCta;
