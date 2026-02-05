import { Lora } from "next/font/google";
import "./globals.css";

const lora = Lora({
    subsets: ["latin"],
    weight: ["400", "600", "700"],
    variable: "--font-heading",
    display: "swap",
});

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <body className={`${lora.variable} antialiased`}>
        {children}
        </body>
        </html>
    );
}
