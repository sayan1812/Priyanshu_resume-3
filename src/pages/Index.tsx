import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Education from '../components/Education';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Achievements from '../components/Achievements';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import AIChatbot from '../components/AIChatbot';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-background">
      {/* Fixed Header */}
      <Header />
      
      {/* Main Content */}
      <main>
        <Hero />
        <About />
        <Education />
        <Experience />
        <Skills />
        <Projects />
        <Achievements />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* AI Chatbot Widget */}
      <AIChatbot />
    </div>
  );
};

export default Index;
