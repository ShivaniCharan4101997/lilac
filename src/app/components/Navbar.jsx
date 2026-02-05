"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
];

const Navbar = () => {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);

    const linkClass = (path) =>
        pathname === path
            ? "font-black"
            : "font-normal opacity-80 hover:opacity-100";

    return (
        <nav className="absolute top-0 left-0 w-full z-30 px-6 md:px-12 py-6">
            <div className="flex items-center justify-between text-[var(--accent)]">
                {/* Logo */}
                <Link href="/" className="text-xl tracking-wide font-heading">
                    StillMind
                </Link>

                {/* Desktop Nav */}
                <ul className="hidden md:flex gap-8 text-sm uppercase tracking-wider">
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <Link href={link.href} className={linkClass(link.href)}>
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden"
                    aria-label="Toggle menu"
                    onClick={() => setOpen(!open)}
                >
                    {open ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                className={`
          md:hidden
          absolute left-0 top-full w-full
          bg-[var(--secondary)]
          text-[var(--primary)]
          transition-all duration-300
          ${open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"}
        `}
            >
                <ul className="flex flex-col gap-6 px-6 py-8 uppercase tracking-wider text-sm">
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <Link
                                href={link.href}
                                onClick={() => setOpen(false)}
                                className={`
                  block
                  ${pathname === link.href ? "font-black" : "opacity-80"}
                `}
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
