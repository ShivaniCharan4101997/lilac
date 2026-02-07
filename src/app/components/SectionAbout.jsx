"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const SectionAbout = () => {
    const sectionRef = useRef(null);
    const textRef = useRef(null);
    const buttonRef = useRef(null);
    const imageRef = useRef(null);


    useGSAP(() => {

        gsap.from(textRef.current.children, {
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 75%",
            },
            y: 30,
            opacity: 0,
            stagger: 0.15,
            duration: 0.8,
            ease: "power3.out",
        });


        gsap.from(buttonRef.current, {
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 70%",
            },
            y: 20,
            opacity: 0,
            duration: 0.6,
            ease: "power3.out",
        });

        gsap.from(imageRef.current, {
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 75%",
            },
            x: 40,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
        });
    }, { scope: sectionRef });


    return (
        <section ref={sectionRef} className="px-6 md:px-12 py-24 bg-[var(--primary)]">
            <div className="grid md:grid-cols-2 items-center gap-12">

                <div ref={textRef}>
                    <h2 className="text-3xl md:text-4xl font-serif leading-tight mb-6">
                        Meet
                        <span className="block text-[var(--secondary)] italic mt-1">
                            Dr. Maya Reynolds,
                        </span>
                        <span className="block text-base md:text-lg tracking-wide text-neutral-500 mt-2">
                            PsyD
                        </span>
                    </h2>

                    <p className="text-neutral-700 leading-relaxed mb-6 pr-3">
                        I’m a licensed clinical psychologist based in Santa Monica, California,
                        offering therapy for adults who feel overwhelmed by anxiety, stress,
                        or the lingering effects of past experiences.
                    </p>

                    <p className="text-neutral-700 leading-relaxed mb-6 pr-3">
                        Many of my clients are thoughtful, high-achieving individuals who
                        appear “functional” on the outside, but internally feel exhausted,
                        stuck in overthinking, or emotionally on edge.
                    </p>

                    <p className="text-neutral-700 leading-relaxed mb-6 pr-3">
                        My approach is warm, collaborative, and grounded. I integrate
                        evidence-based methods like CBT, EMDR, mindfulness, and body-oriented
                        techniques to support both emotional and nervous-system regulation.
                    </p>
                </div>

                <div ref={imageRef}>
                    <Image
                        src="/images/maya.png"
                        alt="About Me"
                        width={500}
                        height={500}
                        className="w-auto mx-auto h-auto max-h-[500px] object-contain  rounded-xl"
                    />
                </div>
            </div>
        </section>
    );
};

export default SectionAbout;
