"use client";

import { useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
import ButtonLarge from "@/app/ui/ButtonLarge";
import { useGSAP } from "@gsap/react";

const Hero = () => {
    const textRef = useRef(null);
    const imageRef = useRef(null);
    const containerRef = useRef(null);


    useGSAP(() => {

        const fadeIn = gsap.utils.toArray(".fade-in")
        gsap.set(fadeIn, {
            y: 50,
            stagger: 0.15,
        })
        gsap.set(imageRef.current, {
            clipPath: "inset(49.8% 0% 50% 0%)"
            // clipPath: "polygon(0 0, 100% 100%, 100% 0, 0% 100%)"
        })

        const tl = gsap.timeline({
            defaults: {
                ease: "power3.out",
                duration: 2,
            },
        });

        tl.to(fadeIn, {
            y: 0,
            opacity: 1,
            stagger: 0.5,
        });

        tl.to(
            imageRef.current,
            {
                delay: .2,
                clipPath: "inset(0% 0% 0% 0%)"
                // clipPath: "polygon(0 0, 100% 0%, 100% 100%, 0% 100%)"
            }, -.0
        );
    }, { scope: containerRef });


    return (
        <section ref={containerRef} className="relative bg-primary h-[90vh] max-h-[800px] md:min-h-screen">
            <div className="mx-auto max-w-7xl px-6 md:px-12 pt-28 md:pt-32 pb-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-20 items-center">

                    <div ref={textRef}>
                        <h1 className="fade-in text-2xl md:text-4xl  leading-[1.1]
                        font-lora italic text-(--accent) mb-6">
                            Embrace your journey
                            to
                            <br />
                            inner peace
                        </h1>

                        <p className="fade-in text-lg md:text-sm leading-relaxed text-secondary mb-10 max-w-xl">
                            Compassionate, evidence-based therapy for adults who feel overwhelmed,
                            burned out, or stuck in constant overthinking—offered in person in Santa
                            Monica and online throughout California.
                        </p>
                        <div className="fade-in">
                            <ButtonLarge>Get in touch</ButtonLarge>
                        </div>
                    </div>


                    <div ref={imageRef} className="relative scale-75 w-full h-[380px] md:h-[520px] rounded-[2.75rem] overflow-hidden">
                        <Image
                            src="/images/hero.jpg"
                            alt="Therapy consulting"
                            priority
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            className="object-cover"
                        />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Hero;
