'use client'

import { useState } from "react";
import Image from "next/image";

const faqs = [
    {
        question: "How do I know if therapy is right for me?",
        answer: "Therapy can be helpful for anyone looking to explore their thoughts and feelings in a safe environment. If you’re feeling stuck, overwhelmed, or want guidance, it may be the right time to start.",
    },
    {
        question: "Do you offer telehealth sessions?",
        answer: "Yes! I provide both in-person sessions in Santa Monica, CA, and secure telehealth sessions across California.",
    },
    {
        question: "What therapy approaches do you use?",
        answer: "I use CBT, EMDR, mindfulness, and body-based techniques, tailoring each session to your needs and goals.",
    },
];

const SectionFAQs = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="px-6 md:px-12 py-20 bg-gray-50">
            {/* Added min-h to keep the section container stable */}
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">

                {/* Image - Added priority and fixed aspect ratio container */}
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-lg shadow-sm">
                    <Image
                        src="/images/faq.jpg"
                        alt="Therapy session FAQ"
                        fill
                        priority // Prevents LCP layout shift
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover"
                    />
                </div>

                {/* FAQ Text */}
                <div className="flex flex-col">
                    <h2 className="text-3xl md:text-4xl font-serif mb-6">FAQs</h2>
                    <p className="text-neutral-700 mb-8">
                        Here are some common questions clients ask about therapy, what to expect, and how to get started.
                    </p>

                    <div className="space-y-4">
                        {faqs.map((faq, index) => {
                            const isOpen = openIndex === index;
                            return (
                                <div key={index} className="border border-neutral-200 rounded-lg bg-white overflow-hidden transition-all duration-200">
                                    <button
                                        onClick={() => toggleFAQ(index)}
                                        aria-expanded={isOpen}
                                        className="w-full text-left px-5 py-4 flex justify-between items-center hover:bg-neutral-50 transition-colors"
                                    >
                                        <span className="font-medium text-neutral-900">{faq.question}</span>
                                        <span className={`transform transition-transform duration-300 ${isOpen ? "rotate-45" : "rotate-0"}`}>
                                            +
                                        </span>
                                    </button>

                                    {/* Grid-based transition for smoother, shift-free expansion */}
                                    <div
                                        className={`grid transition-all duration-300 ease-in-out ${
                                            isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                                        }`}
                                    >
                                        <div className="overflow-hidden">
                                            <div className="px-5 pb-5 text-neutral-600 leading-relaxed">
                                                {faq.answer}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SectionFAQs;