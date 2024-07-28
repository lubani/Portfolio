import Image from 'next/image';
// import Link from 'next/link';

export default function DjangoMS() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <h1 className="text-4xl font-bold mb-4">Django Microservices Project</h1>
            <section className="w-full max-w-5xl">
                <p className="text-lg mb-4">
                    This project involves building and deploying a microservices architecture using Django. The aim is to create a scalable and efficient system that can handle various microservices, including user authentication, data processing, and more.
                </p>
                <h2 className="text-2xl font-semibold mb-2">Project Overview</h2>
                <p className="text-lg mb-4">
                    The Django Microservices Project focuses on creating a robust and scalable system using Django for microservices. This project explores different aspects of microservices architecture, such as service discovery, load balancing, and inter-service communication.
                </p>
                <h2 className="text-2xl font-semibold mb-2">Technologies and Methods</h2>
                <ul className="list-disc pl-5 mb-4">
                    <li className="text-lg">Django</li>
                    <li className="text-lg">Python</li>
                    {/* <li className="text-lg">Kubernetes</li>
                    <li className="text-lg">RabbitMQ</li> */}
                    <li className="text-lg">PostgreSQL</li>
                </ul>
                <h2 className="text-2xl font-semibold mb-2">GitHub Repository</h2>
                <p className="text-lg mb-4">
                    You can view the complete code and documentation for this project on GitHub: {' '}
                    <a href="https://github.com/lubani/DjangoMS" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
                        lubani/DjangoMS
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
