import React from "react";
import { ArrowRight } from "lucide-react";

const ButtonLarge = ({ children }) => {
    return (
        <button
            className="
        group
        flex items-center gap-4
        rounded-full
        px-4 py-2
        bg-[var(--primary)]
        text-[var(--accent)]
        border border-gray-300
        transition-all duration-200
        hover:bg-[var(--secondary)]
        hover:text-[var(--primary)]
        focus-visible:outline-none
        focus-visible:ring-2
        focus-visible:ring-gray-400
      "
        >
            <span className="font-medium">{children}</span>

            <span
                className="
          flex items-center justify-center
          h-10 w-10
          rounded-full
          bg-[var(--secondary)]
          text-[var(--primary)]
          transition-all duration-200
          group-hover:bg-[var(--primary)]
          group-hover:text-[var(--secondary)]
        "
            >
        <ArrowRight size={18} />
      </span>
        </button>
    );
};

export default ButtonLarge;
