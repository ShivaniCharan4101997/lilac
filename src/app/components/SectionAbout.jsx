import Image from "next/image";

const SectionAbout = () => {
    return (
        <section className="px-6 md:px-12 py-20">
            <div className="grid md:grid-cols-2 items-center gap-12">

                {/* Text */}
                <div>
                    <h1 className="text-3xl md:text-4xl font-serif mb-6">
                        Hi, I’m Lilac.
                    </h1>
                    <p className="text-neutral-700 leading-relaxed mb-6 pr-3">
                        I'm committed to providing a safe and supportive environment where we can explore your thoughts, feelings, and behaviors. With empathy and guidance, we'll work together to navigate the challenges life throws your way.
                    </p>
                    <button className="bg-indigo-100 text-indigo-800 py-3 px-6 rounded-lg hover:bg-indigo-200 transition">
                        Let's Chat
                    </button>
                </div>

                {/* Image */}
                <div>
                    <Image
                        src="/images/about.jpg"
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
