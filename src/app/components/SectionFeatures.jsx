"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FeatureCard from "@/app/ui/FeatureCard";

gsap.registerPlugin(ScrollTrigger);


const services = [
    {
        title: "Anxiety & Panic Therapy",
        img: "/images/anxiety.jpg",
        description:
            "Support for adults experiencing persistent worry, panic symptoms, physical tension, and difficulty relaxing. Therapy focuses on understanding both emotional and physiological patterns driving anxiety.",
    },
    {
        title: "Trauma & EMDR Therapy",
        img: "/images/trauma.jpg",
        description:
            "Trauma-informed therapy for adults impacted by single-incident or long-standing trauma. A paced, body-aware approach emphasizes safety, stabilization, and nervous-system regulation.",
    },
    {
        title: "Burnout & Perfectionism",
        img: "/images/burnout.jpg",
        description:
            "Support for high-achieving professionals navigating burnout, chronic stress, and perfectionism. Therapy becomes a space to slow down, reconnect, and develop more sustainable ways of living and working.",
    },
];




const SectionFeatures = () => {
    const sectionRef = useRef(null);
    const headingRef = useRef(null);
    const cardsRef = useRef([]);

    const setCardRef = (el, index) => {
        cardsRef.current[index] = el;
    };

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(headingRef.current, {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                },
                y: 30,
                opacity: 0,
                duration: 0.8,
                ease: "power3.out",
            });

            gsap.from(cardsRef.current, {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 75%",
                },
                y: 40,
                opacity: 0,
                stagger: 0.2,
                duration: 0.9,
                ease: "power3.out",
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);


    return (
        <section ref={sectionRef} className="px-6 md:px-12 py-20 bg-[var(--primary)]">

            <h2   ref={headingRef} className="text-3xl md:text-5xl font-serif italic text-[var(--accent)] text-center mb-12">
                My Specialties
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {services.map((feature, index) => (
                    <div
                        key={index}
                        ref={(el) => setCardRef(el, index)}
                    >
                        <FeatureCard
                            img={feature.img}
                            title={feature.title}
                            description={feature.description}
                        />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default SectionFeatures;
