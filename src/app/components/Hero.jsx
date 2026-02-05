import Image from "next/image";
import Navbar from "@/app/components/Navbar";

const Hero = () => {
    return (
        <section className="relative h-screen w-full">

            {/* Background Image */}
            <Image
                src="/images/hero.jpg"
                alt="Therapy consulting"
                fill
                priority
                className="object-cover"
            />

            {/* Dark overlay for readability */}
            <div className="absolute inset-0 bg-black/25" />

            {/* Foreground content */}
            <div className="relative z-10 h-full">
                <Navbar />

                {/* Hero Text */}
                <div className="flex items-center h-full px-6 md:px-12">
                    <div className="max-w-2xl text-white">
                        <h1 className="text-4xl md:text-6xl font-serif leading-tight mb-6">
                            Thoughtful therapy<br />for modern lives
                        </h1>
                        <p className="text-lg md:text-xl text-white/90">
                            A calm, supportive space to slow down, reflect, and heal.
                        </p>
                        <button>Connect with me </button>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Hero;
