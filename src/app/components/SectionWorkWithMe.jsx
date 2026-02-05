import Image from "next/image";

const SectionWorkWithMe = () => {
    return (
        <section className="px-6 md:px-12 py-20 bg-gray-50">
            <div className="grid md:grid-cols-2 items-center gap-12">

                {/* Image */}
                <div>
                    <Image
                        src="/images/workWithMe.jpg"
                        width={500}
                        height={500}
                        alt="Work with Me"
                        className="w-full h-auto object-cover rounded-lg"
                    />
                </div>

                {/* Text */}
                <div>
                    <h1 className="text-3xl md:text-4xl font-serif mb-6">
                        You don’t have to do this all alone.
                    </h1>

                    <div className="mb-6">
                        <p className="mb-4">
                            If you are facing any of these, there’s hope:
                        </p>
                        <ul className="list-disc list-inside space-y-2 text-neutral-700">
                            <li>Persistent feelings of sadness or hopelessness</li>
                            <li>Trouble focusing or making decisions</li>
                            <li>Difficulty maintaining relationships</li>
                            <li>Feeling constantly exhausted or unmotivated</li>
                            <li>A pervasive sense of being overwhelmed</li>
                        </ul>
                        <p className="mt-4 text-neutral-700">
                            With empathy and guidance, we'll work together to navigate the challenges life throws your way.
                        </p>
                    </div>

                    <button className="bg-indigo-100 text-indigo-800 py-3 px-6 rounded-lg hover:bg-indigo-200 transition">
                        Work with Me
                    </button>
                </div>

            </div>
        </section>
    );
};

export default SectionWorkWithMe;
