import React from 'react';
import { motion } from 'framer-motion';

function App() {
  return (
    <div className="font-sans bg-white text-gray-900">
      <header className="p-8 text-center bg-gray-100 shadow-md">
        <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="text-4xl font-bold">
          Welcome to Orbix Clone
        </motion.h1>
      </header>
      <main className="p-6 space-y-12">
        <section id="about">
          <h2 className="text-2xl font-semibold">About Us</h2>
          <p>This is a modern digital agency clone with animations and responsive design.</p>
        </section>
        <section id="services">
          <h2 className="text-2xl font-semibold">Our Services</h2>
          <ul className="list-disc pl-5">
            <li>Web Design</li>
            <li>Branding</li>
            <li>Development</li>
          </ul>
        </section>
        <section id="portfolio">
          <h2 className="text-2xl font-semibold">Portfolio</h2>
          <p>Portfolio items go here.</p>
        </section>
        <section id="testimonials">
          <h2 className="text-2xl font-semibold">Testimonials</h2>
          <p>Client feedback displayed here.</p>
        </section>
        <section id="contact">
          <h2 className="text-2xl font-semibold">Contact Us</h2>
          <form action="https://formspree.io/f/your-form-id" method="POST" className="space-y-4 max-w-md">
            <input type="text" name="name" placeholder="Your Name" required className="w-full p-2 border border-gray-300 rounded"/>
            <input type="email" name="email" placeholder="Your Email" required className="w-full p-2 border border-gray-300 rounded"/>
            <textarea name="message" placeholder="Your Message" required className="w-full p-2 border border-gray-300 rounded"></textarea>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Send</button>
          </form>
        </section>
      </main>
      <footer className="p-4 text-center bg-gray-100 text-sm">
        &copy; 2025 Orbix Clone. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
