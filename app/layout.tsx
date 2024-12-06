// layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Luba\'s Portfolio',
    description: 'Generated by create next app',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <head>
                <title>{metadata.title as string}</title>
                <meta name="description" content={metadata.description as string} />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </head>
            <body className={inter.className}>
                <div className="main-container flex flex-col items-center justify-between">
                    <header className="w-full max-w-5xl text-center">
                        <Image
                            src="/medegree.jpg"
                            alt="Luba Ira"
                            width={150}
                            height={150}
                            className="rounded-full mx-auto mb-4"
                        />
                        <h1 className="text-6xl font-bold mb-2">Luba Ira</h1>
                        <h2 className="h2-box text-2xl font-medium mb-4">Software Engineer | Tutor</h2>
                    </header>
                    <nav className="w-full max-w-5xl mb-8">
                        <ul className="flex flex-col md:flex-row justify-around">
                            <li>
                                <Link href="/" passHref>
                                    <button className="nav-button">Home</button>
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" passHref>
                                    <button className="nav-button">About Me</button>
                                </Link>
                            </li>
                            <li>
                                <Link href="/education" passHref>
                                    <button className="nav-button">Education</button>
                                </Link>
                            </li>
                            <li>
                                <Link href="/experience" passHref>
                                    <button className="nav-button">Work Experience</button>
                                </Link>
                            </li>
                            <li>
                                <Link href="/skills" passHref>
                                    <button className="nav-button">Skills</button>
                                </Link>
                            </li>
                            <li>
                                <Link href="/projects" passHref>
                                    <button className="nav-button">GitHub Projects</button>
                                </Link>
                            </li>
                            <li>
                                <Link href="/cv" passHref>
                                    <button className="nav-button">My CV</button>
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" passHref>
                                    <button className="nav-button">Contact Me</button>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                    <main className="w-full max-w-5xl">
                        {children}
                    </main>
                </div>
            </body>
        </html>
    );
}
