const ButtonSmall = ({ children }) => {
    return (
        <button className="
            rounded-md
            font-medium
            px-4 py-2 text-sm

            md:px-6 md:py-3 md:text-base

            bg-[var(--secondary)]
            text-[var(--primary)]
            transition-transform duration-200
            hover:scale-105
            active:scale-95
        ">
            {children}
        </button>
    );
};

export default ButtonSmall;