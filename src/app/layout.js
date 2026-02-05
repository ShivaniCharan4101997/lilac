import { Libre_Baskerville, Inter } from "next/font/google";
import "./globals.css";

const libre = Libre_Baskerville({
    subsets: ["latin"],
    weight: ["400", "700"],
    variable: "--font-serif",
});

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-sans",
});

export const metadata = {
    title: "Lilac Template Clone",
    description: "Homepage clone using Next.js and Tailwind CSS",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <body className={`${inter.variable} ${libre.variable} antialiased`}>
        {children}
        </body>
        </html>
    );
}
