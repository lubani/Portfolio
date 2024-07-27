import Image from 'next/image';
import Link from 'next/link';

export default function DevOps2412() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <h1 className="text-4xl font-bold mb-4">DevOps2412</h1>
            <section className="w-full max-w-5xl">
                <p className="text-lg mb-4">
                    Welcome to the DevOps2412 project. This repository showcases my work and learnings in DevOps, including various projects and exercises.
                </p>
                <h2 className="text-2xl font-semibold mb-2">Project Overview</h2>
                <p className="text-lg mb-4">
                    This project includes hands-on exercises and real-world projects related to DevOps practices and tools. It covers topics such as CI/CD pipelines, containerization with Docker, orchestration with Kubernetes, and infrastructure as code using Terraform and Ansible.
                </p>
                <h2 className="text-2xl font-semibold mb-2">Technologies Used</h2>
                <ul className="list-disc pl-5 mb-4">
                    <li className="text-lg">Docker</li>
                    <li className="text-lg">Kubernetes</li>
                    <li className="text-lg">Jenkins</li>
                    <li className="text-lg">Terraform</li>
                    <li className="text-lg">Ansible</li>
                    <li className="text-lg">AWS</li>
                </ul>
                <h2 className="text-2xl font-semibold mb-2">GitHub Repository</h2>
                <p className="text-lg mb-4">
                    You can view the complete code and documentation for this project on GitHub: {' '}
                    <a href="https://github.com/lubani/DevOps2412" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
                        lubani/DevOps2412
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
