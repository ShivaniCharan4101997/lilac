const ButtonSmall = ({ children }) => {
    return (
        <button className="
      rounded-md
      font-medium
      px-6 py-3
      bg-[var(--secondary)]
      text-[var(--primary)]
      transition-transform duration-200
      hover:scale-105
    ">
            {children}
        </button>
    );
};

export default ButtonSmall;
