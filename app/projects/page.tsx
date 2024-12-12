import Link from 'next/link';

export default function Projects() {
    const projects = [
        { href: '/projects/DevOps2412', label: 'DevOps2412' },
        { href: '/projects/scientificProject', label: 'Scientific Project' },
        { href: '/projects/math', label: 'Math' },
        { href: '/projects/IRCourse', label: 'IR Course' },
        { href: '/projects/DjangoMS', label: 'DjangoMS' },
        { href: '/projects/Summarizer-Extension', label: 'Summarizer Extension' },
    ];

    return (
        <main className="p-24">
            <h1 className="text-4xl font-bold mb-8">GitHub Projects</h1>
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                {projects.map((project, idx) => (
                    <Link href={project.href} key={idx}>
                        <button className="nav-button w-full text-center">
                            {project.label}
                        </button>
                    </Link>
                ))}
            </div>
        </main>
    );
}
