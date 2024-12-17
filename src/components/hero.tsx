import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 64; // Adjust this value based on your navbar height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="home" className="relative bg-gradient-to-r from-indigo-500 to-purple-600 overflow-hidden z-0 min-h-screen w-full">
      {/* Background Overlay for better text visibility on small screens */}
      <div className="absolute inset-0 bg-black opacity-20 sm:opacity-30 md:opacity-40 lg:opacity-50"></div>

      <div className="relative z-20 flex flex-col justify-center items-center min-h-screen px-4 sm:px-6 lg:px-8">
        <main className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight">
              <span className="block">Amer Mohammed</span>
              <span className="block text-yellow-300 mt-2 sm:mt-4">Full-Stack Developer</span>
            </h1>
            <p className="mt-4 sm:mt-6 md:mt-8 text-base sm:text-lg md:text-xl text-indigo-100 max-w-xl mx-auto">
              Crafting innovative web solutions that drive business growth and user engagement. Specializing in full-stack development with expertise in modern web technologies.
            </p>
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
              <Button
                size="lg"
                className="w-full sm:w-auto flex items-center justify-center px-6 py-3"
                onClick={() => scrollToSection('projects')}
              >
                View Projects <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                className="w-full sm:w-auto flex items-center justify-center px-6 py-3 bg-white dark:bg-gray-800 text-black dark:text-white hover:bg-indigo-50 dark:hover:bg-gray-700 transition-colors duration-300"
                onClick={() => scrollToSection('contact')}
              >
                Contact Me
              </Button>
            </div>
          </motion.div>
        </main>
      </div>

      {/* Decorative SVG for large screens */}
      <div className="hidden lg:block absolute inset-y-0 right-0 w-1/2">
        <svg
          className="absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
          fill="currentColor"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          {/* You can add SVG paths or shapes here if needed */}
        </svg>
      </div>

      {/* Animated Chevron for scrolling */}
      <motion.div
        className="absolute bottom-5 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <ChevronDown className="h-8 w-8 text-white animate-bounce" />
      </motion.div>
    </section>
  );
}
