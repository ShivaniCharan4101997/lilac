import React from "react";
import { ArrowRight } from "lucide-react";

const ButtonLarge = ({ children }) => {
    return (
        <button
            className="
        group
        flex items-center justify-between md:justify-start
        gap-3 md:gap-6
        rounded-full

        pl-6 pr-2 py-2
        md:pl-8 md:pr-3 md:py-3

        bg-[var(--primary)]
        text-[var(--accent)]
        border border-gray-300
        transition-all duration-200
        hover:bg-[var(--secondary)]
        hover:text-[var(--primary)]
        focus-visible:outline-none
        focus-visible:ring-2
        focus-visible:ring-gray-400

        w-full md:w-auto
      "
        >
            <span className="font-medium text-base md:text-lg">
                {children}
            </span>

            <span
                className="
          flex items-center justify-center
          h-10 w-10 md:h-12 md:w-12
          rounded-full
          bg-[var(--secondary)]
          text-[var(--primary)]
          transition-all duration-200
          group-hover:bg-[var(--primary)]
          group-hover:text-[var(--secondary)]
          shrink-0
        "
            >
                <ArrowRight size={20} className="md:w-[24px]" />
            </span>
        </button>
    );
};

export default ButtonLarge;