'use client';

import { useState } from "react";

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


const SectionFAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    return (
        <section className="px-6 md:px-12 py-20 bg-[var(--secondary)]">
            <div className="max-w-3xl mx-auto">

                {/* Heading */}
                <h2 className="text-3xl md:text-4xl italic font-serif text-center mb-12 text-[var(--primary)]">
                    Common Questions
                </h2>

                {/* FAQ Items */}
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="border border-neutral-300 rounded-xl overflow-hidden bg-[var(--primary)]"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex justify-between items-center px-6 py-5 text-left"
                            >
                <span className="font-medium text-[var(--accent)] text-lg">
                  {faq.question}
                </span>
                                <span className="text-2xl text-neutral-500">
                  {openIndex === index ? "–" : "+"}
                </span>
                            </button>

                            <div
                                className="transition-all duration-300 ease-in-out overflow-hidden"
                                style={{
                                    maxHeight: openIndex === index ? "300px" : "0px",
                                }}
                            >
                                <p className="px-6 pb-6 text-neutral-700 leading-relaxed">
                                    {faq.answer}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default SectionFAQ;
