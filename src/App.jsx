import React, { useEffect } from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import About from './sections/About';
import Leadership from './sections/Leadership';
import Faculty from './sections/Faculty';
import Admissions from './sections/Admissions';
import Contact from './sections/Contact';
import { initEmailJS } from './services/emailService';

/**
 * Main App Component
 * 
 * Entry point for the school website
 * Assembles all sections into a single-page application
 */
function App() {
    useEffect(() => {
        initEmailJS();
    }, []);

    return (
        <div className="min-h-screen bg-neutral-50 text-neutral-900 font-sans">
            {/* Navigation - Fixed at top */}
            <Navigation />

            {/* Main Content */}
            <main>
                <Hero />
                <About />
                <Leadership />
                <Faculty />
                <Admissions />
                <Contact />
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
}

export default App;
