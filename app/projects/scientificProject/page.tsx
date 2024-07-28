import Image from 'next/image';
// import Link from 'next/link';

export default function ScientificProject() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <h1 className="text-4xl font-bold mb-4">Scientific Project: 2-Phase Stefan Problem</h1>
            <section className="w-full max-w-5xl">
                <p className="text-lg mb-4">
                    This project is part of my Master's degree research at Sami Shamoon College of Engineering, focusing on the 2-phase Stefan problem using Python 3 and a Physics-Informed Neural Network (PINN). The study involves both iron on Earth and regolith on the Moon as Phase Change Materials (PCMs), and is expected to be completed by the end of August 2024.
                </p>
                <h2 className="text-2xl font-semibold mb-2">Project Overview</h2>
                <p className="text-lg mb-4">
                    The 2-phase Stefan problem is a mathematical model used to describe the phase change process of materials. This research involves developing numerical simulations to understand the melting and solidification processes of iron on Earth and regolith on the Moon. A Physics-Informed Neural Network (PINN) is used to solve the problem, providing accurate and efficient solutions.
                </p>
                <h2 className="text-2xl font-semibold mb-2">Technologies and Methods</h2>
                <ul className="list-disc pl-5 mb-4">
                    <li className="text-lg">Python 3</li>
                    <li className="text-lg">Physics-Informed Neural Network (PINN)</li>
                    <li className="text-lg">Numerical Simulation</li>
                    <li className="text-lg">Heat Transfer Analysis</li>
                    <li className="text-lg">Phase Change Material (PCM) Analysis</li>
                </ul>
                <h2 className="text-2xl font-semibold mb-2">GitHub Repository</h2>
                <p className="text-lg mb-4">
                    You can view the complete code and documentation for this project on GitHub: {' '}
                    <a href="https://github.com/lubani/scientificProject" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
                        lubani/scientificProject
                    </a>.
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
