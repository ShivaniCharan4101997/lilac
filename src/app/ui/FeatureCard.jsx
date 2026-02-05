import Image from "next/image";

const FeatureCard = ({ title, description, img }) => {
    return (
        <div className="border border-neutral-300 p-6 text-center rounded-lg shadow-sm hover:shadow-md transition">
            {/* Image */}
            {img && (
                <Image
                    src={img}
                    alt={title}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover rounded-md mb-4"
                />
            )}

            <h3 className="text-xl font-serif mb-2">{title}</h3>
            <p className="text-neutral-600 leading-relaxed">{description}</p>
        </div>
    );
};

export default FeatureCard;
