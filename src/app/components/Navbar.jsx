import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="absolute top-0 left-0 w-full z-20 px-6 md:px-12 py-6 flex items-center justify-between text-white">

            <Link href="/" className="text-lg font-serif tracking-wide">
                Lilac
            </Link>

            <ul className="flex gap-8 text-sm uppercase tracking-wider">
                <li>
                    <Link href="/blog">Blog</Link>
                </li>
                <li>
                    <Link href="/contact">Contact</Link>
                </li>
            </ul>

        </nav>
    );
};

export default Navbar;
