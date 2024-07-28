import Image from 'next/image';
import Link from 'next/link';

export default function SummarizerExtension() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <h1 className="text-4xl font-bold mb-4">Hebrew Summarizer Browser Extension</h1>
            <section className="w-full max-w-5xl">
                <p className="text-lg mb-4">
                    This project showcases the development of a Hebrew Summarizer Browser Extension. Initially, it was developed as part of my Bachelor's degree project using JavaScript, JSON, and HTML. Recently, I have revisited this project as a hobby, implementing it with modern technologies such as Python, PyTorch, Transformers, Flask, and HTML.
                </p>
                <h2 className="text-2xl font-semibold mb-2">Project Overview</h2>
                <p className="text-lg mb-4">
                    The browser extension summarizes Hebrew text to provide concise and meaningful information. The initial version was developed using web technologies, while the latest version leverages machine learning and deep learning frameworks to enhance the summarization capabilities.
                </p>
                <h2 className="text-2xl font-semibold mb-2">Old Implementation (Bachelor's Degree Project)</h2>
                <p className="text-lg mb-4">
                    The old implementation used JavaScript, JSON, and HTML to create a simple and functional browser extension. It provided basic summarization features for Hebrew text.
                </p>
                <ul className="list-disc pl-5 mb-4">
                    <li className="text-lg">Technologies Used: JavaScript, JSON, HTML</li>
                </ul>
                <h2 className="text-2xl font-semibold mb-2">New Implementation (Hobby Project)</h2>
                <p className="text-lg mb-4">
                    The new implementation improves upon the old one by using modern technologies and advanced machine learning techniques. It employs Python, PyTorch, and Transformers for the summarization model, and Flask for the backend server.
                </p>
                <ul className="list-disc pl-5 mb-4">
                    <li className="text-lg">Technologies Used: Python, PyTorch, Transformers, Flask, HTML</li>
                </ul>
                <h2 className="text-2xl font-semibold mb-2">GitHub Repositories</h2>
                <p className="text-lg mb-4">
                    You can view the complete code and documentation for both implementations on GitHub:
                </p>
                <ul className="list-disc pl-5 mb-4">
                    <li className="text-lg">
                        <a href="https://github.com/lubani/Summarizer-Extension" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
                            Summarizer-Extension (Old Implementation)
                        </a>
                    </li>
                    <li className="text-lg">
                        <a href="https://github.com/lubani/HebSum" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
                            HebSum (New Implementation)
                        </a>
                    </li>
                </ul>
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
