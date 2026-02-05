'use client'

import { useState } from "react";

const experiences = [
    {
        type: "Work",
        question: "Senior Clinical Therapist - Santa Monica Wellness Center (2020 - Present)",
        answer: "Specializing in CBT and EMDR for adults navigating life transitions and anxiety.",
    },
    {
        type: "Work",
        question: "Associate Psychotherapist - California Health Group (2017 - 2020)",
        answer: "Provided individual and group therapy sessions focused on mindfulness-based stress reduction.",
    },
    {
        type: "Education",
        question: "M.A. in Clinical Psychology - University of Southern California",
        answer: "Master’s degree focused on clinical psychology, CBT, and EMDR methods.",
    },
    {
        type: "Education",
        question: "B.A. in Psychology - UC Berkeley",
        answer: "Bachelor’s degree in Psychology, emphasizing developmental and cognitive studies.",
    },
    {
        type: "Certification",
        question: "Licensed Marriage and Family Therapist (LMFT)",
        answer: "Fully licensed practitioner specializing in adult therapy and family counseling.",
    },
    {
        type: "Certification",
        question: "Certified EMDR Practitioner",
        answer: "Trained and certified in EMDR therapy for trauma and emotional healing.",
    },
    {
        type: "Certification",
        question: "Advanced CBT Certification",
        answer: "Advanced training in cognitive behavioral therapy techniques for anxiety and burnout.",
    }
];

const SectionBackground = () => {
    const [openIndex, setOpenIndex] = useState(null);
    const toggleFAQ = (index) => setOpenIndex(openIndex === index ? null : index);

    return (
        <section className="px-6 md:px-12 py-20 bg-white">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-serif mb-12 text-neutral-900 text-center">
                    My Professional Background
                </h2>

                {/* Accordion */}
                <div className="space-y-4">
                    {experiences.map((item, index) => (
                        <div key={index} className="border border-neutral-300 rounded-lg overflow-hidden">
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full text-left px-4 py-3 bg-white flex justify-between items-center hover:bg-gray-50 transition"
                            >
                                <span className="font-medium">{item.question}</span>
                                <span>{openIndex === index ? "−" : "+"}</span>
                            </button>

                            <div
                                className="overflow-hidden transition-[max-height] duration-300 ease-in-out bg-gray-50"
                                style={{ maxHeight: openIndex === index ? "300px" : "0px" }}
                            >
                                <div className="px-4 py-3 text-neutral-700">{item.answer}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SectionBackground;
