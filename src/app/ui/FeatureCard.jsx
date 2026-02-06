import Image from "next/image";

const FeatureCard = ({ title, description, img }) => {
    return (
        <div className="border bg-[var(--secondary)] text-[var(--primary)] p-6 text-center rounded-lg shadow-sm hover:shadow-md transition">
            {img && (
                <Image
                    src={img}
                    alt={title}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover rounded-md mb-4"
                />
            )}

            <h3 className="text-xl font-bold font-serif mb-2 ">{title}</h3>
            <p className="opacity-60 leading-relaxed text-sm ">{description}</p>
        </div>
    );
};

export default FeatureCard;
