// app/projects/math/page.tsx

import Image from 'next/image';
import Link from 'next/link';

export default function Math() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <h1 className="text-4xl font-bold mb-4">Math Projects</h1>
            <section className="w-full max-w-5xl">
                <p className="text-lg mb-4">
                    Welcome to the Math Projects repository. This repository contains various mathematical simulations and projects I have worked on as a hobby. It covers topics such as discrete math, statistics, and calculus.
                </p>
                <h2 className="text-2xl font-semibold mb-2">Project Overview</h2>
                <p className="text-lg mb-4">
                    The repository includes implementations of various mathematical concepts, simulations, and problem-solving exercises. These projects demonstrate my passion for mathematics and my ability to apply mathematical theories in practical scenarios.
                </p>
                <h2 className="text-2xl font-semibold mb-2">Technologies Used</h2>
                <ul className="list-disc pl-5 mb-4">
                    <li className="text-lg">Python</li>
                    <li className="text-lg">NumPy</li>
                    <li className="text-lg">Matplotlib</li>
                    <li className="text-lg">SciPy</li>
                    {/* <li className="text-lg">Jupyter Notebook</li> */}
                </ul>
                <h2 className="text-2xl font-semibold mb-2">GitHub Repository</h2>
                <p className="text-lg mb-4">
                    You can view the complete code and documentation for this project on GitHub: {' '}
                    <Link href="https://github.com/lubani/math" className="text-blue-500 hover:underline" target="_blank">
                        lubani/math
                    </Link>.
                </p>
            </section>
            <Image
                src="/medegree.jpg"
                alt="Luba Ira"
                width={150}
                height={150}
                className="rounded-full mt-8"
            />
        </main>
    );
}
