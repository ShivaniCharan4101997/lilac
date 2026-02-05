import FeatureCard from "@/app/ui/FeatureCard"


const features = [
    {
        title: "Anxiety & Overwhelm",
        img:"/images/anxiety.jpg",
        description:
            "Support for persistent worry, racing thoughts, and feeling constantly on edge.",
    },
    {
        title: "Trauma & Emotional Healing",
        img:"/images/trauma.jpg",
        description:
            "A gentle, body-aware approach to processing past experiences safely.",
    },
    {
        title: "Burnout & Perfectionism",
        img:"/images/burnout.jpg",
        description:
            "Helping high-achieving adults slow down, reset boundaries, and reconnect.",
    },
];



const SectionFeatures = () => {
    return (
        <section className="px-6 md:px-12 py-20">

            <h2 className="text-3xl md:text-4xl font-serif text-center mb-12">
                My Specialties
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                    <FeatureCard
                        img={feature.img}
                        key={index}
                        title={feature.title}
                        description={feature.description}
                    />
                ))}
            </div>

        </section>
    );
};

export default SectionFeatures;
