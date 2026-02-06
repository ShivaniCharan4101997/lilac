import Image from "next/image";
import { MessageCircle,Hourglass } from "lucide-react";
import ButtonSmall from "@/app/ui/ButtonSmall";

const SectionCalm = () => {
    return (
        <section className="px-6 md:px-12 py-20 bg-[var(--primary)]">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

                <div>
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
                             <Hourglass /> Open daily from <span className="font-bold font-black"> 7:00 AM</span> to <span className="font-bold font-black"> 6:00 PM</span>
                        </p>
                        <p className="flex items-center gap-2">
                            <MessageCircle size={18} />
                            Available during all open hours
                        </p>
                    </div>
                    <div className="mt-5">
                        <ButtonSmall>Learn more</ButtonSmall>
                    </div>

                </div>

                {/* Images */}
                <div className="relative w-full h-[500px]">
                    <Image
                        src="/images/office1.jpeg"
                        alt="Calm therapy office in Santa Monica"
                        fill
                        className="object-cover rounded-2xl shadow-md"
                    />


                    <div className="absolute bottom-[-10%] left-[-5%] w-1/2 h-1/2">
                        <Image
                            src="/images/office2.jpeg"
                            alt="Private therapy space with natural light"
                            fill
                            className="object-cover rounded-2xl shadow-lg border-4 border-white"
                        />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default SectionCalm;
