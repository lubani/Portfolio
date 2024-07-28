import Image from 'next/image';
import Link from 'next/link';

export default function IRCourse() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <h1 className="text-4xl font-bold mb-4">Information Retrieval Course</h1>
            <section className="w-full max-w-5xl">
                <p className="text-lg mb-4">
                    This project is part of the Information Retrieval course where we developed three programs focused on Sentiment Analysis and Abstractive Summarization.
                </p>
                <h2 className="text-2xl font-semibold mb-2">Project Overview</h2>
                <p className="text-lg mb-4">
                    We developed three programs for this project:
                    <ul className="list-disc pl-5 mb-4">
                        <li className="text-lg"><strong>LR.py</strong>: Logistic Regression Classifier for Sentiment Analysis</li>
                        <li className="text-lg"><strong>NB.py</strong>: Multinomial Naive Bayes Classifier for Sentiment Analysis</li>
                        <li className="text-lg"><strong>main.py</strong>: Abstractive Summarizer using BART</li>
                    </ul>
                </p>
                <h2 className="text-2xl font-semibold mb-2">Dataset</h2>
                <p className="text-lg mb-4">
                    For the Sentiment Analysis problem, we used the dataset from <a href="https://www.kaggle.com/datasets/snap/amazon-fine-food-reviews" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">Amazon Fine Food Reviews</a>.
                    For the Abstractive Summarization problem, we used a web URL, preferably from Wikipedia.
                </p>
                <h2 className="text-2xl font-semibold mb-2">Installation</h2>
                <p className="text-lg mb-4">
                    To install the dependencies for this project, run the following command:
                </p>
                <pre className="bg-gray-900 text-white p-4 rounded mb-4">
                    <code>pip install -r requirements.txt</code>
                </pre>
                <h2 className="text-2xl font-semibold mb-2">Usage</h2>
                <p className="text-lg mb-4">
                    To use each file, run the following commands:
                </p>
                <ul className="list-disc pl-5 mb-4">
                    <li className="text-lg"><code>python LR.py</code> for Logistic Regression Classifier</li>
                    <li className="text-lg"><code>python NB.py</code> for Multinomial Naive Bayes Classifier</li>
                    <li className="text-lg"><code>python main.py</code> for Abstractive Summarizer</li>
                </ul>
                <h2 className="text-2xl font-semibold mb-2">GitHub Repository</h2>
                <p className="text-lg mb-4">
                    You can view the complete code and documentation for this project on GitHub: {' '}
                    <a href="https://github.com/lubani/IRCourse" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
                        lubani/IRCourse
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
