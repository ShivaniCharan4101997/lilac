import Image from "next/image";
import ButtonSmall from "@/app/ui/ButtonSmall";

const SectionAbout = () => {
    return (
        <section className="px-6 md:px-12 py-20 bg-[var(--primary)]">
            <div className="grid md:grid-cols-2 items-center gap-12">

                {/* Text */}
                <div>
                    <h1 className="text-3xl md:text-4xl font-serif leading-tight mb-6">
                        Meet
                        <span className="block text-[var(--secondary)] italic mt-1">
    Dr. Maya Reynolds,
  </span>
                        <span className="block text-base md:text-lg tracking-wide text-neutral-500 mt-2">
    PsyD
  </span>
                    </h1>

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
                   <ButtonSmall>Let's chat</ButtonSmall>
                </div>

                {/* Image */}
                <div>
                    <Image
                        src="/images/maya.png"
                        alt="About Me"
                        width={500}
                        height={500}
                        className="w-full h-auto object-cover rounded-lg"
                    />
                </div>

            </div>
        </section>
    );
};

export default SectionAbout;
