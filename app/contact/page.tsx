// app/contact/page.tsx
'use client';
import { useState, ChangeEvent, FormEvent } from 'react';

export default function Contact() {
    const [formData, setFormData] = useState({
        email: '',
        message: '',
    });
    const [status, setStatus] = useState('');

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        const response = await fetch('https://formspree.io/f/xovaedqv', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: formData.email,
                message: formData.message,
            }),
        });

        if (response.ok) {
            setStatus('Message sent successfully!');
        } else {
            setStatus('Failed to send message. Please try again.');
        }
    };

    return (
        <main className="main-container flex flex-col items-center justify-between">
            <h1 className="text-4xl font-bold mb-4">Contact Me</h1>
            <div className="w-full max-w-5xl">
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-lg font-medium">Your email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full p-2 border border-gray-300 rounded bg-white text-black"
                        />
                    </div>
                    <div>
                        <label className="block text-lg font-medium">Your message</label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            className="w-full p-2 border border-gray-300 rounded bg-white text-black"
                        />
                    </div>
                    <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">Send</button>
                </form>
                {status && <p className="mt-4 text-lg">{status}</p>}
                <div className="mt-8">
                    <h2 className="text-2xl font-bold mb-2">Connect with me</h2>
                    <p className="text-lg">
                        <a href="mailto:lubacareer@gmail.com" className="text-blue-500 hover:underline">lubacareer@gmail.com</a>
                    </p>
                    <p className="text-lg">
                        <a href="https://www.linkedin.com/in/luba-ira" target="_blank" className="text-blue-500 hover:underline">LinkedIn</a>
                    </p>
                </div>
            </div>
        </main>
    );
}
