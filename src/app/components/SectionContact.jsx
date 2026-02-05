import Image from "next/image";

const SectionContact = () => {
    return (
        <section className="px-6 md:px-12 py-20 bg-gray-50">
            <div className="grid md:grid-cols-2 items-center gap-12">

                {/* Text */}
                <div>
                    <h1 className="text-3xl md:text-4xl font-serif mb-6">
                        Live a fulfilling life.
                    </h1>
                    <p className="text-neutral-700 leading-relaxed mb-6">
                        Life can be challenging—especially when you're trying to balance your personal and professional life.
                        It's easy to feel like you're alone in facing these challenges, but I want you to know that I'm here to help.
                    </p>
                    <button className="bg-indigo-100 text-indigo-800 py-3 px-6 rounded-lg hover:bg-indigo-200 transition">
                        Get in touch
                    </button>
                </div>

                {/* Image */}
                <div>
                    <Image
                        src="/images/contactImg.jpg"
                        width={500}
                        height={500}
                        alt="Get in touch image"
                        className="w-full h-auto object-cover rounded-lg"
                    />
                </div>

            </div>
        </section>
    );
};

export default SectionContact;
