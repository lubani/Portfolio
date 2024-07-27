// app/education/page.tsx
export default function Education() {
    return (
        <main className="p-24">
            <h1 className="text-4xl font-bold mb-4">Education</h1>
            <div className="mb-8">
                <h2 className="text-2xl font-semibold">Master of Science in Software Engineering</h2>
                <p className="text-lg">Sami Shamoon College of Engineering</p>
                <p className="text-lg mb-4">2022 – 2024</p>
                <p className="text-lg">
                    Thesis: A Cloud Simulation of Latent Heat Thermal Energy Storage in Lunar Regolith in Support of Future Lunar Settlement
                    <br />
                    GPA: 96
                </p>
            </div>
            <div className="mb-8">
                <h2 className="text-2xl font-semibold">Bachelor of Science in Software Engineering</h2>
                <p className="text-lg">Sami Shamoon College of Engineering</p>
                <p className="text-lg mb-4">2015 – 2022</p>
                <p className="text-lg">
                    Final Project: Summarization of Hebrew text using NLP techniques
                    <br />
                    GPA: 80
                </p>
            </div>
            <div className="mb-8">
                <h2 className="text-2xl font-semibold">DevOps Course</h2>
                <p className="text-lg">Experts Group</p>
                <p className="text-lg mb-4">2023 – 2024</p>
                <p className="text-lg">
                    Studied hands-on DevOps topics with coursework and projects.
                </p>
            </div>
        </main>
    );
}
