'use client';

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
    {
        question: "Who do you typically work with?",
        answer:
            "I work primarily with adults who feel overwhelmed by anxiety, stress, trauma, or burnout. Many of my clients are high-achieving professionals, creatives, or entrepreneurs who appear functional on the outside but feel exhausted, tense, or emotionally stuck internally.",
    },
    {
        question: "What issues do you specialize in?",
        answer:
            "My work often focuses on anxiety, panic, trauma, and burnout. I also support clients navigating perfectionism, chronic stress, and the lingering effects of past experiences that continue to impact their confidence, relationships, or sense of safety.",
    },
    {
        question: "What is your approach to therapy?",
        answer:
            "I take a warm, collaborative, and grounded approach. Sessions are structured enough to feel supportive while still allowing space for reflection and depth. I integrate evidence-based approaches such as CBT, EMDR, mindfulness-based practices, and body-oriented techniques.",
    },
    {
        question: "Do you offer trauma therapy?",
        answer:
            "Yes. Trauma work is an important part of my practice. I work with both single-incident trauma and more complex, long-standing patterns. Therapy is paced carefully, with a strong emphasis on safety, stabilization, and helping clients feel more regulated in daily life.",
    },
    {
        question: "Do you offer in-person or online sessions?",
        answer:
            "I offer in-person therapy from my Santa Monica office as well as secure telehealth sessions for clients located anywhere in California.",
    },
    {
        question: "What is your office like?",
        answer:
            "My office is a quiet, private, and calming space with natural light and a comfortable, uncluttered environment. Many clients share that the space itself helps them feel more grounded and at ease.",
    },
];



const SectionFAQs = () => {
    const [openIndex, setOpenIndex] = useState(null);

    return (
        <section className="px-4 sm:px-8 md:px-12 py-16 md:py-24 bg-secondary">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-5xl italic font-serif text-center mb-10 md:mb-16 text-[var(--primary)] leading-tight">
                    Common Questions
                </h2>

                <div className="space-y-3 md:space-y-4">
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <div
                                key={index}
                                className={`border border-neutral-200 rounded-2xl transition-all duration-300 ${isOpen ? "shadow-md ring-1 ring-[var(--primary)]/10" : "hover:border-neutral-300"
                                    }`}
                            >
                                <button
                                    onClick={() => setOpenIndex(isOpen ? null : index)}
                                    className="w-full flex justify-between items-center gap-4 px-5 py-5 md:px-8 md:py-6 text-left"
                                    aria-expanded={isOpen}
                                >
                                    <span className="font-medium text-white text-base md:text-lg leading-snug">
                                        {faq.question}
                                    </span>
                                    <span className="shrink-0 text-neutral-200">
                                        {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                                    </span>
                                </button>

                                <div
                                    className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                                        }`}
                                >
                                    <p className="px-5 pb-6 md:px-8 md:pb-8 text-neutral-200 text-sm md:text-base leading-relaxed">
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default SectionFAQs;