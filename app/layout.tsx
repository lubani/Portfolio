import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Create Next App',
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
                <title>{(metadata.title as string) ?? ''}</title>
                <meta name="description" content={(metadata.description as string) ?? ''} />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </head>
            <body className={inter.className}>
                <div className="flex min-h-screen flex-col items-center justify-between p-24">
                    <header className="w-full max-w-5xl text-center">
                        <Image
                            src="/medegree.jpg"
                            alt="Luba Ira"
                            width={150}
                            height={150}
                            className="rounded-full mx-auto mb-4"
                        />
                        <h1 className="text-6xl font-bold mb-4">Luba Ira</h1>
                    </header>
                    <nav className="w-full max-w-5xl mb-8">
                        <ul className="flex flex-col md:flex-row justify-around">
                            <li>
                                <Link href="/" className="text-lg hover:underline">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="text-lg hover:underline">
                                    About Me
                                </Link>
                            </li>
                            <li>
                                <Link href="/education" className="text-lg hover:underline">
                                    Education
                                </Link>
                            </li>
                            <li>
                                <Link href="/experience" className="text-lg hover:underline">
                                    Work Experience
                                </Link>
                            </li>
                            <li>
                                <Link href="/skills" className="text-lg hover:underline">
                                    Skills
                                </Link>
                            </li>
                            <li>
                                <Link href="/projects" className="text-lg hover:underline">
                                    GitHub Projects
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-lg hover:underline">
                                    Contact Me
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
