import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
    const [form, setForm] = useState({ name: '', email: '', message: '' });

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        const subject = `Portfolio Contact from ${form.name}`;
        const body = `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`;
        window.location.href = `mailto:pratapadhikari37@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="p-4 md:p-8 max-w-4xl font-mono text-sm md:text-base text-vscode-text"
        >
            <div className="text-gray-500 mb-4 font-mono">
                .contact-form {'{'}
            </div>

            <div className="max-w-lg pl-4">
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">

                    <div className="flex flex-col">
                        <label className="text-vscode-keyword mb-1">name:</label>
                        <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            required
                            className="bg-vscode-input bg-[#3c3c3c] border border-gray-600 rounded p-2 text-vscode-text focus:outline-none focus:border-vscode-statusBar"
                            placeholder='"Your Name"'
                        />
                    </div>

                    <div className="flex flex-col">
                        <label className="text-vscode-keyword mb-1">email:</label>
                        <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            required
                            className="bg-vscode-input bg-[#3c3c3c] border border-gray-600 rounded p-2 text-vscode-text focus:outline-none focus:border-vscode-statusBar"
                            placeholder='"example@gmail.com"'
                        />
                    </div>

                    <div className="flex flex-col">
                        <label className="text-vscode-keyword mb-1">message:</label>
                        <textarea
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                            required
                            rows={4}
                            className="bg-vscode-input bg-[#3c3c3c] border border-gray-600 rounded p-2 text-vscode-text focus:outline-none focus:border-vscode-statusBar"
                            placeholder='"Kind regards..."'
                        />
                    </div>

                    <button type="submit" className="bg-vscode-keyword text-vscode-bg font-bold py-2 px-6 rounded mt-4 w-max hover:opacity-90 transition-opacity">
                        send(message);
                    </button>

                </form>
            </div>

            <div className="text-gray-500 mt-4 font-mono">
                {'}'}
            </div>

            <div className="mt-8 pt-8 border-t border-gray-800">
                <h3 className="text-vscode-function text-lg mb-2">Socials</h3>
                <div className="flex gap-4">
                    <a href="#" className="text-vscode-string hover:underline">github.com/pratapJs</a>
                    <a href="#" className="text-vscode-string hover:underline">linkedin.com/in/pratap</a>
                </div>
            </div>

        </motion.div>
    )
}

export default Contact;
