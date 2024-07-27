import Link from 'next/link';

export default function Projects() {
    return (
        <main className="p-24">
            <h1 className="text-4xl font-bold mb-4">GitHub Projects</h1>
            <h2 className="text-2xl font-semibold mb-4">Under Construction</h2>
            <ul className="list-disc pl-5">
                <li>
                    <Link href="/projects/DevOps2412">
                        <span className="text-lg hover:underline">DevOps2412</span>
                    </Link>
                </li>
                <li>
                    <Link href="/projects/scientificProject">
                        <span className="text-lg hover:underline">Scientific Project</span>
                    </Link>
                </li>
                <li>
                    <Link href="/projects/math">
                        <span className="text-lg hover:underline">Math</span>
                    </Link>
                </li>
                {/* <li>
                    <Link href="/projects/RFinance">
                        <span className="text-lg hover:underline">RFinance</span>
                    </Link>
                </li>
                <li>
                    <Link href="/projects/IRCourse">
                        <span className="text-lg hover:underline">IR Course</span>
                    </Link>
                </li>
                <li>
                    <Link href="/projects/DjangoMS">
                        <span className="text-lg hover:underline">DjangoMS</span>
                    </Link>
                </li>
                <li>
                    <Link href="/projects/Summarizer-Extension">
                        <span className="text-lg hover:underline">Summarizer Extension</span>
                    </Link>
                </li> */}
            </ul>
        </main>
    );
}
