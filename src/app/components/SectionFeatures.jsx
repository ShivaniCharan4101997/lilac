import FeatureCard from "@/app/ui/FeatureCard"


const services = [
    {
        title: "Anxiety & Panic Therapy",
        img: "/images/anxiety.jpg",
        description:
            "Support for adults experiencing persistent worry, panic symptoms, physical tension, and difficulty relaxing. Therapy focuses on understanding both emotional and physiological patterns driving anxiety.",
    },
    {
        title: "Trauma & EMDR Therapy",
        img: "/images/trauma.jpg",
        description:
            "Trauma-informed therapy for adults impacted by single-incident or long-standing trauma. A paced, body-aware approach emphasizes safety, stabilization, and nervous-system regulation.",
    },
    {
        title: "Burnout & Perfectionism",
        img: "/images/burnout.jpg",
        description:
            "Support for high-achieving professionals navigating burnout, chronic stress, and perfectionism. Therapy becomes a space to slow down, reconnect, and develop more sustainable ways of living and working.",
    },
];




const SectionFeatures = () => {
    return (
        <section className="px-6 md:px-12 py-20 bg-[var(--primary)]">

            <h2 className="text-3xl md:text-5xl font-serif italic text-[var(--accent)] text-center mb-12">
                My Specialties
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {services.map((feature, index) => (
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
