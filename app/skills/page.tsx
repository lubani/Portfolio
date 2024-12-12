export default function Skills() {
    const skills = [
        'Python', 'C', 'R', 'UNIX', 'Mathematics', 'Statistics', 'Machine & Deep Learning',
        'Physics', 'Docker', 'Jenkins', 'Git', 'SQL & NoSQL', 'NLP',
    ];

    return (
        <main className="p-24">
            <h1 className="text-4xl font-bold mb-8">Skills</h1>
            <div className="flex flex-wrap gap-4">
                {skills.map((skill, idx) => (
                    <div key={idx} className="nav-button inline-block">
                        {skill}
                    </div>
                ))}
            </div>
        </main>
    );
}
