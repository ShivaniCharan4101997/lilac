import Image from "next/image";
import ButtonLarge from "@/app/ui/ButtonLarge";

const Hero = () => {
    return (
        <section className="relative bg-[var(--primary)] min-h-[90vh] md:min-h-screen">
            <div className="mx-auto max-w-7xl px-6 md:px-12 pt-28 md:pt-32 pb-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-20 items-center">

                    {/* Left: Text */}
                    <div>
                        <h1 className="text-4xl md:text-6xl  leading-[1.1]
                        font-lora text-[var(--accent)] mb-6">
                            Thoughtful therapy
                            <br />
                            for modern lives
                        </h1>

                        <p className="text-lg md:text-xl leading-relaxed text-[var(--secondary)]/80 mb-10 max-w-xl">
                            A calm, supportive space to slow down, reflect, and heal — guided by care, clarity, and connection.
                        </p>

                        <ButtonLarge>Get in touch</ButtonLarge>
                    </div>

                    {/* Right: Image */}
                    <div className="relative w-full h-[380px] md:h-[520px] rounded-[2.75rem] overflow-hidden">
                        <Image
                            src="/images/hero.jpg"
                            alt="Therapy consulting"
                            fill
                            priority
                            className="object-cover"
                        />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Hero;
