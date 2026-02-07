"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { MessageCircle, Hourglass } from "lucide-react";
import ButtonSmall from "@/app/ui/ButtonSmall";

gsap.registerPlugin(ScrollTrigger);

const SectionCalm = () => {

    const sectionRef = useRef(null);
    const textRef = useRef(null);
    const buttonRef = useRef(null);
    const mainImageRef = useRef(null);
    const floatingImageRef = useRef(null);


    useEffect(() => {
        const ctx = gsap.context(() => {
            // Text block
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

            // Button
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

            // Main image
            gsap.from(mainImageRef.current, {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 75%",
                },
                opacity: 0,
                scale: 1.04,
                duration: 1,
                ease: "power3.out",
            });

            // Floating image (slight delay & offset)
            gsap.from(floatingImageRef.current, {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 70%",
                },
                y: 40,
                opacity: 0,
                duration: 0.9,
                ease: "power3.out",
                delay: 0.2,
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);


    return (
        <section className="px-6 md:px-12 py-20 bg-primary">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                <div ref={textRef}>
                    <h2 className="text-3xl md:text-4xl italic font-serif text-[var(--secondary)] mb-4">
                        Your Safe Space for Calm & Clarity
                    </h2>

                    <p className="text-neutral-700 leading-relaxed mb-8 font-lora">
                        Therapy is a space where you can slow down, be heard, and explore what
                        matters to you with compassionate support. Whether you meet in person
                        at my quiet Santa Monica office or through secure telehealth, the goal
                        is to help you feel steadier, more regulated, and more present in your life.
                    </p>

                    <div className="space-y-3 text-neutral-600 text-sm">
                        <p className="flex items-center gap-2">
                            <Hourglass size={18} />
                            Open daily from <span className="font-black">7:00 AM</span> to{" "}
                            <span className="font-black">6:00 PM</span>
                        </p>
                        <p className="flex items-center gap-2">
                            <MessageCircle size={18} />
                            Available during all open hours
                        </p>
                    </div>
                </div>


                {/* Images */}
                <div className="relative w-full h-[500px]">
                    <div ref={mainImageRef} className="absolute inset-0">
                        <Image
                            src="/images/office1.jpeg"
                            alt="Calm therapy office in Santa Monica"
                            fill
                            className="object-cover rounded-2xl shadow-md"
                        />
                    </div>

                    <div
                        ref={floatingImageRef}
                        className="absolute bottom-[-10%] left-[-5%] w-1/2 h-1/2"
                    >
                        <Image
                            src="/images/office2.jpeg"
                            alt="Private therapy space with natural light"
                            fill
                            className="object-cover rounded-2xl border-4 border-[var(--primary)]"
                        />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default SectionCalm;
